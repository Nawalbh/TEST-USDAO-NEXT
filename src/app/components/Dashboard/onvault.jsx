import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { Col, Row, OverlayTrigger, Tooltip, Tabs, Tab } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  getVaultDebtColl,
  sortedVaultSize,
  getVaultStatusFn,
  collateralFn,
  checkRecovery,
  getAccountDetails,
  fetchInitialAccVal,
} from "../../blockchain/commonFunction";
import { truncateToDecimals } from "../Dashboard/tabs/utils";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Deposite from "./tabs/Deposit";
import "./onvault.scss";

const Onvault = () => {
  const [vaultData, setVaultData] = useState();
  const [accountDetails, setAccountDetails] = useState();
  const [ratioCheck, setRatioCheck] = useState();
  const { open } = useWeb3Modal();
  let ratio;
  const loadAllData = async () => {
    const vaultSize = await sortedVaultSize();
    let details = await getAccountDetails();
    let initailVal = await fetchInitialAccVal();
    const vaultStatus = await getVaultStatusFn();
    let recoveryCheckVal = await checkRecovery();
    const vault = await getVaultDebtColl();
    if (Number(vault.coll) && Number(vault.debt)) {
      ratio = await collateralFn(vault.coll, vault.debt);
    }
    setRatioCheck(ratio);
    let layoutData = Object.assign(initailVal, details);
    setAccountDetails(layoutData);
    let vaultData = Object.assign(
      vaultSize,
      { vaultStatus },
      vault,
      recoveryCheckVal,
      { ratio }
    );
    setVaultData(vaultData);
  };

  const metaMask = async () => {
    if (address === undefined) {
      open();
    }
  };

  useEffect(() => {
    () => {
      setRatioCheck(vaultData.ratio);
    };
  }, []);

  useEffect(() => {
    (async () => {
      await loadAllData();
    })();
  }, []);

  if (window.ethereum) {
    window.ethereum.on("accountsChanged", async (_) => {
      window.location.reload();
      await getAccountDetails(setAlertMetaMaskLogOut);
    });
    window.ethereum.on("chainChanged", (_) => window.location.reload());
  }

  const maxProgressCircleVal = (val) => {
    if (val > 100 && val <= 500) {
      return 500;
    } else if (val > 500 && val <= 1000) {
      return 1000;
    } else if (val > 1000 && val <= 10000) {
      return 10000;
    } else if (val > 10000 && val <= 100000) {
      return 100000;
    }
    return 100;
  };

  return (
    <div className="vault-padding">
      <div className="d-flex align-items-center flex-column">
        <div className="vault-card">
          <div className="dashboard-card">
            <Row className="gy-4 mt-3">
              <Col md={12} className="card-text-display">
                <Row>
                  <Col md={4} className="d-flex justify-content-center">
                    <div>
                      <h4 className="title-primary">
                        Deposit(WBTC){" "}
                        {/* {["top"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>
                                Deposited collateral.
                              </Tooltip>
                            }
                          >
                            <button className="btn pt-0 pb-0 ps-2 pe-2">
                              <FontAwesomeIcon icon={faCircleInfo} />
                            </button>
                          </OverlayTrigger>
                        ))} */}
                      </h4>

                      <p className="card-body-value mb-2">
                        {!!vaultData ? vaultData.coll : "0.00"} WBTC
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="progress-bar">
                    <div className="ration-progress">
                      <CircularProgressbarWithChildren
                        value={ratioCheck}
                        maxValue={maxProgressCircleVal(Number(ratioCheck))}
                        styles={buildStyles({
                          pathColor: `${
                            ratioCheck < 110
                              ? "#FE4242"
                              : ratioCheck < 125
                              ? " #FF7A00"
                              : ratioCheck > 125
                              ? "#51FE42"
                              : "#d6d6d6"
                          }`,
                        })}
                      >
                        <p className="card-body-name mb-0">
                          {ratioCheck
                            ? `${truncateToDecimals(ratioCheck)}%`
                            : "--"}
                        </p>
                        <p className="card-body-name mb-0">
                          Ratio
                          {["top"].map((placement) => (
                            <OverlayTrigger
                              key={placement}
                              placement={placement}
                              overlay={
                                <Tooltip
                                  className="tooltip"
                                  id={`tooltip-${placement}`}
                                >
                                  Vault&apos;s ICR(Internal Collateral ratio) is
                                  the ratio of the dollar value of its entire
                                  WBTC collateral at the current WBTC:USD price,
                                  to its entire USDAO debt.
                                </Tooltip>
                              }
                            >
                              <button className="btn p-0">
                                <FontAwesomeIcon
                                  color={`#fff`}
                                  icon={faCircleInfo}
                                />
                              </button>
                            </OverlayTrigger>
                          ))}
                        </p>
                      </CircularProgressbarWithChildren>
                    </div>
                  </Col>
                  <Col md={4} className="d-flex justify-content-center">
                    <div>
                      <h4 className="title-primary">
                        Debt(USDAO){" "}
                        {/* {["top"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>
                                Amount of USDAO Borrowed against the collateral
                                provided.
                              </Tooltip>
                            }
                          >
                            <button className="btn pt-0 pb-0 ps-2 pe-2">
                              <FontAwesomeIcon icon={faCircleInfo} />
                            </button>
                          </OverlayTrigger>
                        ))} */}
                      </h4>

                      <p className="card-body-value mb-2">
                        {" "}
                        {!!vaultData
                          ? truncateToDecimals(vaultData.debt)
                          : "0.00"}{" "}
                        USDAO
                      </p>
                    </div>
                  </Col>
                  {/* <div className="vault-navigation-page mt-5">
                    <button className="btn card-btn-vault">
                      <div className="centerd-text">
                        <p>View Vault History</p>
                      </div>
                    </button>
                  </div> */}
                </Row>
              </Col>

              <Col md={12}>
                <Deposite
                  accountDetails={accountDetails}
                  setRatioCheck={setRatioCheck}
                  vaultDetails={vaultData}
                  ratioCheck={ratioCheck}
                />

                {/* {!!vaultDetails.vaultStatus && (
                  <Tabs
                    defaultActiveKey={"add-WBTC"}
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    unmountOnExit={true}
                  >
                    <Tab eventKey="add-eth" title="Add WBTC">
                      <AddEth
                        refreshAllData={refreshAllData}
                        accountDetails={accountDetails}
                        vaultDetails={vaultDetails}
                        setRatio={setRatio}
                      />
                    </Tab>
                    <Tab eventKey="withdraw-eth" title="Withdraw WBTC">
                      <WithdrawEth
                        refreshAllData={refreshAllData}
                        accountDetails={accountDetails}
                        vaultDetails={vaultDetails}
                        setRatio={setRatio}
                        ratio={ratio}
                      />
                    </Tab>
                    <Tab eventKey="borrow" title="Borrow USDAO">
                      <BorrowUsdao
                        refreshAllData={refreshAllData}
                        accountDetails={accountDetails}
                        vaultDetails={vaultDetails}
                        setRatio={setRatio}
                        ratio={ratio}
                      />
                    </Tab>
                    <Tab eventKey="repay" title="Repay USDAO">
                      <RepayUsdao
                        refreshAllData={refreshAllData}
                        accountDetails={accountDetails}
                        vaultDetails={vaultDetails}
                        setRatio={setRatio}
                      />
                    </Tab>
                  </Tabs>
                )} */}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onvault;
