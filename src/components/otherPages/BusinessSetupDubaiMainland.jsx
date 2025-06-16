import React from "react";
import MetaComponent from "../common/MetaComponent";
import Header1 from "../headers/Header1";
import Footer1 from "../footers/Footer1";
import { counterItems3, counterItems4 } from "@/data/facts";
import OdometerComponent from "../common/OdometerComponent";
import { Link } from "react-router-dom";
import { dubaiMainlandEffectiveSolutionsData } from "@/data/blogs";
const metadata = {
  title: "Business setup in Dubai Mainland",
  description: "Business setup in Dubai Mainland",
};
const BusinessSetupDubaiMainland = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header1 />

        <div className="section-process style-1 tf-spacing-5 pb-0">
          <div className="tf-container">
            <div className="wrap pb-0 border-0">
              <div className="row align-items-end">
                <div className="col-xl-6 my-auto">
                  <div className="content">
                    <div className="heading">
                      <h1 className="title split-text effect-right mb-5">
                        Mainland Company Setup
                        <br /> with DED-Dubai
                      </h1>
                      <div className="description">
                        <p
                          className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          Would you like to start your own company in Dubai? If
                          so, the Mainland is the ideal place to start.
                        </p>
                        <p
                          className="text-body-1 text_mono-gray-7 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          Dubai mainland business setup refers to establishing a
                          business in the commercial or industrial areas of
                          Dubai governed by the Dubai Economic Department (DED)
                          instead of the free zones. This allows companies to
                          have access to the local market and operate throughout
                          the UAE without any geographical restrictions. The
                          Dubai mainland offers a range of business
                          opportunities in various industries including finance,
                          real estate, tourism, and technology. Setting up a
                          mainland business in Dubai requires compliance with
                          specific legal requirements, including obtaining a
                          trade license, a local sponsor, and adhering to labor
                          and immigration regulations. Working with a reputable
                          business setup service provider can help streamline
                          the process and ensure a successful venture in the
                          Dubai mainland.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div
                    className="shape-img-bg shape-border style-2 scroll-tranform"
                    data-distance="6%"
                  >
                    <img
                      alt=""
                      className="img-custom-anim-left wow"
                      src="/images/qb/dubaiPic1.webp"
                      width={802}
                      height={535}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className={`heading-section text-center pt_90`}>
          <h2 className="section-faqs style-1 pt-0">
            Why business setup in Dubai?
          </h2>

          <p
            className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
            data-wow-delay="0s"
          >
            The UAE provides numerous possibilities for corporate growth because
            of its favorable business climate, <br /> cutting-edge
            infrastructure, and prime location as a commercial hub. Start your
            business journey in Dubai right <br />
            away to enjoy all that the city has to offer. Start your business in
            Dubai RIGHT NOW!
          </p>
        </div>
   

      <div className="tf-container pt_90">
        <div className="wrap">
          <div className="row align-items-end">
           
              <div className="box-service style-1">
                <div className="img-style effect-item effect-left effect-2">
                  <img
                    className="lazyload"
                    data-src="/images/qb/assist.jpg"
                    alt="service"
                    src="/images/qb/assist.jpg"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <h3 className="text_dark fw-6">How could we assist you?</h3>
                  </div>
                  <p className="text-body-1 text_mono-gray-7 mt_20 mb-4">
                    We provide you top-notch, high-quality company formation
                    services in the DED-DUBAI
                  </p>
                  <ul className="list effect-item effect-right effect-3">
                    <li className="text-body-1 text_dark">
                      Instant Trade Name Approval & Initial Approval.
                    </li>
                    <li className="text-body-1 text_dark">
                      Office Lease Agreement or EJARI.
                    </li>
                    <li className="text-body-1 text_dark">
                      Obtaining SIRA Approval for Industrial Activities.
                    </li>
                    <li className="text-body-1 text_dark">License Issuance.</li>
                    <li className="text-body-1 text_dark">
                      Your queries are answered and met within a short time.
                    </li>
                    <li className="text-body-1 text_dark">
                      Collaboration with various Govt/Semi Govt agencies.
                    </li>
                    <li className="text-body-1 text_dark">
                      Affordable Charges.
                    </li>
                    <li className="text-body-1 text_dark">
                      Tailor made packages.
                    </li>
                    <li className="text-body-1 text_dark">
                      Highly experienced Professional.
                    </li>
                  </ul>

                  <Link
                    to={`/contact-us`}
                    className="tf-btn height-2 btn-dark effect-item effect-right effect-5"
                  >
                    <span>Contact Us</span>
                    <span className="bg-effect" />
                  </Link>
                </div>
              </div>
          
          </div>
        </div>
      </div>

      <div className="section-blog style-3 sw-layout-1 tf-spacing-17 pt_90">
        <div className="tf-container">
          <div className="wrap pb-0" style={{ borderBottom: 0 }}>
            <div className="heading-section d-flex justify-content-center flex-wrap-md gap_12 align-items-end mb_60">
              <div className="left">
                <h1 className="heading-title split-text effect-right text-center">
                  Effective Solutions
                </h1>
                <p
                  className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated text-center"
                  data-wow-delay="0s"
                >
                  We are a team of professionals who are specialized in
                  providing holistic support and services towards setting up
                  your business
                  <br />
                  in UAE and abroad. We are always ready to walk the extra mile
                  to cater to all your business requisites. Our customer-centric
                  <br />
                  approach makes us more accessible to our global clientele.
                </p>
              </div>
            </div>
            <div className="row">
              {dubaiMainlandEffectiveSolutionsData.map((article) => (
                <div className="col-md-4">
                  <div className="blog-article-item hover-image">
                    <div className="article-thumb mb_25">
                      <img
                        className="lazyload"
                        data-src={article.imageSrc}
                        alt="blog"
                        src={article.imageSrc}
                        width={article.width}
                        height={article.height}
                      />
                    </div>
                    <div className="article-content">
                      <h5 className="title letter-spacing-2">
                        <div className="link">{article.title}</div>
                      </h5>
                      <p
                        className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
                        data-wow-delay="0s"
                      >
                        {article.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
        <div className="tf-container-2">
          <div className="heading-section text-center mb_58">
            <div className="heading-tag d-flex gap_12 mx-auto mb_20 text_mono-dark-8 fw-5">
              <div className="icon">
                <i className="icon-user-question-02" />
              </div>
              <p className="text-body-3 fw-5">Why Choose Us ?</p>
            </div>
            <h2 className="title text_mono-dark-9 fw-5 split-text split-lines-rotation-x">
              Our unique solutions to{" "}
              <span className="text-gradient">unlock</span> your <br />
              brand’s full potential
            </h2>
          </div>
          <ul
            className="nav nav-tabs-wrap style-2 overflow-x-auto mb_48"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="service-1"
                data-bs-toggle="tab"
                data-bs-target="#service-1-pane"
                type="button"
                role="tab"
                aria-controls="service-1-pane"
                aria-selected="true"
              >
                <span className="text-body-1 text_mono-gray-5">01</span>
                <span className="fw-5 h6"> Govt. Approvals</span>
                <span className="line" />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="service-2"
                data-bs-toggle="tab"
                data-bs-target="#service-2-pane"
                type="button"
                role="tab"
                aria-controls="service-2-pane"
                aria-selected="false"
              >
                <span className="text-body-1 text_mono-gray-5">02</span>
                <span className="fw-5 h6">Company Setup</span>
                <span className="line" />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="service-3"
                data-bs-toggle="tab"
                data-bs-target="#service-3-pane"
                type="button"
                role="tab"
                aria-controls="service-3-pane"
                aria-selected="false"
              >
                <span className="text-body-1 text_mono-gray-5">03</span>
                <span className="fw-5 h6">Visa & ID Process</span>
                <span className="line" />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="service-4"
                data-bs-toggle="tab"
                data-bs-target="#service-4-pane"
                type="button"
                role="tab"
                aria-controls="service-4-pane"
                aria-selected="false"
              >
                <span className="text-body-1 text_mono-gray-5">04</span>
                <span className="fw-5 h6"> Bank Account Setup</span>
                <span className="line" />
              </button>
            </li>
          </ul>
          <div
            className="tab-content flat-animate-tab effect-content-slide"
            id="myTabContent"
          >
            <div
              className="tab-pane show active"
              id="service-1-pane"
              role="tabpanel"
              aria-labelledby="service-1"
              tabIndex={0}
            >
              <div className="box-service style-2">
                <div className="img-style effect-item effect-left">
                  <img
                    className="lazyload"
                    data-src="/images/qb/shakeHands.jpg"
                    alt="service"
                    src="/images/qb/shakeHands.jpg"
                    width={651}
                    height={691}
                  />
                </div>
                <div className="content">
                  <div className="heading effect-item effect-right">
                    <h6 className="text_primary fw-5 mb_12 number">01</h6>
                    <h4 className="fw-5 mb_14 mb_24 title">Govt. Approvals</h4>
                    <p className="text-body-1 text_mono-gray-7">
                      Preparing required documents to initiate government
                      approval process efficiently.
                    </p>
                  </div>
                  <div>
                    <ul className="list effect-item effect-right effect-3 mb_56">
                      <li className="text-body-1 text_white">
                        <i className="icon-check-cycle-line" /> Gather all
                        mandatory paperwork
                      </li>
                      <li className="text-body-1 text_white">
                        <i className="icon-check-cycle-line" />
                        Ensure compliance with regulations
                      </li>
                      <li className="text-body-1 text_white">
                        <i className="icon-check-cycle-line" />
                        Organize files for submission
                      </li>
                      <li className="text-body-1 text_white">
                        <i className="icon-check-cycle-line" />
                        Review for completeness and accuracy
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane show"
              id="service-2-pane"
              role="tabpanel"
              aria-labelledby="service-2"
              tabIndex={0}
            >
              <div className="box-service style-2">
                <div className="img-style effect-item effect-left">
                  <img
                    className="lazyload"
                    data-src="/images/qb/companySetup.jpg"
                    alt="service"
                    src="/images/qb/companySetup.jpg"
                    width={651}
                    height={691}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_28 effect-item effect-right">
                    <h6 className="text_primary fw-5 mb_12 number">02</h6>
                    <h4 className="fw-5 mb_14 mb_24 title">Company Setup</h4>
                    <p className="text-body-1 text_mono-gray-7">
                      Starting trade name approval through to final business
                      license acquisition process.
                    </p>
                  </div>
                  <ul className="list effect-item effect-right effect-3 mb_56">
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" />
                      Apply for trade name approval
                    </li>
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" />
                      Secure initial approval and MOA typing
                    </li>
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" /> Obtain Ejari for
                      office lease
                    </li>
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" /> Get official
                      company license
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-pane show"
              id="service-3-pane"
              role="tabpanel"
              aria-labelledby="service-3"
              tabIndex={0}
            >
              <div className="box-service style-2">
                <div className="img-style effect-item effect-left">
                  <img
                    className="lazyload"
                    data-src="/images/qb/visaAndId.jpg"
                    alt="service"
                    src="/images/qb/visaAndId.jpg"
                    width={651}
                    height={691}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_28 effect-item effect-right">
                    <h6 className="text_primary fw-5 mb_12 number">03</h6>
                    <h4 className="fw-5 mb_14 mb_24 title">
                      Visa & ID Process
                    </h4>
                    <p className="text-body-1 text_mono-gray-7">
                      Handling visa application steps and acquiring Emirates ID
                      for legal residency.
                    </p>
                  </div>
                  <ul className="list effect-item effect-right effect-3 mb_56">
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" /> Submit visa
                      application documents
                    </li>
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" />
                      Complete medical and biometrics
                    </li>
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" />
                      Receive entry permit and stamping
                    </li>
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" />
                      Apply for Emirates ID issuance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-pane show"
              id="service-4-pane"
              role="tabpanel"
              aria-labelledby="service-4"
              tabIndex={0}
            >
              <div className="box-service style-2">
                <div className="img-style effect-item effect-left">
                  <img
                    className="lazyload"
                    data-src="/images/qb/bankAccount.jpg"
                    alt="service"
                    src="/images/qb/bankAccount.jpg"
                    width={651}
                    height={691}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_28 effect-item effect-right">
                    <h6 className="text_primary fw-5 mb_12 number">04</h6>
                    <h4 className="fw-5 mb_14 mb_24 title">
                      Bank Account Setup
                    </h4>
                    <p className="text-body-1 text_mono-gray-7">
                      Coordinating with banker to open a company bank account
                      efficiently.
                    </p>
                  </div>
                  <ul className="list effect-item effect-right effect-3 mb_56">
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" />
                      Schedule meeting with banker
                    </li>
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" />
                      Submit required company documents
                    </li>
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" />
                      Choose account type and services
                    </li>
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" />
                      Complete KYC and verification
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-figures position-relative">
          <div className="tf-container-2">
            <div className="heading-section d-flex gap_12 justify-content-between flex-wrap-md mb_59">
              <div className="left">
                <h2 className="title text_white fw-5 split-text split-lines-transform">
                  Where data <span className="text-gradient">tells</span> our
                  storys
                </h2>
              </div>
              <div className="right">
                <p className="text-body-1 text_mono-gray-5 mb_23 split-text split-lines-transform">
                  Empowering businesses with data-driven strategies to <br />
                  achieve sustainable growth and lasting impact.
                </p>
              </div>
            </div>
            <div className="wrap-counter style-2 tf-grid-layout lg-col-4 sm-col-2 gap-0">
              {counterItems4.map((item, index) => (
                <div key={index} className="counter-item style-2">
                  <div className="icon mb_18">
                    <i className={item.icon} />
                  </div>
                  <p className="text-body-2 mb_6 text_mono-gray-5">
                    {item.label}
                  </p>
                  <div className="counter-number">
                    <div className="odometer text_white">
                      <OdometerComponent max={item.value} />
                    </div>
                    <span className="sub text_white">{item.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="shape-2 position-absolute hide-lg">
            <img
              alt="item"
              src="/images/item/shape-3.png"
              width={742}
              height={223}
            />
          </div>
          <div className="shape position-absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                className="elementor-shape-fill"
                d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
              />
            </svg>
          </div>
        </div>
      

      <Footer1 />
    </>
  );
};

export default BusinessSetupDubaiMainland;
