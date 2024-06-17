"use client";
import mediaglobe from "../../app/assets/images/Frame.png";
import usdaoOr from "../../app/assets/logos/usdaoOrng.png";
import light from "../../app/assets/logos/light.png";
import dark from "../../app/assets/logos/dark.png";
import daoOrng from "../../app/assets/logos/daoOrng.png";
import daoDark from "../../app/assets/logos/daoDark.png";
import daoLight from "../../app/assets/logos/daoLight.png";
import usdao from "../../app/assets/logos/download.png";
import { useEffect } from "react";
import "./mediakit.scss";
import Image from "next/image";

const Mediakit = () => {
  useEffect(() => {
    {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="MediaOuterBody">
      <div className="MediaBody">
        <div className="Resources">
          <section>
            <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12 align-content-center">
                <div className="resourceH">
                  <div className="resourceHeading">
                    <h1>
                      USDAO Media Kit and Brand
                      <span> Resources</span>
                    </h1>
                  </div>
                  <div className="desc">
                    <p>
                      Brand assets & resources of the world&apos;s most
                      decentralized stablecoin USDAO - variations of USDAO
                      Logos, Color Schemes, Usage Patterns and Do&apos;s &
                      Don&apos;ts
                    </p>
                  </div>
                  <div className="desc">
                    <p>
                      If you don&apos;t have USDAO, Then you need to buy it with
                      1 US Dollar or You can Convert your other cryptocurrency
                      into USDAO!
                    </p>
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
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                <div className="mediaImage">
                  <Image className="mediaimg" src={mediaglobe} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="usdaoMedia">
              <div className="usdaoHead">
                <h1>
                  USDAO <span>Media Kit</span> - Logos
                </h1>
                <p>
                  The USDAO brand logos displayed in the official colors and
                  usage patterns. Do not place the logo on top of other objects
                  and leave a reasonable amount of margin around the outside so
                  the logo is clearly visible. Brand assets and resources of the
                  world&apos;s most decenterlized StableCoin USDAO- variations
                  of USDAO Logos, Color Schemes, Usage Patterns and Do&apos;s &
                  Dont&apos;s.
                </p>
              </div>
              <div className="usdaMediaBody">
                <div className="row">
                  <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="OuterUsdaoBox">
                      <div className="row">
                        <div className="usdaoImgBorder">
                          <Image className="usdaoImg" src={usdaoOr} alt="" />
                        </div>
                        <div className="usdaologdesc">
                          <h5>Primary Logo</h5>
                          <p>
                            This is the main USDAO logo. It should be used in
                            this form whenever possible.
                          </p>
                        </div>
                        <div className="chooseimg">
                          <div className="row">
                            <div className="col-6">
                              <p>SVG</p>
                            </div>
                            <div className="col-6">
                              <p>PNG</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="OuterUsdaoBox">
                      <div className="row">
                        <div className="usdaoImgBorder">
                          <Image className="usdaoImg" src={light} alt="" />
                        </div>
                        <div className="usdaologdesc">
                          <h5>Primary Logo</h5>
                          <p>
                            This is the main USDAO logo. It should be used in
                            this form whenever possible.
                          </p>
                        </div>
                        <div className="chooseimg">
                          <div className="row">
                            <div className="col-6">
                              <p>SVG</p>
                            </div>
                            <div className="col-6">
                              <p>PNG</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="OuterUsdaoBox">
                      <div className="row">
                        <div className="usdaoImgBorder">
                          <Image className="usdaoImg" src={dark} alt="" />
                        </div>
                        <div className="usdaologdesc">
                          <h5>Primary Logo</h5>
                          <p>
                            This is the main USDAO logo. It should be used in
                            this form whenever possible.
                          </p>
                        </div>
                        <div className="chooseimg">
                          <div className="row">
                            <div className="col-6">
                              <p>SVG</p>
                            </div>
                            <div className="col-6">
                              <p>PNG</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="OuterUsdaoBox">
                      <div className="row">
                        <div className="usdaoImgBorder">
                          <Image className="usdaoImg" src={usdaoOr} alt="" />
                        </div>
                        <div className="usdaologdesc">
                          <h5>Primary Logo</h5>
                          <p>
                            This is the main USDAO logo. It should be used in
                            this form whenever possible.
                          </p>
                        </div>
                        <div className="chooseimg">
                          <div className="row">
                            <div className="col-6">
                              <p>SVG</p>
                            </div>
                            <div className="col-6">
                              <p>PNG</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="OuterUsdaoBox">
                      <div className="row">
                        <div className="usdaoImgBorder">
                          <Image className="daoImg" src={daoOrng} alt="" />
                        </div>
                        <div className="usdaologdesc">
                          <h5>Primary Logo</h5>
                          <p>
                            This is the main USDAO logo. It should be used in
                            this form whenever possible.
                          </p>
                        </div>
                        <div className="chooseimg">
                          <div className="row">
                            <div className="col-6">
                              <p>SVG</p>
                            </div>
                            <div className="col-6">
                              <p>PNG</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="OuterUsdaoBox">
                      <div className="row">
                        <div className="usdaoImgBorder">
                          <Image className="daoImg" src={daoLight} alt="" />
                        </div>
                        <div className="usdaologdesc">
                          <h5>Primary Logo</h5>
                          <p>
                            This is the main USDAO logo. It should be used in
                            this form whenever possible.
                          </p>
                        </div>
                        <div className="chooseimg">
                          <div className="row">
                            <div className="col-6">
                              <p>SVG</p>
                            </div>
                            <div className="col-6">
                              <p>PNG</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="OuterUsdaoBox">
                      <div className="row">
                        <div className="usdaoImgBorder">
                          <Image className="daoImg" src={daoDark} alt="" />
                        </div>
                        <div className="usdaologdesc">
                          <h5>Primary Logo</h5>
                          <p>
                            This is the main USDAO logo. It should be used in
                            this form whenever possible.
                          </p>
                        </div>
                        <div className="chooseimg">
                          <div className="row">
                            <div className="col-6">
                              <p>SVG</p>
                            </div>
                            <div className="col-6">
                              <p>PNG</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="OuterUsdaoBox">
                      <div className="row">
                        <div className="usdaoImgBorder">
                          <Image className="daoImg" src={daoOrng} alt="" />
                        </div>
                        <div className="usdaologdesc">
                          <h5>Primary Logo</h5>
                          <p>
                            This is the main USDAO logo. It should be used in
                            this form whenever possible.
                          </p>
                        </div>
                        <div className="chooseimg">
                          <div className="row">
                            <div className="col-6">
                              <p>SVG</p>
                            </div>
                            <div className="col-6">
                              <p>PNG</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ourLogo">
            <div className="ourLogoHead">
              <h1>
                <span>Onvault</span> Logos
              </h1>
              <p>
                The USDAO brand logos displayed in the official colors and usage
                patterns. Do not place the logo on top of other objects and
                leave a reasonable amount of margin around the outside so the
                logo is clearly visible.
              </p>
            </div>
            <div className="assetsMediaBody">
              <div className="row">
                <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="OuterUsdaoBox">
                    <div className="row">
                      {/* <div className="usdaoImgBorder">
                      <img className="usdaoImg" src={assetorng} alt="" />
                    </div> */}
                      <div className="usdaologdesc">
                        <h5>Primary Logo</h5>
                        <p>
                          This is the main USDAO logo. It should be used in this
                          form whenever possible.
                        </p>
                      </div>
                      <div className="chooseimg">
                        <div className="row">
                          <div className="col-6">
                            <p>SVG</p>
                          </div>
                          <div className="col-6">
                            <p>PNG</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="OuterUsdaoBox">
                    <div className="row">
                      {/* <div className="usdaoImgBorder">
                      <img className="usdaoImg" src={assetsLight} alt="" />
                    </div> */}
                      <div className="usdaologdesc">
                        <h5>Primary Logo</h5>
                        <p>
                          This is the main USDAO logo. It should be used in this
                          form whenever possible.
                        </p>
                      </div>
                      <div className="chooseimg">
                        <div className="row">
                          <div className="col-6">
                            <p>SVG</p>
                          </div>
                          <div className="col-6">
                            <p>PNG</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="OuterUsdaoBox">
                    <div className="row">
                      {/* <div className="usdaoImgBorder">
                      <img className="usdaoImg" src={assetDark} alt="" />
                    </div> */}
                      <div className="usdaologdesc">
                        <h5>Primary Logo</h5>
                        <p>
                          This is the main USDAO logo. It should be used in this
                          form whenever possible.
                        </p>
                      </div>
                      <div className="chooseimg">
                        <div className="row">
                          <div className="col-6">
                            <p>SVG</p>
                          </div>
                          <div className="col-6">
                            <p>PNG</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="OuterUsdaoBox">
                    <div className="row">
                      {/* <div className="usdaoImgBorder">
                      <img className="usdaoImg" src={assetorng} alt="" />
                    </div> */}
                      <div className="usdaologdesc">
                        <h5>Primary Logo</h5>
                        <p>
                          This is the main USDAO logo. It should be used in this
                          form whenever possible.
                        </p>
                      </div>
                      <div className="chooseimg">
                        <div className="row">
                          <div className="col-6">
                            <p>SVG</p>
                          </div>
                          <div className="col-6">
                            <p>PNG</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="OuterUsdaoBox">
                    <div className="row">
                      {/* <div className="usdaoImgBorder">
                      <img className="usdaoImg" src={asseticonsorng} alt="" />
                    </div> */}
                      <div className="usdaologdesc">
                        <h5>Primary Logo</h5>
                        <p>
                          This is the main USDAO logo. It should be used in this
                          form whenever possible.
                        </p>
                      </div>
                      <div className="chooseimg">
                        <div className="row">
                          <div className="col-6">
                            <p>SVG</p>
                          </div>
                          <div className="col-6">
                            <p>PNG</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="OuterUsdaoBox">
                    <div className="row">
                      {/* <div className="usdaoImgBorder">
                      <img className="usdaoImg" src={assetIconDark} alt="" />
                    </div> */}
                      <div className="usdaologdesc">
                        <h5>Primary Logo</h5>
                        <p>
                          This is the main USDAO logo. It should be used in this
                          form whenever possible.
                        </p>
                      </div>
                      <div className="chooseimg">
                        <div className="row">
                          <div className="col-6">
                            <p>SVG</p>
                          </div>
                          <div className="col-6">
                            <p>PNG</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="OuterUsdaoBox">
                    <div className="row">
                      {/* <div className="usdaoImgBorder">
                      <img className="usdaoImg" src={assetsIconLight} alt="" />
                    </div> */}
                      <div className="usdaologdesc">
                        <h5>Primary Logo</h5>
                        <p>
                          This is the main USDAO logo. It should be used in this
                          form whenever possible.
                        </p>
                      </div>
                      <div className="chooseimg">
                        <div className="row">
                          <div className="col-6">
                            <p>SVG</p>
                          </div>
                          <div className="col-6">
                            <p>PNG</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="OuterUsdaoBox">
                    <div className="row">
                      {/* <div className="usdaoImgBorder">
                      <img className="usdaoImg" src={asseticonsorng} alt="" />
                    </div> */}
                      <div className="usdaologdesc">
                        <h5>Primary Logo</h5>
                        <p>
                          This is the main USDAO logo. It should be used in this
                          form whenever possible.
                        </p>
                      </div>
                      <div className="chooseimg">
                        <div className="row">
                          <div className="col-6">
                            <p>SVG</p>
                          </div>
                          <div className="col-6">
                            <p>PNG</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="LogoDont">
              <div className="LogoDontHead">
                <h1>
                  Logo <span>Don&apos;ts</span>
                </h1>
                <p>
                  Here are a few things that you should avoid doing when using
                  the logo
                </p>
              </div>
              <div className="LogoDontMediaBody">
                <div className="flex justify-content-center row">
                  <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="OuterUsdaoBox">
                      <div className="row">
                        <div className="usdaoImgBorder">
                          <Image className="usdaoImg" src={usdao} alt="" />
                        </div>
                        <div className="usdaologdesc">
                          <h5>Primary Logo</h5>
                          <p>
                            This is the main USDAO logo. It should be used in
                            this form whenever possible.
                          </p>
                        </div>
                        <div className="chooseimg">
                          <div className="row">
                            <div className="col-6 text-center">
                              <p>SVG</p>
                            </div>
                            <div className="col-6 text-center">
                              <p>PNG</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="OuterUsdaoBox">
                      <div className="row">
                        <div className="usdaoImgBorder">
                          <Image className="usdaoImg" src={light} alt="" />
                        </div>
                        <div className="usdaologdesc">
                          <h5>Primary Logo</h5>
                          <p>
                            This is the main USDAO logo. It should be used in
                            this form whenever possible.
                          </p>
                        </div>
                        <div className="chooseimg">
                          <div className="row">
                            <div className="col-6 text-center">
                              <p>SVG</p>
                            </div>
                            <div className="col-6 text-center">
                              <p>PNG</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="OuterUsdaoBox">
                      <div className="row">
                        <div className="usdaoImgBorder">
                          <Image className="usdaoImg" src={usdao} alt="" />
                        </div>
                        <div className="usdaologdesc">
                          <h5>Primary Logo</h5>
                          <p>
                            This is the main USDAO logo. It should be used in
                            this form whenever possible.
                          </p>
                        </div>
                        <div className="chooseimg">
                          <div className="row">
                            <div className="col-6 text-center">
                              <p>SVG</p>
                            </div>
                            <div className="col-6 text-center">
                              <p>PNG</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Mediakit;
