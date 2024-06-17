import { contractDetails } from "./contractDetails";
import { getAccount } from "@wagmi/core";
import { ethers, BigNumber, providers } from "ethers";

const bigNumber = 1.1579208923731621e61;
const liquidationReserve = 200;
const _maxFeePercentage = "50000000";

const chainIdRead = "11155111";

const providerRead = new ethers.providers.JsonRpcProvider(`
https://ethereum-sepolia-rpc.publicnode.com
`);
const getMetaMask = () => {
  const providerMetaMask = new ethers.providers.Web3Provider(window.ethereum);
  return providerMetaMask;
};

const getAccountDetails = async () => {
  let { address } = getAccount();
  try {
    const details = {};
    const accounts = address;
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const networkName = await provider.getNetwork();
    const chainId = await window.ethereum.request({ method: "net_version" });
    const balanceCheckprovider = new ethers.Contract(
      contractDetails["wbtc"].address[chainId],
      contractDetails["wbtc"].abi,
      provider
    );
    const balance = await balanceCheckprovider.balanceOf(accounts);
    details.account = accounts;
    details.networkName = networkName.name;
    details.chainId = chainId;
    details.balance = ethers.utils.formatUnits(balance, 8);

    if (accounts.length) {
      return details;
    } else {
      console.log("ERROR IN  METAMASK CONNECTION");
    }
  } catch (error) {
    return false;
  }
};

const getAddress = async () => {
  try {
    const accountDetail = await getAccountDetails();
    return accountDetail.account;
  } catch (error) {
    console.log(error);
  }
};

const readContractFunction = async (token) => {
  const chainId = await getChainId();
  const provider = await getMetaMask();
  return new ethers.Contract(
    contractDetails[token].address[chainId],
    contractDetails[token].abi,
    provider
  );
};

const getChainId = async () => {
  try {
    const network = await getAccountDetails();
    return network.chainId;
  } catch (error) {
    console.log(error);
  }
};

const writeContractFunction = async (token) => {
  const mProviderInner = getMetaMask();
  const signer = await mProviderInner.getSigner();
  const chainId = await getChainId();

  const check = new ethers.Contract(
    contractDetails[token].address[chainId],
    contractDetails[token].abi,
    signer
  );
  return new ethers.Contract(
    contractDetails[token].address[chainId],
    contractDetails[token].abi,
    signer
  );
};

const sortedVaultSize = async () => {
  try {
    const contract = await readContractFunction("sortedVaults");
    const size = await contract.getSize();
    const vaultSize = size.toString();
    return vaultSize;
  } catch (error) {
    console.log(error);
  }
};

const getVaultStatusFn = async () => {
  const contract = await readContractFunction("vaultManager");
  const address = getAddress();
  let status = await contract.getVaultStatus(address);
  return Number(status) === 1 ? true : false;
};

const getVaultDebtColl = async () => {
  const contract = await readContractFunction("vaultManager");
  const address = getAddress();
  let vault = await contract.Vaults(address);
  let { coll, debt } = vault;
  coll = ethers.utils.formatUnits(coll, 8);
  debt = Number(ethers.utils.formatUnits(debt, 8) - liquidationReserve);
  return { coll, debt };
};

const marketPriceWei = async () => {
  try {
    const usmContract = await readContractFunction("usm");
    const marketPrice = await usmContract.latestPrice();
    return marketPrice;
  } catch (error) {
    console.log(error);
  }
};

const marketPriceFn = async () => {
  try {
    const usmContract = await readContractFunction("usm");
    const marketPrice = await usmContract.latestPrice();
    return ethers.utils.formatUnits(marketPrice, 8);
    // return Number(marketPrice) / 10e17;
  } catch (error) {
    console.log(error);
  }
};

const marketPriceFnRead = async () => {
  try {
    const UsdaoContract = new ethers.Contract(
      contractDetails["usm"].address[chainIdRead],
      contractDetails["usm"].abi,
      providerRead
    );
    const marketPrice = await UsdaoContract.latestPrice();
    return ethers.utils.formatUnits(marketPrice, 8);
  } catch (error) {
    console.log(error);
  }
};

const sortedVaultSizeRead = async () => {
  try {
    // const contract = await readContractFunction("sortedVaults");
    const contract = new ethers.Contract(
      contractDetails["sortedVaults"].address[chainIdRead],
      contractDetails["sortedVaults"].abi,
      providerRead
    );
    const size = await contract.getSize();
    const vaultSize = size.toString();
    return vaultSize;
  } catch (error) {
    console.log(error);
  }
};

const getTvlRead = async () => {
  const usmContract = new ethers.Contract(
    contractDetails["usm"].address[chainIdRead],
    contractDetails["usm"].abi,
    providerRead
  );
  const poolHex = await usmContract.wbtcPool();
  const pool = ethers.utils.formatUnits(poolHex, 8);
  return pool;
};

const totalSupplyRead = async () => {
  try {
    const usmContract = new ethers.Contract(
      contractDetails["usm"].address[chainIdRead],
      contractDetails["usm"].abi,
      providerRead
    );
    const totalSupply = await usmContract.totalSupply();
    const value = ethers.utils.formatUnits(totalSupply, 8);
    return value;
  } catch (error) {
    console.log(error);
  }
};

const readContractWithoutMeta = async (token) => {
  return new ethers.Contract(
    contractDetails[token].address[chainIdRead],
    contractDetails[token].abi,
    providerRead
  );
};

const getTCRread = async () => {
  try {
    const contract = new ethers.Contract(
      contractDetails["vaultManager"].address[chainIdRead],
      contractDetails["vaultManager"].abi,
      providerRead
    );
    const usmContract = await readContractWithoutMeta("usm");
    let marketPrice = await usmContract.latestPrice();
    let tcr = await contract.getTCR(marketPrice);
    tcr = ethers.utils.formatUnits(tcr, 8) * 100;
    if (Number(tcr) === Number(bigNumber)) {
      return { tcr: null };
    }
    return { tcr };
  } catch (error) {
    console.log("err-----------", error);
  }
};

const collateralFn = async (eth, usdao) => {
  try {
    const contract = await readContractFunction("hintHelper");
    const ethWei = ethers.utils.parseUnits(eth, 8);
    const usdaoWei = ethers.utils.parseUnits(
      (usdao + liquidationReserve).toString(),
      8
    );
    const marketPriceVal = await marketPriceWei();
    let ratio1 = await contract.computeCR(ethWei, usdaoWei, marketPriceVal);
    const ratio = ethers.utils.formatUnits(ratio1, 8);
    if (ratio === bigNumber) {
      return null;
    }
    return ratio * 100;
  } catch (e) {
    console.log(e);
  }
};

const feeFn = (depositInputVal) => {
  let { usdaoVal } = depositInputVal;
  let usadoWei = ethers.utils.parseUnits(usdaoVal, 8);
  return usadoWei.mul(BigNumber.from("5")).div(BigNumber.from("1000"));
};

const collateralFnForDeposite = async (eth, usdaoWei) => {
  try {
    const contract = await readContractFunction("hintHelper");
    const ethWei = ethers.utils.parseUnits(eth, 8);
    const marketPriceVal = await marketPriceWei();
    let ratio1 = await contract.computeCR(ethWei, usdaoWei, marketPriceVal);
    const ratio = ethers.utils.formatUnits(ratio1, 8);
    if (ratio === bigNumber) {
      return null;
    }
    return ratio * 100;
  } catch (e) {
    console.log(e);
  }
};

const totalDeptFn = async (val) => {
  let fee = 0.005 * parseFloat(val);
  return parseFloat(liquidationReserve) + parseFloat(val) + parseFloat(fee);
};

const liquidationPriceFn = (val) => {
  val = parseFloat(val);
  let tenPercent = 0.1 * val,
    liquidationPrice = (val + tenPercent) / val;
  return liquidationPrice || 0.0;
};

const checkRecovery = async () => {
  const contract = await readContractFunction("vaultManager");
  const marketPriceVal = await marketPriceWei();
  const recoveryModeCheck = await contract.checkRecoveryMode(marketPriceVal);
  return { recoveryModeCheck };
};

const getEtherBalance = async () => {
  try {
    const accountDetail = await getAccountDetails();
    return accountDetail.balance;
  } catch (error) {
    console.log(error);
  }
};

const balanceOf = async (token) => {
  try {
    const readFunction = await readContractFunction(token);
    const balance = await readFunction.balanceOf(await getAddress());
    const decimal = await readFunction.decimals();
    const formatedBalance = ethers.utils.formatUnits(balance, decimal);
    return parseFloat(formatedBalance);
  } catch (error) {
    console.log(error);
  }
};

const fetchInitialAccVal = async () => {
  try {
    const usmBalance = await balanceOf("usm");
    const etherBalance = await getEtherBalance();
    return { usmBalance, etherBalance };
  } catch (error) {
    console.log("error in fetch");
  }
};

const getAllowance = async (address, wbtcValue) => {
  const chainId = await getChainId();
  const provider = await getMetaMask();
  const usdaoAddress = contractDetails["usm"].address[chainId];
  try {
    const wbtc = await readContractFunction("wbtc");
    const writeWbtc = await writeContractFunction("wbtc");
    const getAllow = await wbtc.allowance(address, usdaoAddress);
    if (getAllow <= wbtcValue) {
      const approveToken = await writeWbtc.approve(usdaoAddress, wbtcValue);
      return approveToken;
    }
  } catch (err) {
    console.log(err);
  }
};

const confirmDepositeFn = async (depositInputVal, refreshAllData) => {
  let data;
  try {
    let { etherVal, usdaoVal } = depositInputVal;
    const etherWei = ethers.utils.parseUnits(etherVal, 8);
    const usdaoWei = ethers.utils.parseUnits(usdaoVal, 8);
    const contract = await writeContractFunction("borrowerOperation");
    const address = await getAddress();
    data = await contract.openVault(
      _maxFeePercentage,
      usdaoWei,
      etherWei,
      address,
      address
    );
  } catch (e) {
    if (e.code === 4001) {
      return swal("User denied transaction.");
    }
    if (String(e).includes("Operation must leave vault with ICR")) {
      return swal(
        "System is in Recover Mode. Vault cannot be opened below 125% collateral ratio"
      );
    }
  }

  if (data) {
    const provider = await getMetaMask();
    provider
      .waitForTransaction(data.hash)
      .then((res, err) => {
        if (res.status) {
          swal("Hurray!!! Vault Successfully Created");
          refreshAllData();
        } else {
          swal("Transaction Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const getTCR = async () => {
  try {
    const contract = await writeContractFunction("vaultManager");
    const usmContract = await readContractFunction("usm");
    let marketPrice = await usmContract.latestPrice();
    let tcr = await contract.getTCR(marketPrice);
    tcr = ethers.utils.formatUnits(tcr, 8) * 100;
    if (Number(tcr) === Number(bigNumber)) {
      return { tcr: null };
    }
    return { tcr };
  } catch (error) {
    console.log("err-----------", error);
  }
};

const getTvl = async () => {
  const usmContract = await readContractFunction("usm");
  const poolHex = await usmContract.wbtcPool();
  const pool = ethers.utils.formatUnits(poolHex, 8);
  return pool;
};

const totalSupply = async () => {
  try {
    const usmContract = await readContractFunction("usm");
    const totalSupply = await usmContract.totalSupply();
    return ethers.utils.formatUnits(totalSupply, 8);
  } catch (error) {
    console.log(error);
  }
};

export {
  getAccountDetails,
  getVaultDebtColl,
  sortedVaultSize,
  getVaultStatusFn,
  collateralFn,
  feeFn,
  collateralFnForDeposite,
  totalDeptFn,
  liquidationPriceFn,
  checkRecovery,
  getMetaMask,
  fetchInitialAccVal,
  getAllowance,
  confirmDepositeFn,
  marketPriceFn,
  getTCR,
  getTvl,
  totalSupply,
  marketPriceFnRead,
  sortedVaultSizeRead,
  getTvlRead,
  totalSupplyRead,
  getTCRread,
};
