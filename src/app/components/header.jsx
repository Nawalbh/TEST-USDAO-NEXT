import { useChainId, useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {} from "next/navigation";
import { getAccount } from "@wagmi/core";
import logo from "../../app/assets/logos/usdaoOrng.png";
import bellIcon from "../../app/assets/logos/bell-fill.svg";
import NotificationPage from "../../app/components/NotificationPage";
import * as PushAPI from "@pushprotocol/restapi";
import { useState, useEffect } from "react";
import "../../app/assets/scss/header.scss";

const Header = () => {
  const { open } = useWeb3Modal();
  const router = useRouter();
  let chainId = useChainId();
  const { address } = useAccount();
  const [show, setShow] = useState(false);
  const [feed, setFeed] = useState([]);

  // useEffect(() => {
  //   metaMask();
  // }, [address, chainId]);

  const loadNotifications = async () => {
    try {
      const { address } = getAccount();
      const feeds = await PushAPI.user.getFeeds({
        user: `${address}`,
        limit: 30,
        env: "staging",
      });
      if (feeds === undefined) {
        setFeed([]);
      } else {
        setFeed(feeds);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  // const metaMask = async () => {
  //   if (address === undefined) {
  //     open();
  //   }
  // };

  const showNotification = () => {
    setShow(!show);
  };

  return (
    <div className="header-wrap mt-3">
      <div className="headSection">
        <div onClick={() => router.push("/")} className="headLogoSection">
          <Image src={logo} alt="" />
        </div>
        <NotificationPage show={show} setShow={setShow} data={feed} />
        <div className="headButtonSection">
          <div className="NotificationSec">
            <div className="currency-wrap">
              <div className="bell-space" onClick={() => showNotification()}>
                <div className="bell">
                  {/* <LuBell className="bellIcon" /> */}
                  <Image src={bellIcon} className="bellIcon" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="ConnectApp">
            <button
              onClick={async () => await metaMask()}
              className="ConnectBtn"
            >
              Connect
            </button>
          </div> */}
          <div className="LinkApp">
            <button
              onClick={() => {
                window.open("https://apps.usdao.io/#/dashboard");
              }}
              className="AppButton"
            >
              <p>App</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
