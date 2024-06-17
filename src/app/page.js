"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "../app/components/Dashboard/page.scss";
import "./page.module.css";
import "./globals.css";
import "./page.scss";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";
import { FaWallet } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import usdao from "../app/assets/img/stablecoin/hero.svg";
import discord from "../app/assets/img/social/discord.png";
import facebook from "../app/assets/img/social/facebook.png";
import github from "../app/assets/img/social/github.png";
import instagram from "../app/assets/img/social/instagram.png";
import linkedin from "../app/assets/img/social/linkedin.png";
import twitter from "../app/assets/img/social/twitter.png";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import mob from "../app/assets/img/mobile.png";
import potrait from "../app/assets/img/potrait.png";
import social from "../app/assets/img/social.png";
import landescape from "../app/assets/img/landescape.png";
import Partner from "./../app/components/Dashboard/partner";
import { Box, Text, Center, Button } from "@chakra-ui/react";
import cred from "../app/assets/img/cred.svg";
import lab196 from "../app/assets/Ecosystem/labs196.svg";
import gfuture from "../app/assets/Ecosystem/gfuture.svg";
import { Faq } from "../app/blockchain/faq";
// import Onvault from "../app/components/Dashboard/onvault";
import {
  marketPriceFn,
  marketPriceFnRead,
  sortedVaultSize,
  getTCR,
  getTvl,
  totalSupply,
  sortedVaultSizeRead,
  totalSupplyRead,
  getTCRread,
  getTvlRead,
} from "@/app/blockchain/commonFunction";
import dynamic from "next/dynamic";

const Onvault = dynamic(() => import("../app/components/Dashboard/onvault"), {
  ssr: false,
});

const Dashboard = () => {
  const [wbtcPrice, setWbtcPrice] = useState();
  const [totalVaults, setTotalVaults] = useState();
  const [colRation, setColRation] = useState();
  const [tvl, setTvl] = useState();
  const [tSupply, setTSupply] = useState();
  const [show, setShow] = useState(false);
  const [showAnswer, setShowAnswer] = useState();
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const tags = [
    {
      value: "$1",
      subtitle: "USDAO price",
    },
    {
      value: `${wbtcPrice === undefined ? "--" : `$${wbtcPrice}`}`,
      subtitle: "WBTC Price",
    },
    {
      value: `${
        tSupply === undefined ? "--" : `$${Number(tSupply).toFixed(2)}`
      }`,
      subtitle: " USDAO Stablecoin Circulation",
    },
    {
      value: `${totalVaults === undefined ? "--" : `$${totalVaults}`}`,
      subtitle: "Total Vaults",
    },
    {
      value: `${
        colRation === undefined ? "--" : `${Number(colRation).toFixed(2)}`
      }`,
      subtitle: " Total Collateral Ratio (TCR) ",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Safe to use window here
      console.log(window.location.href);
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (address) {
        let value = await marketPriceFn();
        let vaults = await sortedVaultSize();
        let { tcr } = await getTCR();
        let val = await getTvl();
        let tvlPrice = val * value;
        let supply = await totalSupply();
        setWbtcPrice(value);
        setTotalVaults(vaults);
        setColRation(tcr);
        setTvl(tvlPrice);
        setTSupply(supply);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!address) {
        let mkt = await marketPriceFnRead();
        setWbtcPrice(mkt);
        let vaults = await sortedVaultSizeRead();
        setTotalVaults(vaults);
        let val = await getTvlRead();
        let tvlPrice = val * mkt;
        setTvl(tvlPrice.toFixed(2));
        let supply = await totalSupplyRead();
        setTSupply(supply);
        let { tcr } = await getTCRread();
        setColRation(tcr.toFixed(2));
      }
    })();
  }, []);

  const metaMask = () => {
    if (address === undefined) {
      open();
    }
  };

  const handleFaq = (item) => {
    if (item.id) {
      setShowAnswer(item.id);
      setShow(!show);
    }
  };

  return (
    <div className="dashboard-wrap">
      <div className="Bannerdash">
        <div className="row bannerInner">
          <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
            <div className="bannertext">
              <h1>
                <span>USDAO</span> Bitcoin Backed
              </h1>
              <h1>Stablecoin</h1>
            </div>
            <div className="bannerDesc">
              <p>0% Interest Borrowing | Decentralized | Community Led</p>
            </div>
            <div className="bannerBtn">
              <button
                onClick={() => {
                  window.open("https://docs.usdao.io/usdao");
                }}
              >
                Discover More
              </button>
            </div>
          </div>
          <div className="align-content-center justify-content-center col-xl-6 col-md-6 col-sm-12 col-xs-12 mt-5">
            <div className="OuterValue">
              <div className="valueDetails">
                <p>TOTAL VALUE LOCKED</p>
                <p className="valuede">
                  {tvl === undefined ? "--" : `$ ${Number(tvl).toFixed(2)}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="tabSection mb-5">
        {/* <MdChevronLeft className="arrowsec" size={40} /> */}
        <div id="slider" className="sliderSection">
          {tags.map((item, index) => (
            <div key={index} className="sliderCard">
              <h2>{item.value}</h2>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
        {/* <MdChevronRight className="arrowsec" size={40} /> */}
      </section>
      <section className="mt-5">
        <div className="onvaultHead  mb-5">
          <h1>
            <span>USDAO</span> Bitcoin Backed <span>Stablecoin</span>
          </h1>
          <div className="bannerDesconv">
            <p>0% Interest Borrowing | Decentralized | Community Led</p>
          </div>
          {/* <h1></h1> */}
        </div>
        <div className="onvsec">
          <div className="Innonv">
            <div className="InnonvHead">
              <div
                onClick={() => {
                  window.open("https://apps.usdao.io/#/dashboard");
                }}
                className="onvaultImg"
              >
                <p>Go to Dashboard</p>
              </div>
              <div className="ConnectApp">
                <button onClick={() => metaMask()} className="ConnectBtn">
                  Connect
                </button>
              </div>
            </div>
            <Onvault />
          </div>
        </div>
      </section>
      <section>
        <div className="standardization">
          <div className="standerdHeading">
            <h1>
              USDAO Stablecoin <span>Standardization</span>
            </h1>
          </div>
          {/* <div className="standerdDesc">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient. montes, nascetur ridiculus
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim. Donec pede
              justo,fringilla vel, aliquet nec, vulputate eget, arcu.
            </p>
          </div> */}
          <div className="standerdBod mt-5">
            <div className="row">
              <div className="col-xl-4 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="standerdBodDesFirst">
                    <div className="faIconTop">
                      <FaWallet className="faIcons" />
                    </div>
                    <h3>Proof of Reserves</h3>
                    <p>
                      The USDAO ecosystem operates through smart contracts,
                      guaranteeing contin...
                    </p>
                  </div>
                  <div className="standerdBodDesSecond">
                    <div>
                      <div className="faIconTop">
                        <FaTrophy className="faIcons" />
                      </div>
                      <h3>Onvault Stability Framework</h3>
                      <p>
                        Onvault employs a Collateral Debt Position (CDP)
                        mechanism to create USDAO stablecoins, en...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-12 col-sm-12 col-xs-12 imgMob">
                <Image className="mobImg" src={usdao} alt="" />
              </div>
              <div className="col-xl-4 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="standerdBodDesFirst">
                    <div className="faIconTop">
                      <IoSpeedometer className="faIcons" />
                    </div>
                    <h3>Autonomous and Trust Minimized</h3>
                    <p>
                      The USDAO protocol operates autonomously, existing as a
                      self-sufficient, enclosed decen...
                    </p>
                  </div>
                  <div className="standerdBodDesSecond">
                    <div className="faIconTop">
                      <IoIosGlobe className="faIcons" />
                    </div>
                    <h3>USDAO Business Integration</h3>
                    <p>
                      The main goal of the USDAO protocol is to empower the
                      community with governance...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="standerdBodDesBottom">
                <div className="faIconBottom">
                  <FaTrophy className="faIcons" />
                </div>
                <h3>Multi Chain Develpoment</h3>
                <p>
                  Whilist the USDAO ecosystem is build on Ethereum, it will be
                  further developed to operate across multi...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="newBlog">
          <div className="row">
            <div className="newBlogHeading">
              <h1>
                Our Latest News &<span> Blog</span>
              </h1>
            </div>
            <div className="newBlogDesc">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
              </p>
            </div>

            <div className="newsSec">
              <div className="row ">
                <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="row newsBox">
                    <div className="col-xl-6 col-md-12 col-sm-12 col-xs-12">
                      <div>
                        <img src={potrait} alt="" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12 col-xs-12">
                      <div>
                        <span>News & Blog</span>
                      </div>
                      <div>
                        <h5>CryptoNewsZ</h5>
                      </div>
                      <div>
                        <p>
                          The cryptocurrency or crypto industry has been growing
                          quite well over the last few years. People are looking
                          for various.
                        </p>
                      </div>
                      <div className="readMor">
                        <p>Read more</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4 newsBox">
                    <div className="col-xl-6 col-md-12 col-sm-12 col-xs-12">
                      <div>
                        <img src={potrait} alt="" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12 col-xs-12">
                      <div>
                        <span>News & Blog</span>
                      </div>
                      <div>
                        <h5>CryptoNewsZ</h5>
                      </div>
                      <div>
                        <p>
                          The cryptocurrency or crypto industry has been growing
                          quite well over the last few years. People are looking
                          for various.
                        </p>
                      </div>
                      <div className="readMor">
                        <p>Read more</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12 ">
                  <div className="row newsBoxSecond ml-2">
                    <div className="lanImage">
                      <img src={landescape} alt="" />
                    </div>
                    <span>News & Blog</span>
                    <h5>CryptoNewsZ</h5>
                    <p>
                      The cryptocurrency or crypto industry has been growing
                      quite well over the last few years. People are looking for
                      various. The cryptocurrency or crypto industry has been
                      growing quite well over the last few years. People are
                      looking for various. The cryptocurrency or crypto industry
                      has been growing quite well over the last few years.
                      People are looking for various. The cryptocurrency or
                      crypto industry has been growing quite well over the last
                      few years. People are looking for various. The
                      cryptocurrency or crypto industry has been growing quite
                      well over the last few years. People are looking for
                      various.
                    </p>
                    <div className="readMor">
                      <p>Read more</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="mediaInner">
          <div className="row">
            <div className="mediaHeader">
              <div>
                <h1>
                  <span>Social</span> Media Platforms
                </h1>
                <p>
                  All Social, <span>One Place</span>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
              <div className="mediaText">
                <h1>
                  Work Seamlessly Together On Social Media With{" "}
                  <span>Global</span> open Source Community
                </h1>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient. montes, nascetur
                  ridiculus mus.
                </p> */}
              </div>
              <div className="mediaBtn">
                <button
                  onClick={() => {
                    window.open("https://docs.usdao.io/usdao");
                  }}
                >
                  Discover More
                </button>
              </div>
            </div>
            <div className="align-content-center  col-xl-6 col-md-6 col-sm-12 col-xs-12 mt-5">
              <div className="imgSocial">
                {/* <img className="imgs" src={social} alt="" /> */}
                <div className="row">
                  <div className="col-xl-4 col-md-4 col-sm-4 col-xs-12 icons">
                    <div
                      onClick={() => {
                        window.open("https://discord.gg/JHbXb4kQwG");
                      }}
                      className="socialIcon"
                    >
                      <Image className="imgs" src={discord} alt="" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 col-sm-4 col-xs-12 icons">
                    <div
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/company/usdaoofficial"
                        );
                      }}
                      className="socialIcon"
                    >
                      <Image className="imgs" src={linkedin} alt="" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 col-sm-4 col-xs-12 icons">
                    <div
                      onClick={() => {
                        window.open("https://github.com/USDAO-Protocol");
                      }}
                      className="socialIcon"
                    >
                      <Image className="imgs" src={github} alt="" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-md-4 col-sm-4 col-xs-12 icons">
                    <div
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/USDAO-111790941005211/"
                        );
                      }}
                      className="socialIcon"
                    >
                      <Image className="imgs" src={facebook} alt="" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 col-sm-4 col-xs-12 icons">
                    <div
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/USDAO-111790941005211/"
                        );
                      }}
                      className="socialIcon"
                    >
                      <Image className="imgs" src={instagram} alt="" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 col-sm-4 col-xs-12 icons">
                    <div
                      onClick={() => {
                        window.open("https://twitter.com/usdao_io");
                      }}
                      className="socialIcon"
                    >
                      <Image className="imgs" src={twitter} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="partnersBody">
          <div className="partnersHeading">
            <h1>Patners</h1>
          </div>
          <div className="partnerBody">
            <Partner />
          </div>
        </div>
      </section> */}
      <section>
        <div className="frequentlyBody">
          <div className="frequentlyHeading">
            <h1>
              Frequently Asked <span>Question</span>
            </h1>
          </div>
          <div className="frequent">
            <div className="row">
              {Faq.map((item, index) => (
                <div
                  key={item.id}
                  className="col-xl-6 col-md-6 col-sm-12 col-sm-12"
                >
                  <div className="InnerDivFaq row">
                    <div className="Faq col-xl-11 col-md-11 col-sm-11 col-xs-11">
                      <p>{item.que}</p>
                    </div>
                    <div
                      onClick={() => handleFaq(item)}
                      className="FaqIcon col-xl-1 col-md-1 col-sm-1 col-xs-1"
                    >
                      <MdChevronRight className="arrowsec" size={40} />
                    </div>
                    {showAnswer === item.id && show !== false ? (
                      <div className="FaqAns">
                        <div dangerouslySetInnerHTML={{ __html: item.ans }} />
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="contibutersBody">
          <div className="contibutersHeading">
            <h1>Technology Partners</h1>
          </div>
          <div className="contibutersDetails">
            <div className="partners">
              <div className="row d-flex justify-content-center">
                {/* <div className="col-1"></div> */}
                <div className="d-flex justify-content-center col-xl-12 col-md-12 col-sm-12 col-xs-12 mt-2">
                  <Image className="partnerImg" src={gfuture} alt="" />
                </div>
                {/* <div className="col-1"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="contibutersBody">
          <div className="contibutersHeading">
            <h1>Contributers</h1>
            {/* <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient. montes, nascetur ridiculus
              mus. Donec quam felis, ultricies nec, pellentesque eu,
            </p> */}
          </div>
          <div className="contibutersDetails">
            <div className="partners">
              <div className="row d-flex justify-content-center">
                {/* <div className="col-1"></div> */}
                <div className="d-flex justify-content-center col-xl-12 col-md-12 col-sm-12 col-xs-12 mt-2 ">
                  <Image className="partnerImg" src={lab196} alt="" />
                </div>
                {/* <div className="col-1"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
