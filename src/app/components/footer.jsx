import usdao from "../assets/logos/usdaoOrng.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/footer.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <hr className="Hr" />
      <div className="footer-wrap">
        <div className="footerHeading">
          {/* <h1>
            {" "}
            <span>Subscribe</span> To get latest Update From Us
          </h1>
          <div className="enterEmail">
            <div className="flex row justify-content-center">
              <div className="col-xl-9 col-md-9 col-sm-9 col-xs-12 p-0 ">
                <div className="emailDiv">
                  <input
                    placeholder="Enter Email"
                    type="text"
                    className="inputemail"
                  />
                </div>
              </div>
              <div className="col-xl-3 col-md-3 col-sm-3 col-xs-12 p-0 ">
                <div className="btnDiv">
                  <p>Subscribe now</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <section>
          <div className="footerSec">
            <div className="row">
              <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12 ">
                <div onClick={() => router.push("/")} className="footerLogo">
                  <Image src={usdao} alt="" />
                </div>
                <div className="footerDecs">
                  <p>
                    USDAO is a community-backed stablecoin, fully decentralized
                    and pegged to the US dollar. It&apos;s a single-token
                    system, with wBTC as collateral, and USDAO serving as the
                    governance token. Maintaining a minimum 110%
                    overcollateralization through CDP ensures resilience during
                    market fluctuations and hyperinflation, providing a
                    decentralized option for owning US dollars globally.
                  </p>
                </div>
              </div>
              <div className="col-xl-9 col-md-9 col-sm-12 col-xs-12 mt-4 ">
                <div className="row ">
                  <div className="col-xl-2 col-md-2 col-sm-2 col-xs-12 col-3 footerOpt">
                    <div className="footerLinkHeader">
                      <p>About</p>
                    </div>
                    <div className="footerSection">
                      <div
                        onClick={() => {
                          window.open("https://docs.usdao.io/usdao");
                        }}
                        className="footerDetails"
                      >
                        <p>USDAO Docs</p>
                      </div>
                      <div
                        onClick={() => {
                          window.open("https://docs.usdao.io/usdao");
                        }}
                        className="footerDetails"
                      >
                        <p>USDAO Stablecoin</p>
                      </div>
                      <div
                        onClick={() => {
                          window.open("https://www.labs196.com/");
                        }}
                        className="footerDetails"
                      >
                        <p>Lab196 Innovations LLC</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-2 col-sm-2 col-xs-12 col-3 footerOpt">
                    <div className="footerLinkHeader">
                      <p>Explore</p>
                    </div>
                    <div className="footerSection">
                      <div
                        onClick={() => router.push("/mediakit")}
                        className="footerDetails"
                      >
                        <p>Mediakit</p>
                      </div>
                      <div
                        onClick={() => router.push("/ecosystem")}
                        className="footerDetails"
                      >
                        <p>Ecosystem</p>
                      </div>
                      <div
                        onClick={() => router.push("/stablecoin")}
                        className="footerDetails"
                      >
                        <p>Stablecoin</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-2 col-sm-2 col-xs-12 col-3 footerOpt">
                    <div className="footerLinkHeader">
                      <p>Library</p>
                    </div>
                    <div className="footerSection">
                      <div
                        onClick={() => {
                          window.open(
                            "https://storage.fleek-internal.com/b7509115-f99e-40d6-a7ce-b1dd48869279-bucket/Whitepaper%20and%20Pitchdeck/30th%20Jan%202024%20USDAO%20Whitepaper.pdf"
                          );
                        }}
                        className="footerDetails"
                      >
                        <p>Whitepaper</p>
                      </div>
                      <div
                        onClick={() => {
                          window.open(
                            "https://storage.fleek-internal.com/b7509115-f99e-40d6-a7ce-b1dd48869279-bucket/USDAO%20Docs/USDAO%20Bitcoin%20Backed%20Stablecoin%20Pitch%20deck%20(1).pdf"
                          );
                        }}
                        className="footerDetails"
                      >
                        <p>Pitch Deck</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-2 col-sm-2 col-xs-12 col-3 footerOpt">
                    <div className="footerLinkHeader">
                      <p>Developer</p>
                    </div>
                    <div className="footerSection">
                      <div
                        onClick={() => {
                          window.open("https://docs.usdao.io/usdao");
                        }}
                        className="footerDetails"
                      >
                        <p>Docs</p>
                      </div>
                      <div
                        onClick={() => {
                          window.open("https://docs.usdao.io/usdao");
                        }}
                        className="footerDetails"
                      >
                        <p>Resources</p>
                      </div>
                      <div
                        onClick={() => {
                          window.open("https://docs.usdao.io/usdao");
                        }}
                        className="footerDetails"
                      >
                        <p>Oracle</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-2 col-sm-2 col-xs-12 col-3 footerOpt">
                    <div className="footerLinkHeader">
                      <p>Contact</p>
                    </div>
                    <div className="footerSection">
                      <div className="footerDetails">
                        <p>Contact us</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-2 col-sm-2 col-xs-12 col-3 footerOpt">
                    <div className="footerLinkHeader">
                      <p>Partners & Contr.</p>
                    </div>
                    <div className="footerSection">
                      <div
                        onClick={() => {
                          window.open("https://gfuturetech.com/");
                        }}
                        className="footerDetailsLast"
                      >
                        <p>Gfuture Tech</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footerCopyRight">
            <hr className="CopyRightHr" />
            <div className="footerCopyRightext">
              <p>Copyright ⓒ 2024. All Rights Reserved</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
