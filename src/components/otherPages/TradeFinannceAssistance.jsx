import MetaComponent from "@/components/common/MetaComponent";
import OdometerComponent from "@/components/common/OdometerComponent";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { dubaiSouthFreeZone, tradeFinanceAssistance } from "@/data/sliderData";
import { counterItems2, counterItems4 } from "@/data/facts";
import { testimonials } from "@/data/testimonials";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const metadata = {
  title: "Trade Finannce Assistance",
  description: "Trade Finannce Assistance",
};
const TradeFinannceAssistance = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header1 />

        <div className="section-process style-1 tf-spacing-5">
          <div className="tf-container">
            <div className="wrap border-0">
              <div className="row align-items-end">
                <div className="col-xl-6 my-auto">
                  <div className="content">
                    <div className="heading">
                      <h1 className="title split-text effect-right">
                        Trade Finannce Assistance
                      </h1>
                      <div className="description">
                        <p
                          className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          Quest Management Consultancy offers specialized trade
                          finance assistance services to businesses. As
                          companies expand their operations across borders, it
                          becomes necessary to manage their financial
                          transactions efficiently. The firm's team of experts
                          provides customized solutions to clients, including
                          import and export financing, documentary credit, and
                          other trade finance instruments. They work closely
                          with clients to understand their specific requirements
                          and tailor solutions that meet their needs. Quest
                          Management Consultancy's trade finance assistance
                          services enable businesses to manage their cash flow
                          effectively, mitigate risks, and achieve their
                          business objectives. With their vast experience and
                          expertise in trade finance, clients can rely on Quest
                          Management Consultancy to provide reliable and
                          efficient services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div
                    className="shape-img-bg shape-border style-2 scroll-tranform"
                    data-distance="20%"
                  >
                    <img
                      alt=""
                      className="img-custom-anim-left wow"
                      src="/images/qb/tradfinance1.webp"
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


      <div className="tf-container">
        <div className="wrap">
          <div className="row align-items-end">
            <div style={{ marginTop: 100 }}>
              <div className="box-service style-1">
                <div className="img-style effect-item effect-left effect-2">
                  <img
                    className="lazyload"
                    data-src="/images/qb/tradfinance2.webp"
                    alt="service"
                    src="/images/qb/tradfinance2.webp"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <h3 className="text_dark fw-6">
                      Local and International Guarantees
                    </h3>
                  </div>
                  <p className="text-body-1 text_mono-gray-7 mt_20 mb-4">
                    We understand that bank guarantees are important instruments
                    for protecting your business against non-performance of
                    underlying contracts. Also, we can ensure that our clients
                    have the capacity to pay their financial responsibilities.
                    We will arrange all necessary document to avail the
                    Guarantees. We can make arrangements to confirm your
                    creditworthiness to local and foreign suppliers, or we can
                    verify that the local and foreign business partners with
                    whom you intend to trade have a good credit standing,
                    guaranteeing payment up to the agreed-upon level.
                  </p>

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
      </div>

      <div
        className="bg-mono-gray-1"
        style={{ marginTop: 100, paddingTop: 100, paddingBottom: 100 }}
      >
        <div className="tf-container-2">
          <div className="heading-secetion text-center mb_61">
            <h1 className="heading-title text_dark fw-6 split-text effect-right">
              Effective Solutions
            </h1>
          </div>
          <p
            className="text-body-1 text_mono-gray-7 mb-4"
            style={{ marginBottom: 100 }}
          >
            We are a team of professionals who are specialized in providing
            holistic support and services towards setting up your business in
            UAE and abroad. We are always ready to walk the extra mile to cater
            to all your business requisites. Our customer-centric approach makes
            us more accessible to our global clientele.
          </p>
          <div className="tf-grid-layout lg-col-3">
            <div
              className="choice-item left wow animate__fadeInLeft animate__animated"
              data-wow-delay="0s"
            >
              <div className="heading">
                <h5 className="text_dark fw-6 mb_16">Customer Support 24/7:</h5>
                <p className="text-body-1 text_dark">
                  We have a competent team of core professionals who are
                  available to serve the clients requirement round the clock.
                </p>
              </div>
            </div>
            <div
              className="choice-item center wow animate__fadeInLeft animate__animated"
              data-wow-delay="0.2s"
            >
              <div className="heading">
                <h5 className="text_dark text_white fw-6 mb_16">
                  Experience Team:
                </h5>
                <p className="text-body-1 text_dark text_white mb_32">
                  The firm's team of experts assist businesses in preparing the
                  necessary documentation, including Company Registration
                  Documents, obtaining FTA tax certificates and Business Bank
                  Account Opening.
                </p>
              </div>
            </div>
            <div
              className="choice-item right wow animate__fadeInLeft animate__animated"
              data-wow-delay="0.3s"
            >
              <div className="heading">
                <h5 className="text_dark fw-6 mb_16">
                  Exceeds our client’s expectations:
                </h5>
                <p className="text-body-1 text_dark">
                  Minimum Turnaround Time and Affordable Charges, Collaboration
                  with various Govt/Semi Govt agencies, Tailor made packages and
                  Highly experienced Professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tf-container">
        <div className="wrap">
          <div className="row align-items-end">
            <div style={{ marginTop: 100 }}>
              <div className="box-service style-1">
                <div className="img-style effect-item effect-left effect-2 my-auto">
                  <h5 className="text_dark fw-6 mb_16">
                    Trade Solutions for Exporters:
                  </h5>
                  <ul
                    className="list d-grid gap_16"
                  >
                    <li className="sub-heading d-flex gap_16 align-items-center remove-li-points">
                      <i className="icon-check-solid text_primary" /> Letter of
                      Credit Advising
                    </li>
                    <li className="sub-heading d-flex gap_16 align-items-center remove-li-points">
                      <i className="icon-check-solid text_primary" /> Letter of
                      Credit Confirmation
                    </li>
                    <li className="sub-heading d-flex gap_16 align-items-center remove-li-points">
                      <i className="icon-check-solid text_primary" />{" "}
                      Transferable Letter of Credit
                    </li>
                    <li className="sub-heading d-flex gap_16 align-items-center remove-li-points">
                      <i className="icon-check-solid text_primary" /> Assignment
                      of Proceeds
                    </li>
                    <li className="sub-heading d-flex gap_16 align-items-center remove-li-points">
                      <i className="icon-check-solid text_primary" /> Export
                      Bill Collection (DA/DP)
                    </li>
                    <li className="sub-heading d-flex gap_16 align-items-center remove-li-points">
                      <i className="icon-check-solid text_primary" />{" "}
                      Receivables Financing
                    </li>
                    <li className="sub-heading d-flex gap_16 align-items-center remove-li-points">
                      <i className="icon-check-solid text_primary" /> Letter of
                      Credit Negotiation & Bill Discounting
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <img
                    alt=""
                    className="img-custom-anim-left wow"
                    src="/images/qb/premiumServices3.webp"
                    width={802}
                    height={535}
                    style={{borderRadius:35}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="tf-container">
        <div className="text-with-img-1 tf-spacing-14">
          <div className="row">
            <div className="col-lg-6">
              <div className="left">
                <div className="shape-img-bg">
                  <img
                    alt="img-with-shape-1"
                    className="img-custom-anim-left wow"
                    src="/images/qb/premiumServices3.jpeg"
                    width={696}
                    height={598}
                  />
                  <div className="img-bg-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 288 288"
                    >
                      <linearGradient
                        id="imagewave"
                        x1="70.711%"
                        x2="0%"
                        y1="70.711%"
                        y2="0%"
                      >
                        <stop
                          className="stop-color"
                          offset="0%"
                          stopOpacity={1}
                        />
                        <stop
                          className="stop-color"
                          offset="100%"
                          stopOpacity={1}
                        />
                      </linearGradient>
                      <path fill="url(#imagewave)" d="">
                        <animate
                          repeatCount="indefinite"
                          attributeName="d"
                          dur="5s"
                          values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                                c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                                c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                                c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
                                
                                
                                M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
                                c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
                                c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
                                C48.9,198.6,57.8,191,51,171.3z;
                                
                                M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                                c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                                c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                                c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z  "
                        />
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <div className="heading">
                  <h1 className="title effect-right">Private Account Services</h1>
                  <div className="description">
                    <p
                      className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                      data-wow-delay="0s"
                    >
                      Quest Management Consultancy provides private account
                      services to individuals looking for personalized banking
                      solutions.
                    </p>
                    <p
                      className="text-body-1 text_mono-gray-7 wow animate__fadeInUp animate__animated"
                      data-wow-delay="0s"
                    >
                      The private account services offered by Quest Management
                      Consultancy include opening and managing bank accounts,
                      investment advisory services, wealth management, and tax
                      planning.
                    </p>
                    <p
                      className="text-body-1 text_mono-gray-7 wow animate__fadeInUp animate__animated"
                      data-wow-delay="0s"
                    >
                      With Quest Management Consultancy’s private account
                      services, clients can access exclusive banking facilities,
                      such as private banking, offshore banking, and investment
                      opportunities. The firm prioritizes client confidentiality
                      and ensures that all private account services are conducted
                      with the utmost discretion.
                    </p>
                  </div>
                </div>
                {/* <div
                    className="wrap d-flex wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s"
                  >
                    <a
                      href="/about"
                      className="tf-btn btn-primary2 height-2 btn-px-28"
                    >
                      <span> Learn more</span>
                      <span className="bg-effect" />
                    </a>
                    <div className="contact d-flex align-items-center gap_12">
                      <div className="icon">
                        <i className="icon-tty-solid" />
                      </div>
                      <p className="font2 text-body-2">
                        24/7 Support:{" "}
                        <a
                          href="tel:+97145299247"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          +971 4 529 9247
                        </a>
                      </p>
                    </div>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-testimonial style-5 tf-spacing-16 pb-0">
        <div className="heading-section text-center mb_63">
          <h3 className="text_white split-text effect-right">
          Trade Solutions for Importers
          </h3>
        </div>
        <Swiper
          className="swiper sw-layout"
          loop
          initialSlide={1}
          centeredSlides
          spaceBetween={15}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            575: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 1.3,
              spaceBetween: 72,
            },
            1200: {
              slidesPerView: 1.98,
              spaceBetween: 72,
            },
          }}
        >
          {tradeFinanceAssistance.map((item, index) => (
            <SwiperSlide
              className="swiper-slide"
              key={`${item.id}-${index}`}
            >
              <div className="testimonial style-4">
                <div className="img-style-slider mb_40">
                  <img
                    className="lazyload"
                    data-src={item.imageSrc}
                    alt="testimonial"
                    src={item.imageSrc}
                    width={908}
                    style={{borderRadius:35}}
                    height={652}
                  />
                </div>
                <div className="content">
                  <div className="d-flex flex-column">
                    <h2 className="text_white mb-3">{item.heading}</h2>
                    <div className="left">
                      <p className="text-body-2 text_white mb_12">
                        {item.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="bot">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="wrap-counter styel-1">
                  {counterItems2.map((item, index) => (
                    <div key={index} className="counter-item style-1">
                      <div className="counter-number">
                        <h2 className="odometer text_mono-dark-9">
                          <OdometerComponent max={item.value} />
                        </h2>
                        <span className="sub text_mono-dark-9">
                          {item.unit}
                        </span>
                      </div>
                      <p
                        className="text-body-2 text_mono-gray-7"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer1 />
    </>
  );
};

export default TradeFinannceAssistance;
