export const contractDetails = {
  usm: {
    name: "usm",
    tokenImage: "https://onvault.usdao.io/usm.png",
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "_oracle",
            type: "address",
          },
          {
            internalType: "address",
            name: "_wbtc",
            type: "address",
          },
          {
            internalType: "address",
            name: "_foundation",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minWithdrawalSeconds",
            type: "uint256",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "allowance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "needed",
            type: "uint256",
          },
        ],
        name: "ERC20InsufficientAllowance",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "needed",
            type: "uint256",
          },
        ],
        name: "ERC20InsufficientBalance",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "approver",
            type: "address",
          },
        ],
        name: "ERC20InvalidApprover",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
        ],
        name: "ERC20InvalidReceiver",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
        ],
        name: "ERC20InvalidSender",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
        ],
        name: "ERC20InvalidSpender",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [],
        name: "USDAODebt",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "borrowerOperations",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_netDebtDecrease",
            type: "uint256",
          },
        ],
        name: "decreaseUSDAODebt",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "foundationAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_netDebtIncrease",
            type: "uint256",
          },
        ],
        name: "increaseUSDAODebt",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "latestPrice",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "onvaultWBTCReceive",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "onvaultWBTCTransfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "oracle",
        outputs: [
          {
            internalType: "contract Oracle",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_poolAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "_receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "returnFromPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "revenueContract",
        outputs: [
          {
            internalType: "contract Revenue",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrowerOperations",
            type: "address",
          },
        ],
        name: "setBorrowerOperations",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newFoundationAddress",
            type: "address",
          },
        ],
        name: "setFoundationAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "contract Oracle",
            name: "newOracle",
            type: "address",
          },
        ],
        name: "setOracle",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_vaultManager",
            type: "address",
          },
        ],
        name: "setVaultManager",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "vaultManager",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "wbtc",
        outputs: [
          {
            internalType: "contract IERC20",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "wbtcPool",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    address: {
      11155111: "0x2034B77d5aADC39ac8a63BAf33a12bD859e4e850",
      97: "0x37eE79A302B0c99544Dd01E94370A0B9d0D36d80",
    },
  },
  borrowerOperation: {
    name: "borrowerOperation",
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_collSurplusPoolAddress",
            type: "address",
          },
        ],
        name: "CollSurplusPoolAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_gasPoolAddress",
            type: "address",
          },
        ],
        name: "GasPoolAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_revenueContract",
            type: "address",
          },
        ],
        name: "RevenueContractAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_sortedVaultsAddress",
            type: "address",
          },
        ],
        name: "SortedVaultsAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_USDAOFee",
            type: "uint256",
          },
        ],
        name: "USDAOBorrowingFeePaid",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "_USDAODebt",
            type: "uint256",
          },
        ],
        name: "USDAODebtUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_USDAOAddress",
            type: "address",
          },
        ],
        name: "USDAOTokenAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "arrayIndex",
            type: "uint256",
          },
        ],
        name: "VaultCreated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_newVaultManagerAddress",
            type: "address",
          },
        ],
        name: "VaultManagerAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_debt",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_coll",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "stake",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "enum IBorrowerOperations.BorrowerOperation",
            name: "operation",
            type: "uint8",
          },
        ],
        name: "VaultUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "_WBTC",
            type: "uint256",
          },
        ],
        name: "WBTCBalanceUpdated",
        type: "event",
      },
      {
        inputs: [],
        name: "BORROWING_FEE_FLOOR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "CCR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "DECIMAL_PRECISION",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "MCR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "MIN_NET_DEBT",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "NAME",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "PERCENT_DIVISOR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "USDAO_GAS_COMPENSATION",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_100pct",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_wbtcIn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_upperHint",
            type: "address",
          },
          {
            internalType: "address",
            name: "_lowerHint",
            type: "address",
          },
        ],
        name: "addWBTC",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_maxFeePercentage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_collWithdrawal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_USDAOChange",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_wbtcIn",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "_isDebtIncrease",
            type: "bool",
          },
          {
            internalType: "address",
            name: "_upperHint",
            type: "address",
          },
          {
            internalType: "address",
            name: "_lowerHint",
            type: "address",
          },
        ],
        name: "adjustVault",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "claimCollateral",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "closeVault",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "collSurplusPool",
        outputs: [
          {
            internalType: "contract ICollSurplusPool",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "gasPoolAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_debt",
            type: "uint256",
          },
        ],
        name: "getCompositeDebt",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [],
        name: "getEntireSystemColl",
        outputs: [
          {
            internalType: "uint256",
            name: "entireSystemColl",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getEntireSystemDebt",
        outputs: [
          {
            internalType: "uint256",
            name: "entireSystemDebt",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_maxFeePercentage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_USDAOAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_wbtcIn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_upperHint",
            type: "address",
          },
          {
            internalType: "address",
            name: "_lowerHint",
            type: "address",
          },
        ],
        name: "openVault",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_USDAOAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_upperHint",
            type: "address",
          },
          {
            internalType: "address",
            name: "_lowerHint",
            type: "address",
          },
        ],
        name: "repayUSDAO",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "revenueContract",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_vaultManagerAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "_gasPoolAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "_collSurplusPoolAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "_sortedVaultsAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "_USDAOAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "_revenueContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "_wbtc",
            type: "address",
          },
        ],
        name: "setAddresses",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "sortedVaults",
        outputs: [
          {
            internalType: "contract ISortedVaults",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "usdao",
        outputs: [
          {
            internalType: "contract IUSDAO",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "vaultManager",
        outputs: [
          {
            internalType: "contract IVaultManager",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "wbtc",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_maxFeePercentage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_USDAOAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_upperHint",
            type: "address",
          },
          {
            internalType: "address",
            name: "_lowerHint",
            type: "address",
          },
        ],
        name: "withdrawUSDAO",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_collWithdrawal",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_upperHint",
            type: "address",
          },
          {
            internalType: "address",
            name: "_lowerHint",
            type: "address",
          },
        ],
        name: "withdrawWBTC",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    address: {
      11155111: "0xE9053f6F119097c08cEF700d3C557aE93AE4c7cf",
      97: "0x8A36a93b5CFc777Eb7E8b4ad643181B7f29F400A",
    },
  },
  vaultManager: {
    name: "vaultManager",
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_activePoolAddress",
            type: "address",
          },
        ],
        name: "ActivePoolAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "_baseRate",
            type: "uint256",
          },
        ],
        name: "BaseRateUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_newBorrowerOperationsAddress",
            type: "address",
          },
        ],
        name: "BorrowerOperationsAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_collSurplusPoolAddress",
            type: "address",
          },
        ],
        name: "CollSurplusPoolAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_gasPoolAddress",
            type: "address",
          },
        ],
        name: "GasPoolAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "_lastFeeOpTime",
            type: "uint256",
          },
        ],
        name: "LastFeeOpTimeUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "_liquidatedDebt",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_liquidatedColl",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_collGasCompensation",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_USDAOGasCompensation",
            type: "uint256",
          },
        ],
        name: "Liquidation",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "_attemptedUSDAOAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_actualUSDAOAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_WBTCSent",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_WBTCFee",
            type: "uint256",
          },
        ],
        name: "Redemption",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_sortedVaultsAddress",
            type: "address",
          },
        ],
        name: "SortedVaultsAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "_totalStakesSnapshot",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_totalCollateralSnapshot",
            type: "uint256",
          },
        ],
        name: "SystemSnapshotsUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "_newTotalStakes",
            type: "uint256",
          },
        ],
        name: "TotalStakesUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_newUSDAOokenAddress",
            type: "address",
          },
        ],
        name: "USDAOTokenAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_newIndex",
            type: "uint256",
          },
        ],
        name: "VaultIndexUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_debt",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_coll",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "enum IVaultManager.VaultManagerOperation",
            name: "operation",
            type: "uint8",
          },
        ],
        name: "VaultLiquidated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "_L_WBTC",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_L_USDAODebt",
            type: "uint256",
          },
        ],
        name: "VaultSnapshotsUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_debt",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_coll",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "stake",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "enum IVaultManager.VaultManagerOperation",
            name: "operation",
            type: "uint8",
          },
        ],
        name: "VaultUpdated",
        type: "event",
      },
      {
        inputs: [],
        name: "BETA",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "BOOTSTRAP_PERIOD",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "BORROWING_FEE_FLOOR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "CCR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "DECIMAL_PRECISION",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "MAX_BORROWING_FEE",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "MCR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "MINUTE_DECAY_FACTOR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "MIN_NET_DEBT",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "NAME",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "PERCENT_DIVISOR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "REDEMPTION_FEE_FLOOR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "SECONDS_IN_ONE_MINUTE",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "USDAO_GAS_COMPENSATION",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "VaultOwners",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "Vaults",
        outputs: [
          {
            internalType: "uint256",
            name: "debt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "coll",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stake",
            type: "uint256",
          },
          {
            internalType: "enum VaultManager.Status",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint128",
            name: "arrayIndex",
            type: "uint128",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_100pct",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
        ],
        name: "addVaultOwnerToArray",
        outputs: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "baseRate",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address[]",
            name: "_vaultArray",
            type: "address[]",
          },
        ],
        name: "batchLiquidateVaults",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "borrowerOperationsAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_price",
            type: "uint256",
          },
        ],
        name: "checkRecoveryMode",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
        ],
        name: "closeVault",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "collSurplusPool",
        outputs: [
          {
            internalType: "contract ICollSurplusPool",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "decayBaseRateFromBorrowing",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_collDecrease",
            type: "uint256",
          },
        ],
        name: "decreaseVaultColl",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_debtDecrease",
            type: "uint256",
          },
        ],
        name: "decreaseVaultDebt",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "gasPoolAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_USDAODebt",
            type: "uint256",
          },
        ],
        name: "getBorrowingFee",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_USDAODebt",
            type: "uint256",
          },
        ],
        name: "getBorrowingFeeWithDecay",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getBorrowingRate",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getBorrowingRateWithDecay",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_price",
            type: "uint256",
          },
        ],
        name: "getCurrentICR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
        ],
        name: "getEntireDebtAndColl",
        outputs: [
          {
            internalType: "uint256",
            name: "debt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "coll",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getEntireSystemColl",
        outputs: [
          {
            internalType: "uint256",
            name: "entireSystemColl",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getEntireSystemDebt",
        outputs: [
          {
            internalType: "uint256",
            name: "entireSystemDebt",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
        ],
        name: "getNominalICR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_price",
            type: "uint256",
          },
        ],
        name: "getTCR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
        ],
        name: "getVaultColl",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
        ],
        name: "getVaultDebt",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "getVaultFromVaultOwnersArray",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getVaultOwnersCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
        ],
        name: "getVaultStake",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
        ],
        name: "getVaultStatus",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_collIncrease",
            type: "uint256",
          },
        ],
        name: "increaseVaultColl",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_debtIncrease",
            type: "uint256",
          },
        ],
        name: "increaseVaultDebt",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "lastFeeOperationTime",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
        ],
        name: "liquidate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_n",
            type: "uint256",
          },
        ],
        name: "liquidateVaults",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
        ],
        name: "removeStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrowerOperationsAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "_gasPoolAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "_collSurplusPoolAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "_usdaoAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "_sortedVaultsAddress",
            type: "address",
          },
        ],
        name: "setAddresses",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_upkeep",
            type: "address",
          },
        ],
        name: "setUpkeep",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_num",
            type: "uint256",
          },
        ],
        name: "setVaultStatus",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "sortedVaults",
        outputs: [
          {
            internalType: "contract ISortedVaults",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalCollateralSnapshot",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalStakes",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalStakesSnapshot",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrower",
            type: "address",
          },
        ],
        name: "updateStakeAndTotalStakes",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "upkeep",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "usdao",
        outputs: [
          {
            internalType: "contract IUSDAO",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    address: {
      11155111: "0xb0D879F9EBC1509520AbCC3Cb6e0819BFaDDfDD9",
      97: "0x1a01AaEeA86Dfb58438661BFe8A8a9fbD349eC69",
    },
  },
  hintHelper: {
    name: "hintHelper",
    abi: [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_sortedVaultsAddress",
            type: "address",
          },
        ],
        name: "SortedVaultsAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_vaultManagerAddress",
            type: "address",
          },
        ],
        name: "VaultManagerAddressChanged",
        type: "event",
      },
      {
        inputs: [],
        name: "BORROWING_FEE_FLOOR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "CCR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "DECIMAL_PRECISION",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "MCR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "MIN_NET_DEBT",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "NAME",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "PERCENT_DIVISOR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "USDAO_GAS_COMPENSATION",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_100pct",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_coll",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_debt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_price",
            type: "uint256",
          },
        ],
        name: "computeCR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_coll",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_debt",
            type: "uint256",
          },
        ],
        name: "computeNominalCR",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_CR",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_numTrials",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_inputRandomSeed",
            type: "uint256",
          },
        ],
        name: "getApproxHint",
        outputs: [
          {
            internalType: "address",
            name: "hintAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "diff",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "latestRandomSeed",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getEntireSystemColl",
        outputs: [
          {
            internalType: "uint256",
            name: "entireSystemColl",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getEntireSystemDebt",
        outputs: [
          {
            internalType: "uint256",
            name: "entireSystemDebt",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_sortedVaultsAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "_vaultManagerAddress",
            type: "address",
          },
        ],
        name: "setAddresses",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "sortedVaults",
        outputs: [
          {
            internalType: "contract ISortedVaults",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "usdao",
        outputs: [
          {
            internalType: "contract IUSDAO",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "vaultManager",
        outputs: [
          {
            internalType: "contract IVaultManager",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    address: {
      11155111: "0xFf573C5a6A4455e5BA9FB51CAc281e9d9D99dD90",
      97: "0xdCcB33Ab364d7aB4Af09F1Cea77327871C0A6130",
    },
  },
  collSurplus: {
    name: "collSurplus",
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_newBorrowerOperationsAddress",
            type: "address",
          },
        ],
        name: "BorrowerOperationsAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_account",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_newBalance",
            type: "uint256",
          },
        ],
        name: "CollBalanceUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_newUSDAOPoolAddress",
            type: "address",
          },
        ],
        name: "USDAOAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_newVaultManagerAddress",
            type: "address",
          },
        ],
        name: "VaultManagerAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "WbtcSent",
        type: "event",
      },
      {
        inputs: [],
        name: "NAME",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_account",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "accountSurplus",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "borrowerOperationsAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_account",
            type: "address",
          },
        ],
        name: "claimColl",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_account",
            type: "address",
          },
        ],
        name: "getCollateral",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getWBTC",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_value",
            type: "uint256",
          },
        ],
        name: "increaseSurplusWbtc",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_borrowerOperationsAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "_vaultManagerAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "_usdaoAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "_wbtcAddress",
            type: "address",
          },
        ],
        name: "setAddresses",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "usdao",
        outputs: [
          {
            internalType: "contract IUSDAO",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "vaultManagerAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "wbtc",
        outputs: [
          {
            internalType: "contract IERC20",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    address: {
      11155111: "0xBc396E0F788F3224fc0B1144A826aB7BE7A59474",
      97: "0xD2d74473c97AC6edC033275D7aDebE225c667F20",
    },
  },
  sortedVaults: {
    name: "sortedVaults",
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_borrowerOperationsAddress",
            type: "address",
          },
        ],
        name: "BorrowerOperationsAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_id",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_NICR",
            type: "uint256",
          },
        ],
        name: "NodeAdded",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_id",
            type: "address",
          },
        ],
        name: "NodeRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_sortedDoublyLLAddress",
            type: "address",
          },
        ],
        name: "SortedVaultsAddressChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_vaultManagerAddress",
            type: "address",
          },
        ],
        name: "VaultManagerAddressChanged",
        type: "event",
      },
      {
        inputs: [],
        name: "NAME",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "borrowerOperationsAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_id",
            type: "address",
          },
        ],
        name: "contains",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "data",
        outputs: [
          {
            internalType: "address",
            name: "head",
            type: "address",
          },
          {
            internalType: "address",
            name: "tail",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "maxSize",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_NICR",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_prevId",
            type: "address",
          },
          {
            internalType: "address",
            name: "_nextId",
            type: "address",
          },
        ],
        name: "findInsertPosition",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getFirst",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getLast",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getMaxSize",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_id",
            type: "address",
          },
        ],
        name: "getNext",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_id",
            type: "address",
          },
        ],
        name: "getPrev",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getSize",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_id",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_NICR",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_prevId",
            type: "address",
          },
          {
            internalType: "address",
            name: "_nextId",
            type: "address",
          },
        ],
        name: "insert",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "isEmpty",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "isFull",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_id",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_newNICR",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_prevId",
            type: "address",
          },
          {
            internalType: "address",
            name: "_nextId",
            type: "address",
          },
        ],
        name: "reInsert",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_id",
            type: "address",
          },
        ],
        name: "remove",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_size",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_vaultManagerAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "_borrowerOperationsAddress",
            type: "address",
          },
        ],
        name: "setParams",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_NICR",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_prevId",
            type: "address",
          },
          {
            internalType: "address",
            name: "_nextId",
            type: "address",
          },
        ],
        name: "validInsertPosition",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "vaultManager",
        outputs: [
          {
            internalType: "contract IVaultManager",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    address: {
      11155111: "0x9D1f0A07e78BA4AC5644b30d1F6eB9beDA416257",
      97: "0x7a0821e25539Ac0DA9Da41b123e0a426B04b5859",
    },
  },
  wbtc: {
    name: "wbtc",
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    address: {
      11155111: "0xb9eB4CaA121E84BE82b40E82aA16cb4A4a555508",
      97: "0x066cF5e4A62bc9d44E2c67Adee867d907c370F94",
    },
    chainLinkAddress: {
      11155111: "0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43",
      97: "0x5741306c21795FdCBb9b265Ea0255F499DFe515C",
    },
  },
  wETH: {
    name: "wETH",
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    address: {
      11155111: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
      97: "0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378",
    },
    chainLinkAddress: {
      11155111: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
      97: "0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7",
    },
  },
  LINK: {
    name: "LINK",
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    address: {
      11155111: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
      97: "0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06",
    },
    chainLinkAddress: {
      11155111: "0xc59E3633BAAC79493d908e63626716e204A45EdF",
      97: "0x1B329402Cb1825C6F30A0d92aB9E2862BE47333f",
    },
  },
  Comet: {
    name: "Comet",
    abi: [
      {
        inputs: [],
        name: "Absurd",
        type: "error",
      },
      {
        inputs: [],
        name: "AlreadyInitialized",
        type: "error",
      },
      {
        inputs: [],
        name: "BadAsset",
        type: "error",
      },
      {
        inputs: [],
        name: "BadDecimals",
        type: "error",
      },
      {
        inputs: [],
        name: "BadDiscount",
        type: "error",
      },
      {
        inputs: [],
        name: "BadMinimum",
        type: "error",
      },
      {
        inputs: [],
        name: "BadPrice",
        type: "error",
      },
      {
        inputs: [],
        name: "BorrowCFTooLarge",
        type: "error",
      },
      {
        inputs: [],
        name: "BorrowTooSmall",
        type: "error",
      },
      {
        inputs: [],
        name: "InsufficientReserves",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidInt104",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidInt256",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidUInt104",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidUInt128",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidUInt64",
        type: "error",
      },
      {
        inputs: [],
        name: "LiquidateCFTooLarge",
        type: "error",
      },
      {
        inputs: [],
        name: "NegativeNumber",
        type: "error",
      },
      {
        inputs: [],
        name: "NoSelfTransfer",
        type: "error",
      },
      {
        inputs: [],
        name: "NotCollateralized",
        type: "error",
      },
      {
        inputs: [],
        name: "NotForSale",
        type: "error",
      },
      {
        inputs: [],
        name: "NotLiquidatable",
        type: "error",
      },
      {
        inputs: [],
        name: "Paused",
        type: "error",
      },
      {
        inputs: [],
        name: "SupplyCapExceeded",
        type: "error",
      },
      {
        inputs: [],
        name: "TimestampTooLarge",
        type: "error",
      },
      {
        inputs: [],
        name: "TooManyAssets",
        type: "error",
      },
      {
        inputs: [],
        name: "TooMuchSlippage",
        type: "error",
      },
      {
        inputs: [],
        name: "TransferInFailed",
        type: "error",
      },
      {
        inputs: [],
        name: "TransferOutFailed",
        type: "error",
      },
      {
        inputs: [],
        name: "Unauthorized",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "absorber",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "collateralAbsorbed",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "usdValue",
            type: "uint256",
          },
        ],
        name: "AbsorbCollateral",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "absorber",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "basePaidOut",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "usdValue",
            type: "uint256",
          },
        ],
        name: "AbsorbDebt",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "baseAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "collateralAmount",
            type: "uint256",
          },
        ],
        name: "BuyCollateral",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "bool",
            name: "supplyPaused",
            type: "bool",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "transferPaused",
            type: "bool",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "withdrawPaused",
            type: "bool",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "absorbPaused",
            type: "bool",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "buyPaused",
            type: "bool",
          },
        ],
        name: "PauseAction",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "dst",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Supply",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "dst",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "SupplyCollateral",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "TransferCollateral",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "src",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Withdraw",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "src",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "WithdrawCollateral",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "WithdrawReserves",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "absorber",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "accounts",
            type: "address[]",
          },
        ],
        name: "absorb",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "accrueAccount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "manager",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "approveThis",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "baseBorrowMin",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "baseMinForRewards",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "baseScale",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "baseToken",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "baseTokenPriceFeed",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "baseTrackingBorrowSpeed",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "baseTrackingSupplySpeed",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "borrowBalanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "borrowKink",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "borrowPerSecondInterestRateBase",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "borrowPerSecondInterestRateSlopeHigh",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "borrowPerSecondInterestRateSlopeLow",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
        ],
        name: "buyCollateral",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "extensionDelegate",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint8",
            name: "i",
            type: "uint8",
          },
        ],
        name: "getAssetInfo",
        outputs: [
          {
            components: [
              {
                internalType: "uint8",
                name: "offset",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "asset",
                type: "address",
              },
              {
                internalType: "address",
                name: "priceFeed",
                type: "address",
              },
              {
                internalType: "uint64",
                name: "scale",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "borrowCollateralFactor",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "liquidateCollateralFactor",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "liquidationFactor",
                type: "uint64",
              },
              {
                internalType: "uint128",
                name: "supplyCap",
                type: "uint128",
              },
            ],
            internalType: "struct CometCore.AssetInfo",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
        ],
        name: "getAssetInfoByAddress",
        outputs: [
          {
            components: [
              {
                internalType: "uint8",
                name: "offset",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "asset",
                type: "address",
              },
              {
                internalType: "address",
                name: "priceFeed",
                type: "address",
              },
              {
                internalType: "uint64",
                name: "scale",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "borrowCollateralFactor",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "liquidateCollateralFactor",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "liquidationFactor",
                type: "uint64",
              },
              {
                internalType: "uint128",
                name: "supplyCap",
                type: "uint128",
              },
            ],
            internalType: "struct CometCore.AssetInfo",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "utilization",
            type: "uint256",
          },
        ],
        name: "getBorrowRate",
        outputs: [
          {
            internalType: "uint64",
            name: "",
            type: "uint64",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
        ],
        name: "getCollateralReserves",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "priceFeed",
            type: "address",
          },
        ],
        name: "getPrice",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getReserves",
        outputs: [
          {
            internalType: "int256",
            name: "",
            type: "int256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "utilization",
            type: "uint256",
          },
        ],
        name: "getSupplyRate",
        outputs: [
          {
            internalType: "uint64",
            name: "",
            type: "uint64",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getUtilization",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "governor",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "manager",
            type: "address",
          },
        ],
        name: "hasPermission",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "initializeStorage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "isAbsorbPaused",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "isAllowed",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "isBorrowCollateralized",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "isBuyPaused",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "isLiquidatable",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "isSupplyPaused",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "isTransferPaused",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "isWithdrawPaused",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "liquidatorPoints",
        outputs: [
          {
            internalType: "uint32",
            name: "numAbsorbs",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "numAbsorbed",
            type: "uint64",
          },
          {
            internalType: "uint128",
            name: "approxSpend",
            type: "uint128",
          },
          {
            internalType: "uint32",
            name: "_reserved",
            type: "uint32",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "numAssets",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bool",
            name: "supplyPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "transferPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "withdrawPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "absorbPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "buyPaused",
            type: "bool",
          },
        ],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "pauseGuardian",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "baseAmount",
            type: "uint256",
          },
        ],
        name: "quoteCollateral",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "storeFrontPriceFactor",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "supply",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "dst",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "supplyFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "supplyKink",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "supplyPerSecondInterestRateBase",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "supplyPerSecondInterestRateSlopeHigh",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "supplyPerSecondInterestRateSlopeLow",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "dst",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "supplyTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "targetReserves",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalBorrow",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "totalsCollateral",
        outputs: [
          {
            internalType: "uint128",
            name: "totalSupplyAsset",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "_reserved",
            type: "uint128",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "trackingIndexScale",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "dst",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "dst",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transferAsset",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "src",
            type: "address",
          },
          {
            internalType: "address",
            name: "dst",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transferAssetFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "src",
            type: "address",
          },
          {
            internalType: "address",
            name: "dst",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "userBasic",
        outputs: [
          {
            internalType: "int104",
            name: "principal",
            type: "int104",
          },
          {
            internalType: "uint64",
            name: "baseTrackingIndex",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "baseTrackingAccrued",
            type: "uint64",
          },
          {
            internalType: "uint16",
            name: "assetsIn",
            type: "uint16",
          },
          {
            internalType: "uint8",
            name: "_reserved",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "userCollateral",
        outputs: [
          {
            internalType: "uint128",
            name: "balance",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "_reserved",
            type: "uint128",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "userNonce",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "src",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "withdrawFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "withdrawReserves",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "withdrawTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    address: {
      11155111: "0xB620CF16089eFCad4dde49A5305d4308B5203133",
      97: "0xDb7Cd31ec8618017FB6Ab029E998117C8cC0452D",
    },
  },
  CometExt: {
    name: "CometExt",
    abi: [
      {
        inputs: [],
        name: "BadAmount",
        type: "error",
      },
      {
        inputs: [],
        name: "BadNonce",
        type: "error",
      },
      {
        inputs: [],
        name: "BadSignatory",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidInt104",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidInt256",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidUInt104",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidUInt128",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidUInt64",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidValueS",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidValueV",
        type: "error",
      },
      {
        inputs: [],
        name: "NegativeNumber",
        type: "error",
      },
      {
        inputs: [],
        name: "SignatureExpired",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "manager",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isAllowed",
            type: "bool",
          },
        ],
        name: "allow",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "manager",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isAllowed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        name: "allowBySig",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "baseAccrualScale",
        outputs: [
          {
            internalType: "uint64",
            name: "",
            type: "uint64",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "baseIndexScale",
        outputs: [
          {
            internalType: "uint64",
            name: "",
            type: "uint64",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "baseTrackingAccrued",
        outputs: [
          {
            internalType: "uint64",
            name: "",
            type: "uint64",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
        ],
        name: "collateralBalanceOf",
        outputs: [
          {
            internalType: "uint128",
            name: "",
            type: "uint128",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "factorScale",
        outputs: [
          {
            internalType: "uint64",
            name: "",
            type: "uint64",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "manager",
            type: "address",
          },
        ],
        name: "hasPermission",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "isAllowed",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "liquidatorPoints",
        outputs: [
          {
            internalType: "uint32",
            name: "numAbsorbs",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "numAbsorbed",
            type: "uint64",
          },
          {
            internalType: "uint128",
            name: "approxSpend",
            type: "uint128",
          },
          {
            internalType: "uint32",
            name: "_reserved",
            type: "uint32",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "maxAssets",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "priceScale",
        outputs: [
          {
            internalType: "uint64",
            name: "",
            type: "uint64",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalsBasic",
        outputs: [
          {
            components: [
              {
                internalType: "uint64",
                name: "baseSupplyIndex",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "baseBorrowIndex",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "trackingSupplyIndex",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "trackingBorrowIndex",
                type: "uint64",
              },
              {
                internalType: "uint104",
                name: "totalSupplyBase",
                type: "uint104",
              },
              {
                internalType: "uint104",
                name: "totalBorrowBase",
                type: "uint104",
              },
              {
                internalType: "uint40",
                name: "lastAccrualTime",
                type: "uint40",
              },
              {
                internalType: "uint8",
                name: "pauseFlags",
                type: "uint8",
              },
            ],
            internalType: "struct CometStorage.TotalsBasic",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "totalsCollateral",
        outputs: [
          {
            internalType: "uint128",
            name: "totalSupplyAsset",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "_reserved",
            type: "uint128",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "userBasic",
        outputs: [
          {
            internalType: "int104",
            name: "principal",
            type: "int104",
          },
          {
            internalType: "uint64",
            name: "baseTrackingIndex",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "baseTrackingAccrued",
            type: "uint64",
          },
          {
            internalType: "uint16",
            name: "assetsIn",
            type: "uint16",
          },
          {
            internalType: "uint8",
            name: "_reserved",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "userCollateral",
        outputs: [
          {
            internalType: "uint128",
            name: "balance",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "_reserved",
            type: "uint128",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "userNonce",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "version",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    address: {
      11155111: "0xB620CF16089eFCad4dde49A5305d4308B5203133",
      97: "0xDb7Cd31ec8618017FB6Ab029E998117C8cC0452D",
    },
  },
};
