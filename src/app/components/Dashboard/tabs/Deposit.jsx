import { ethers } from "ethers";
import { getAccount } from "@wagmi/core";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import usdao from "../../../assets/img/usdao.svg";
import wbtc from "../../../assets/img/wbtcLight.png";
import { useAccount } from "wagmi";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import {
  feeFn,
  collateralFnForDeposite,
  liquidationPriceFn,
  totalDeptFn,
  getMetaMask,
  getAllowance,
  confirmDepositeFn,
} from "../../../blockchain/commonFunction";
import { truncateToDecimals } from "./utils";
import "./deposit.scss";
import "../onvault.scss";
import Image from "next/image";

const initialDepositeVal = {
  etherVal: "",
  usdaoVal: "",
};

const initialCalVal = {
  liquidationPrice: 0,
  fee: 0,
  totalDept: 0,
  collateralRatio: 0,
};

const liquidationReserve = 200;

const DepositeInfo = ({ depositInputVal, calcualtion }) => {
  return (
    <div className="deposite-info">
      <div className="d-flex justify-content-between deposite-detail-wrap">
        <p>Deposit</p>
        <p>{truncateToDecimals(depositInputVal.etherVal, 6) || "0.00"} WBTC</p>
      </div>

      <div className="d-flex justify-content-between deposite-detail-wrap">
        <p>
          Liquidation reserve
          {["top"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  200 USDAO reserve will be refunded/burnt once vault is closed
                  the owner
                </Tooltip>
              }
            >
              <button className="btn pt-0 pb-0 ps-2 pe-2">
                <FontAwesomeIcon className="tooltipIcon" icon={faCircleInfo} />
              </button>
            </OverlayTrigger>
          ))}
        </p>
        <p>{liquidationReserve} USDAO</p>
      </div>

      <div className="d-flex justify-content-between deposite-detail-wrap">
        <p>Fee</p>

        <p>{truncateToDecimals(calcualtion.fee, 6)} USDAO (0.50%)</p>
      </div>

      <div className="d-flex justify-content-between deposite-detail-wrap">
        <p>Total debt</p>
        <p>{truncateToDecimals(calcualtion.totalDept)} USDAO</p>
      </div>

      <div className="d-flex justify-content-between deposite-detail-wrap">
        <p>Receive</p>
        <p>{truncateToDecimals(depositInputVal.usdaoVal, 6)} USDAO</p>
      </div>

      <div className="d-flex justify-content-between deposite-detail-wrap">
        <p>Collateral ratio</p>
        <p>{truncateToDecimals(calcualtion.collateralRatio, 6)} %</p>
      </div>
    </div>
  );
};

const Deposite = ({
  accountDetails,
  setRatioCheck,
  vaultDetails = {},
  ratioCheck,
}) => {
  const [depositInputVal, setDepositInputVal] = useState(initialDepositeVal);
  const [error, setError] = useState({});
  const [calcualtion, setCalculation] = useState(initialCalVal);
  const [disableBtn, setDisableBtn] = useState(false);
  const [disable, setDisable] = useState(false);
  const { address } = useAccount();

  document.onkeydown = function (e) {
    if (e.defaultPrevented) {
      return;
    }
    if (e.keyCode === 109 || e.keyCode === 189) {
      return false;
    }
  };

  useEffect(() => {
    if (Object.keys(error).length) {
      setDisableBtn(true);
    } else {
      setDisableBtn(false);
    }
  }, [error]);

  const depositChangeHandler = (e, type) => {
    let ethVal, usdaoVal;
    if (type === "wbtc") {
      ethVal = e.target.value;
      setDepositInputVal((state) => ({ ...state, etherVal: ethVal }));
      !!ethVal &&
        setDepositInputVal((state) => ({ ...state, usdaoVal: "100" }));
    } else {
      usdaoVal = e.target.value;
      setDepositInputVal((state) => ({ ...state, usdaoVal: usdaoVal }));
    }
  };

  useEffect(() => {
    if (Object.keys(error).length) {
      setDisableBtn(true);
    } else {
      setDisableBtn(false);
    }
  }, [error]);

  useEffect(() => {
    (async function () {
      let fee = await feeFn(depositInputVal);
      let usdaoVal = ethers.utils
        .parseUnits(depositInputVal.usdaoVal, 8)
        .add(ethers.utils.parseUnits("200", 8))
        .add(fee);
      let collateral = await collateralFnForDeposite(
        depositInputVal.etherVal,
        usdaoVal
      );
      let liquidationPrice = await liquidationPriceFn(depositInputVal.etherVal);

      let totalDept = await totalDeptFn(depositInputVal.usdaoVal);
      setRatioCheck(collateral);
      if (parseFloat(collateral) < 110) {
        delete error["usdaoValErr"];
        setError({
          ratioMsg: vaultDetails.recoveryModeCheck
            ? "System is in recovery Mode, Vault cannot be opened below 125% collateral ratio. 0% fee will be applied on creating new Vault during Recovery Mode."
            : "Vault cannot be opened below 110% collateral ratio",
        });
      } else if (parseFloat(depositInputVal.usdaoVal) < 100) {
        delete error["ratioMsg"];
        setError({
          ...error,
          usdaoValErr: "Borrow limit cannot be below 100 USDAO",
        });
      } else {
        delete error["ratioMsg"];
        delete error["usdaoValErr"];
        setError({ ...error });
      }
      setCalculation({
        liquidationPrice: liquidationPrice,
        fee: ethers.utils.formatUnits(fee, 8),
        totalDept: totalDept,
        collateralRatio: collateral,
      });
    })();
  }, [depositInputVal]);

  const confirmDepositeClick = async () => {
    let { address } = getAccount();
    let provider = await getMetaMask();
    if (vaultDetails.recoveryModeCheck && parseFloat(ratio) < 125) {
      setDisable(false);
      swal(
        "Recovery Mode: User can not open Vault below 125% in the Recovery Mode."
      );
      return;
    }
    if (depositInputVal.etherVal > parseFloat(accountDetails.etherBalance)) {
      setDisable(false);
      swal("Insufficient funds");
      return;
    }
    setDisable(true);
    const isAllowance = await getAllowance(
      address,
      ethers.utils.parseUnits(depositInputVal.etherVal, 8)
    );
    provider.waitForTransaction(isAllowance.hash).then(async () => {
      await confirmDepositeFn(depositInputVal, setDisableBtn, setDisable);
    });
  };

  return (
    <>
      <div className="tab-box-wrap">
        <div className="tab-box-info d-flex justify-content-between align-items-center">
          <p>USDAO balance</p>
          <p>
            {" "}
            Wallet:{" "}
            {accountDetails && accountDetails.etherBalance
              ? truncateToDecimals(accountDetails.etherBalance, 6)
              : "0.00"}
          </p>
        </div>

        <div className="tab-box-values d-flex justify-content-between align-items-center">
          <input
            type="number"
            id="number"
            className="inputNumber"
            style={{ color: "#fff" }}
            placeholder="Enter amount"
            min="0.01"
            step="0.01"
            value={depositInputVal.etherVal}
            onChange={(e) => depositChangeHandler(e, "wbtc")}
            onWheel={() => document.activeElement.blur()}
          />
          <div className="d-flex maxBtn">
            <div
              className="value-status"
              // onClick={() => maxHandler("wbtc")}
            >
              <p>MAX </p>
            </div>
            <Image className="wbtcimg" src={wbtc} alt="" />
          </div>
        </div>
      </div>
      <div className="tab-box-wrap">
        <div className="tab-box-info d-flex justify-content-between align-items-center">
          <p>Borrow</p>
          <p>
            Available:{" "}
            {accountDetails && accountDetails.usmBalance
              ? truncateToDecimals(accountDetails.usmBalance)
              : "0.00"}{" "}
          </p>
        </div>

        <div className="tab-box-values d-flex justify-content-between align-items-center ">
          <input
            type="number"
            id="number"
            className="inputNumber"
            style={{ color: "#fff" }}
            placeholder="Enter amount"
            value={depositInputVal.usdaoVal}
            min="0.01"
            step="0.01"
            onChange={(e) => depositChangeHandler(e, "usdao")}
            onWheel={() => document.activeElement.blur()}
          />
          <div className="d-flex maxBtn">
            <div className="value-status">
              <p>MAX</p>
            </div>
            <Image src={usdao} alt="" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <button
          rel="noreferrer"
          className={
            address ? "menu-link btn-gradient" : "btn-gradientdisabled"
          }
          disabled={depositInputVal.etherVal.length < 1 ? true : false}
          onClick={confirmDepositeClick}
        >
          Confirm
        </button>
      </div>
      {depositInputVal.etherVal && depositInputVal.usdaoVal && (
        <DepositeInfo
          depositInputVal={depositInputVal}
          calcualtion={calcualtion}
        />
      )}
    </>
  );
};

export default Deposite;
