// import React from 'react';
// import Header1 from '../headers/Header1';
// import Footer1 from '../footers/Footer1';
// import MetaComponent from '@/components/common/MetaComponent';

// const metadata = {
//     title: "Company Liquidation || Advitex - Finance and Business Consulting Reactjs Template",
//     description: "Advitex - Finance and Business Consulting Reactjs Template",
// };

// const BankAccountOpening = () => {
//     return (
//         <>
//             <MetaComponent meta={metadata} />

//             {/* Header */}
//             <div className="wrap-page-header">
//                 <Header1 />
//             </div>

//             <div class="container my-5">

//                 <div class="row align-items-center mb-5">
//                     <div class="col-md-6">
//                         <div class="row g-2">
//                             <div class="col-6"><img src="https://questmanagement.ae/wp-content/uploads/2023/05/Banking-Pic-2.jpg.webp" class="img-fluid rounded shadow-sm" alt="img1" height={300} width={200} /></div>
//                             <div class="col-6"><img src="https://questmanagement.ae/wp-content/uploads/2023/05/banking-3.jpg.webp" class="img-fluid rounded shadow-sm" alt="img2" /></div>
//                             <div class="col-12 mt-2"><img src="https://questmanagement.ae/wp-content/uploads/2023/05/Banking-Pic-1.jpg.webp" class="img-fluid rounded shadow-sm" alt="img3" /></div>
//                         </div>
//                     </div>
//                     <div class="col-md-6">
//                         <h3 class="mb-3">
//                             Corporate Bank Account Assistance</h3>
//                         <p class="text-muted">Quest Management Consultancy is a reputable consulting firm which specializes in providing a wide range of Business Banking services. One of the key services offered by the firm is facilitating trade finance services and Business Account Opening.As businesses expand and operate in different locations, it is essential to have a trusted banking partner that can facilitate financial transactions. However, opening a corporate bank account can be a time-consuming and complicated process, particularly in International markets. Quest Management Consultancy understands the complexities involved in business banking, thereby offering customized solutions to corporates seeking to expand business in the Mid-East.</p>
//                         <p>The firm's team of experts assists businesses in preparing the necessary documentation, including company registration documents, tax certificates, and identification papers, among others. They also guide clients through the bank selection process, ensuring that they choose a bank that meets their specific needs. With their extensive experience and knowledge of banking regulations and procedures, Quest Management Consultancy provides clients with a hassle-free and efficient corporate bank account opening process.</p>
//                         <p>In summary, Quest Management Consultancy's corporate/company bank account opening assistance services offer businesses the convenience of having a trusted banking partner without the stress and complexities of the account opening process.</p>
//                     </div>
//                 </div>
//                 {/*
//                 <div class="row align-items-center mb-5">
//                     <div class="col-md-6">
//                         <h3 class="mb-3">Tailored Business Solutions</h3>
//                         <p class="text-muted">Our solutions are specifically crafted to fit your company's unique requirements, providing long-term value and sustainable growth.</p>
//                     </div>
//                     <div class="col-md-6">
//                         <div class="row g-2">
//                             <div class="col-6"><img src="https://via.placeholder.com/200x150" class="img-fluid rounded shadow-sm" alt="img4" /></div>
//                             <div class="col-6"><img src="https://via.placeholder.com/200x150" class="img-fluid rounded shadow-sm" alt="img5" /></div>
//                         </div>
//                     </div>
//                 </div> */}
//                 {/*
//                 <div class="row align-items-center mb-5">
//                     <div class="col-md-6">
//                         <img src="https://via.placeholder.com/500x300" class="img-fluid rounded shadow-sm" alt="img6" />
//                     </div>
//                     <div class="col-md-6">
//                         <h3 class="mb-3">Visual Communication That Connects</h3>
//                         <p class="text-muted">We create visual content that captures attention and keeps users engaged, while telling a compelling story about your brand.</p>
//                     </div>
//                 </div> */}

//                 <div class="row text-center mb-5">
//                     <div class="col-md-4">
//                         <div class="p-4 border rounded shadow-sm h-100">
//                             <i class="bi bi-headset display-4 text-primary mb-3"></i>
//                             <h5 class="mb-2">24/7 Support</h5>
//                             <p class="text-muted">Our team is available around the clock to assist you with any issues or inquiries you have.</p>
//                         </div>
//                     </div>
//                     <div class="col-md-4">
//                         <div class="p-4 border rounded shadow-sm h-100">
//                             <i class="bi bi-bar-chart-line display-4 text-success mb-3"></i>
//                             <h5 class="mb-2">Performance Insights</h5>
//                             <p class="text-muted">Track your performance metrics in real-time with our integrated analytics dashboard.</p>
//                         </div>
//                     </div>
//                     <div class="col-md-4">
//                         <div class="p-4 border rounded shadow-sm h-100">
//                             <i class="bi bi-shield-lock display-4 text-danger mb-3"></i>
//                             <h5 class="mb-2">Data Security</h5>
//                             <p class="text-muted">We ensure your data is encrypted, backed up, and protected against any breaches.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="title_sections three center my-5 text-center">
//                     <div className="main_title heading-title split-text fw-bold fs-3 mb-3">
//                         Effective Solutions
//                     </div>
//                     <p>Opening a corporate bank account can be a time-consuming and complicated process, particularly in International markets. Quest Management Consultancy understands the complexities involved in business banking, thereby offering customized solutions to corporates seeking to expand business in the Mid-East</p>

//                 </div>

//                 <div class="row text-center mb-5">
//                     <div class="col-md-4">
//                         <div class="p-4 border rounded shadow-sm h-100">
//                             {/* <i class="bi bi-headset display-4 text-primary mb-3"></i> */}
//                             <h3 class="mb-2">Client Profile Analysis:</h3>
//                             <p class="text-muted">The firm's professionals are knowledgeable in banking regulations,Documentation and Risk assessment allowing them to provide clients with comprehensive and reliable advice.
//                                 <br />With Quest Management Consultancy's customized services, clients can access exclusive banking facilities, such as Business Banking & Private banking, offshore banking, and investment opportunities.
//                             </p>
//                         </div>
//                     </div>
//                     <div class="col-md-4">
//                         <div class="p-4 border rounded shadow-sm h-100">
//                             {/* <i class="bi bi-bar-chart-line display-4 text-success mb-3"></i> */}
//                             <h3 class="mb-2">Business Profile Analysis:</h3>
//                             <p class="text-muted">With over two decade of banking experience, the firm's professionals are updated with the current banking regulations, accordingly paving the road map for clients for the ease of banking</p>
//                         </div>
//                     </div>
//                     <div class="col-md-4">
//                         <div class="p-4 border rounded shadow-sm h-100">
//                             {/* <i class="bi bi-shield-lock display-4 text-danger mb-3"></i> */}
//                             <h3 class="mb-2">Selecting Bank:</h3>
//                             <p class="text-muted">Quest Management team of experts work closely with clients to understand their unique financial needs and develop tailor made solution to meet customer’s banking requirements.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="row align-items-center mb-5">
//                     <div class="col-md-6">
//                         <h3 class="mb-3">
//                             Quest Management  Provide Private Account Services</h3>
//                         <p class="text-muted">Quest Management Consultancy provides private account services to individuals looking for personalized banking solutions. Quest team of experts works closely with clients to understand their unique financial needs and develop tailored solutions that meet their requirements. The private account services offered by Quest Management Consultancy include opening and managing bank accounts, investment advisory services, wealth management, and tax planning. The firm's professionals are knowledgeable in banking regulations, investment opportunities, and taxation, allowing them to provide clients with comprehensive and reliable advice.</p>
//                     </div>
//                     <div class="col-md-6">
//                         <div class="row g-3">
//                             <div class="col-12">
//                                 <p>With Quest Management Consultancy’s private account services, clients can access exclusive banking facilities, such as private banking, offshore banking, and investment opportunities. The firm prioritizes client confidentiality and ensures that all private account services are conducted with the utmost discretion.
//                                     Whether clients are looking to secure their wealth, minimize their tax liabilities, or diversify their investment portfolio, Quest Management Consultancy’s private account services offer a range of solutions that cater to their individual needs. The firm’s commitment to excellence and personalized service ensures that clients receive the best possible advice and support to achieve their financial goals.</p>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//                 <div className="container my-5">
//                     <div className="row g-4">
//                         <div className="col-md-4">
//                             <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                                 <li>
//                                     <i className='bi bi-book display-4 text-primary mb-3'></i>

//                                 </li>
//                                 <li>
//                                     <h3>

//                                         Easy to Maintain                                    </h3>
//                                 </li>
//                                 <br /><br /><br /><br />
//                                 <li>
//                                     <i className='bi bi-book display-4 text-primary mb-3'></i>

//                                 </li>
//                                 <li>
//                                     <h3>

//                                         Trade Support</h3>
//                                 </li><br /><br /><br />
//                                 <li>                                    <i className='bi bi-book display-4 text-primary mb-3'></i>
//                                 </li>
//                                 <li>

//                                     <h3>24/7 Customer Support</h3>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="col-md-4">
//                             <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                                 <li>
//                                     <img src="https://questmanagement.ae/wp-content/uploads/2023/05/Bank-pic-4.jpg.webp" alt="" height={700} width={500} />
//                                 </li>

//                             </ul>
//                         </div>

//                         <div className="col-md-4">
//                             <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                                 <li>
//                                     <i className='bi bi-book display-4 text-primary mb-3'></i>
//                                 </li>
//                                 <li>
//                                     <h3>
//                                         Exclusive RM for Each Business Account
//                                     </h3>
//                                 </li>
//                                 <br /><br /><br /><br />
//                                 <li>
//                                     <i className='bi bi-bank display-4 text-primary mb-3'></i>
//                                 </li>
//                                 <li>
//                                     <h3>

//                                         Easy Transfer Local or International</h3>
//                                 </li><br /><br /><br /><br />
//                                 <li>
//                                     <i className='bi bi-bank display-4 text-primary mb-3'></i>
//                                 </li>
//                                 <li>
//                                     <h3>Digital Banking</h3>
//                                 </li><br /><br /><br /><br />
//                                 <li>
//                                     <i className='fa fa-globe'></i>
//                                 </li>
//                                 <li>                                    <i className='bi bi-globe display-4 text-primary mb-3'></i>
//                                 </li>
//                                 <li>
//                                     <h3>

//                                         Worldwide Bank Network</h3>
//                                 </li>

//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//             {/* Footer */}
//             <Footer1 />
//         </>
//     );
// };

// export default BankAccountOpening;

import MetaComponent from "@/components/common/MetaComponent";
import OdometerComponent from "@/components/common/OdometerComponent";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import {
  accountOpeningAssistance,
  dubaiSouthFreeZone,
} from "@/data/sliderData";
import { counterItems2, counterItems4 } from "@/data/facts";
import { testimonials } from "@/data/testimonials";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// const metadata = {
//   title: "Dubai South Freezone",
//   description: "Dubai South Freezone",
// };
const metadata = {
  title: "Bank Account Opeing",
  description: "Bank Account Opeing",
};
const BankAccountOpening = () => {
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
                      <h1 className="title split-text effect-right mb-4">
                        Bank Account Opening
                      </h1>
                      <div className="description">
                        <p
                          className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          Quest Management Consultancy is a reputable consulting
                          firm which specializes in providing a wide range of
                          Business Banking services. One of the key services
                          offered by the firm is facilitating trade finance
                          services and Business Account Opening.As businesses
                          expand and operate in different locations, it is
                          essential to have a trusted banking partner that can
                          facilitate financial transactions. However, opening a
                          corporate bank account can be a time-consuming and
                          complicated process, particularly in International
                          markets. Quest Management Consultancy understands the
                          complexities involved in business banking, thereby
                          offering customized solutions to corporates seeking to
                          expand business in the Mid-East.
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
                      src="/images/qb/bankAccount.jpg"
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

      {/* <div style={{ marginTop: 100 }}>
        <div className={`heading-section text-center`}>
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
      </div> */}

      <div className="tf-container">
        <div className="wrap">
          <div className="row align-items-end">
            <div style={{ marginTop: 100 }}>
              <div className="box-service style-1">
                <div className="img-style effect-item effect-left effect-2">
                  <img
                    className="lazyload"
                    data-src="/images/qb/bankAccount2.webp"
                    alt="service"
                    src="/images/qb/bankAccount2.webp"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <h3 className="text_dark fw-6">
                      Account Opening with Quest Management
                    </h3>
                  </div>
                  <p className="text-body-1 text_mono-gray-7 mt_20 mb-4">
                    The firm's team of experts assists businesses in preparing
                    the necessary documentation, including company registration
                    documents, tax certificates, and identification papers,
                    among others. They also guide clients through the bank
                    selection process, ensuring that they choose a bank that
                    meets their specific needs. With their extensive experience
                    and knowledge of banking regulations and procedures, Quest
                    Management Consultancy provides clients with a hassle-free
                    and efficient corporate bank account opening process.
                  </p>
                  <p className="text-body-1 text_mono-gray-7 mt_20 mb-4">
                    In summary, Quest Management Consultancy's corporate/company
                    bank account opening assistance services offer businesses
                    the convenience of having a trusted banking partner without
                    the stress and complexities of the account opening process.
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
        className="tf-container"
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <div className="heading">
                <h1 className="title split-text effect-right mb-4">
                  Private Account Services
                </h1>
                <div className="description">
                  <p
                    className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s"
                  >
                    Quest Management Consultancy provides private account
                    services to individuals looking for personalized banking
                    solutions. Quest team of experts works closely with clients
                    to understand their unique financial needs and develop
                    tailored solutions that meet their requirements. The private
                    account services offered by Quest Management Consultancy
                    include opening and managing bank accounts, investment
                    advisory services, wealth management, and tax planning. The
                    firm's professionals are knowledgeable in banking
                    regulations, investment opportunities, and taxation,
                    allowing them to provide clients with comprehensive and
                    reliable advice.
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
                  <p
                    className="text-body-1 text_mono-gray-7 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s"
                  >
                    Whether clients are looking to secure their wealth, minimize
                    their tax liabilities, or diversify their investment
                    portfolio, Quest Management Consultancy’s private account
                    services offer a range of solutions that cater to their
                    individual needs. The firm’s commitment to excellence and
                    personalized service ensures that clients receive the best
                    possible advice and support to achieve their financial
                    goals.
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
          <div className="col-lg-6">
            <div className="left">
              <div className="shape-img-bg">
                <img
                  alt="img-with-shape-1"
                  className="img-custom-anim-left wow"
                  src="/images/qb/personalBanking.jpg"
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
            Opening a corporate bank account can be a time-consuming and
            complicated process, particularly in International markets. Quest
            Management Consultancy understands the complexities involved in
            business banking, thereby offering customized solutions to
            corporates seeking to expand business in the Mid-East.
          </p>
          <div className="tf-grid-layout lg-col-3">
            <div
              className="choice-item left wow animate__fadeInLeft animate__animated"
              data-wow-delay="0s"
            >
              <div className="heading">
                <h5 className="text_dark fw-6 mb_16">
                  Client Profile Analysis:
                </h5>
                <p className="text-body-1 text_dark">
                  The firm's professionals are knowledgeable in banking
                  regulations,Documentation and Risk assessment allowing them to
                  provide clients with comprehensive and reliable advice. With
                  Quest Management Consultancy's customized services, clients
                  can access exclusive banking facilities, such as Business
                  Banking & Private banking, offshore banking, and investment
                  opportunities.
                </p>
              </div>
            </div>
            <div
              className="choice-item center wow animate__fadeInLeft animate__animated"
              data-wow-delay="0.2s"
            >
              <div className="heading">
                <h5 className="text_dark text_white fw-6 mb_16">
                  Business Profile Analysis:
                </h5>
                <p className="text-body-1 text_dark text_white mb_32">
                  With over two decade of banking experience, the firm's
                  professionals are updated with the current banking
                  regulations, accordingly paving the road map for clients for
                  the ease of banking
                </p>
              </div>
            </div>
            <div
              className="choice-item right wow animate__fadeInLeft animate__animated"
              data-wow-delay="0.3s"
            >
              <div className="heading">
                <h5 className="text_dark fw-6 mb_16">Selecting Bank:</h5>
                <p className="text-body-1 text_dark">
                  Quest Management team of experts work closely with clients to
                  understand their unique financial needs and develop tailor
                  made solution to meet customer’s banking requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-testimonial style-5 tf-spacing-16 pb-0">
        <div className="heading-section text-center mb_63">
          <h3 className="text_white split-text effect-right">
            Banking in Dubai/UAE
          </h3>
        </div>
        <Swiper
          className="swiper sw-layout"
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
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
          {accountOpeningAssistance.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={`${item.id}-${index}`}>
              <div className="testimonial style-4">
                <div className="img-style-slider mb_40">
                  <img
                    className="lazyload"
                    data-src={item.imageSrc}
                    alt="testimonial"
                    src={item.imageSrc}
                    width={908}
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

export default BankAccountOpening;
