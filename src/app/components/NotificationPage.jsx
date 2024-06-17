import { memo, useEffect, useRef } from "react";
import "../components/notification.scss";
import "../assets/scss/header.scss";

const NotificationPage = ({ show, setShow, data }) => {
  const ref = useRef();
  useEffect(() => {
    const checkIfClickOutSide = (e) => {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        e.target.className !== "bellIcon"
      ) {
        setShow(false);
      }
    };
    document.addEventListener("click", checkIfClickOutSide);
    return () => {
      document.removeEventListener("click", checkIfClickOutSide);
    };
  }, []);

  return (
    <>
      {data.length > 0 && (
        <div className={show ? "notification" : "notify-hidden"}>
          <div ref={ref} className="notification-div">
            {data.map((item, index) => (
              <div key={item.sid}>
                <div className="not-des">
                  <p className="notif-text">{item.notification.title}</p>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      )}
      {data.length <= 0 && (
        <div ref={ref} className={show ? "notify" : "notify-hidden"}>
          <div className="notification-div">
            <a
              onClick={() => {
                window.open(
                  "https://staging.push.org/channels/0x600fe3f28cEE0927a3060e1557FD6752602cB9Db"
                );
              }}
              className="notif-text-No"
            >
              Opt USDAO to Get Notifocation.
            </a>
            <hr />
            <a
              onClick={() => {
                window.open(
                  "https://staging.push.org/channels/0x600fe3f28cEE0927a3060e1557FD6752602cB9Db"
                );
              }}
              className="notif-text-No"
            >
              Having Trouble in Getting Notifications?
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(NotificationPage);
