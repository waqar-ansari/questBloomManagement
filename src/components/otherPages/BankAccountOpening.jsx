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
import { dubaiSouthFreeZone } from "@/data/sliderData";
import { counterItems2, counterItems4 } from "@/data/facts";
import { testimonials } from "@/data/testimonials";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// const metadata = {
//   title: "Dubai South Freezone",
//   description: "Dubai South Freezone",
// };
const metadata = {
  title:
    "Bank Account Opeing",
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
                      <h1 className="title split-text effect-right">
                       Bank Account Opening
                      </h1>
                      <div className="description">
                        <p
                          className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          Dubai South (formerly known as Dubai World Central) is
                          a rapidly growing free zone located in the southern
                          part of Dubai. Dubai South offers a range of benefits
                          to entrepreneurs and investors looking to establish
                          their businesses in the region.Dubai South provides a
                          business-friendly environment, with streamlined
                          business registration processes, simplified
                          import/export procedures, and 100% foreign ownership.
                          The free zone also offers access to world-class
                          infrastructure, including modern office buildings,
                          logistics facilities, and an international airport.
                        </p>
                        <p
                          className="text-body-1 text_mono-gray-7 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          Dubai South is a strategic location for businesses
                          operating in logistics, aviation, and other
                          industries, offering access to major global markets.
                          The free zone also provides industry-specific
                          benefits, including the Aviation District, which
                          caters to businesses operating in the aviation
                          industry.
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
                      src="/images/qb/dubaiSouthFreezone.jpg"
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
                    data-src="/images/qb/dubaiWorldCentral.jpg"
                    alt="service"
                    src="/images/qb/dubaiWorldCentral.jpg"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <h3 className="text_dark fw-6">Dubai World Central</h3>
                  </div>
                  <p className="text-body-1 text_mono-gray-7 mt_20 mb-4">
                    Dubai South is creating a vibrant society to invest, live
                    and work within a sustainable, healthy and happy
                    environment. As an important function of the regulatory
                    authority Dubai Aviation City Corporation (DACC), the Free
                    Zone Management fosters ingenuity and ease of business set
                    up and operations by providing all types of services such as
                    visas issuance, NOC letters, access cards, and work permits
                    that would assist business owners to set up and run their
                    businesses in a seamless and simple way as possible. As part
                    of Dubai Aviation City Corporation ( Dubai South regulatory
                    body ) pursuit of excellence and its mission to empower
                    businesses , the free-zone management offers a full array of
                    administrative and virtual services to individuals ,
                    business owners and investors to make day-to- day business
                    operations smoother and easier while focusing on growing
                    their business . Covering Free Zone, staff and family
                    sponsorship visas, permits, NOC letters and access cards,
                    among others.
                  </p>
                  {/* <ul className="list effect-item effect-right effect-3">
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
                  </ul> */}

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
                <h5 className="text_dark fw-6 mb_16">Choose Your Activity:</h5>
                <p className="text-body-1 text_dark">
                  The First step to start a business in Dubai is to choose the
                  correct business activity. In Dubai you have access to
                  thousands of business activities and Quest Management Services
                  can help you to analyze and choose the correct and most
                  suitable Business Activity.
                </p>
              </div>
            </div>
            <div
              className="choice-item center wow animate__fadeInLeft animate__animated"
              data-wow-delay="0.2s"
            >
              <div className="heading">
                <h5 className="text_dark text_white fw-6 mb_16">
                  Choose Jurisdictions:
                </h5>
                <p className="text-body-1 text_dark text_white mb_32">
                  Our Business Setup Expert team ensures that you choose the
                  most appropriate jurisdictions to ensures that your UAE Free
                  Zone firm is successfully registered and that all UAE rules
                  are followed. Examine the advantages among UAE Free Zones and
                  helps you to create the appropriate company setup strategy.
                </p>
              </div>
            </div>
            <div
              className="choice-item right wow animate__fadeInLeft animate__animated"
              data-wow-delay="0.3s"
            >
              <div className="heading">
                <h5 className="text_dark fw-6 mb_16">Get Your License:</h5>
                <p className="text-body-1 text_dark">
                  Starting a business in Dubai can be difficult, but it doesn't
                  have to be! There are several legal procedures, government
                  documentation, and paperwork needed in establishing a business
                  in Dubai. Don't be concerned if you are unfamiliar with all of
                  the legal etiquette! That's where Quest Management Services
                  can help you out and guide you through the process. Leave the
                  legal stuff to us so you can concentrate on your core
                  business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-testimonial style-5 tf-spacing-16 pb-0">
        <div className="heading-section text-center mb_63">
          <h3 className="text_white split-text effect-right">
            Why Should You to Setup Your Business in Dubai South Free Zone ?
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
          {dubaiSouthFreeZone.map((testimonial, index) => (
            <SwiperSlide
              className="swiper-slide"
              key={`${testimonial.id}-${index}`}
            >
              <div className="testimonial style-4">
                <div className="img-style-slider mb_40">
                  <img
                    className="lazyload"
                    data-src={testimonial.imageSrc}
                    alt="testimonial"
                    src={testimonial.imageSrc}
                    width={908}
                    height={652}
                  />
                </div>
                <div className="content">
                 <div className="d-flex flex-column">
                      <h2 className="text_white mb-3">{testimonial.heading}</h2>
                      <div className="left">
                        <p className="text-body-2 text_white mb_12">
                          {testimonial.quote}
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

