// import React from 'react';
// import Header1 from '../headers/Header1';
// import Footer1 from '../footers/Footer1';
// import MetaComponent from '@/components/common/MetaComponent';

// const metadata = {
//     title: "Company Liquidation || Advitex - Finance and Business Consulting Reactjs Template",
//     description: "Advitex - Finance and Business Consulting Reactjs Template",
// };

// const CompanyLiquidation = () => {
//     return (
//         <>
//             <MetaComponent meta={metadata} />

//             {/* Header */}
//             <div className="wrap-page-header">
//                 <Header1 />
//             </div>

//             {/* Section: Testimonial/Content */}
//             <div className="section-testimonial style-1">
//                 <div className="tf-container">
//                     <div className="row">
//                         {/* Left Column */}
//                         <div className="col-lg-6">
//                             <div className="wrap">
//                                 <div className="heading-section">
//                                     <h3 className="heading-title split-text split-lines-rotation-x">
//                                         Business Setup in Sharjah
//                                     </h3>
//                                     <p className="text-body-1 text_mono-gray-7 mt_20">
//                                         <b>Sharjah World Central</b>
//                                     </p>
//                                     <p className="text-body-1 text_mono-gray-7 mt_20">
//                                         Sharjah Airport International Free Zone (SAIF Zone) is a dynamic free zone located
//                                         adjacent to the Sharjah International Airport. Established in 1995, SAIF Zone offers a
//                                         business-friendly environment and a range of benefits including 100% foreign ownership,
//                                         zero personal and corporate income tax, and access to modern infrastructure.
//                                     </p>
//                                 </div>
//                                 <div className="item mt-4">
//                                     <div className="image_boxes style_three">
//                                         <div className="video_box">
//                                             <li className="icon-play"></li>
//                                         </div>
//                                         <a
//                                             href="https://www.youtube.com/embed/-VK0axfge4A"
//                                             className="video-link popup-video"
//                                         >
//                                             <img
//                                                 alt="item"
//                                                 src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/image-about-ls.jpg"
//                                                 width={715}
//                                                 height={330}
//                                                 className="icon-play"
//                                             />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Column */}
//                         <div className="col-lg-6">
//                             <div className="images-wrapper">
//                                 <img
//                                     src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/11/home-4-about-1.jpg"
//                                     alt=""
//                                     className="img-fluid"
//                                     width={400}
//                                     height={285}
//                                 />
//                                 <br /><br />
//                                 <img
//                                     src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/about-hm-3-2.jpg"
//                                     alt=""
//                                     className="img-fluid"
//                                     width={300}
//                                     height={500}
//                                 />
//                                 <img
//                                     src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/about-hm-3-4.jpg"
//                                     alt=""
//                                     className="img-fluid"
//                                     width={300}
//                                     height={500}
//                                 />
//                                 <p className="text-body-1 text_mono-gray-7 mt_20">
//                                     <b>Since 1998, Operating in Sharjah:</b>
//                                 </p>
//                                 <p className="text-body-1 text_mono-gray-7 mt_20">
//                                     SAIF specializes in licenses for general trading, commercial, service, and industrial purposes...
//                                 </p>
//                                 <br />
//                                 <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/icon-img-n-1.png" alt="" />
//                                 <b className="text-body-1 text_mono-gray-7 mt_20">Sharjah Multi Commodities Center (SMCC)</b>
//                                 <br /><br /><br />
//                                 <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/icon-img-n-2.png" alt="" />
//                                 <b className="text-body-1 text_mono-gray-7 mt_20">
//                                     Sharjah Airport International Free Zone (SAIF Zone)
//                                 </b>
//                                 <p className="text-body-1 text_mono-gray-7 mt_20">
//                                     One of the UAE's largest and longest-established free zones...
//                                 </p>
//                             </div>
//                         </div>



//                     </div>
//                 </div>
//             </div>
//             {/* Section: Solutions */}
//             <div className="title_sections three center my-5 text-center">
//                 <div className="before_title text-uppercase text-muted mb-2 fs-6">Leading</div>
//                 <div className="main_title heading-title split-text fw-bold fs-3 mb-3">Effective Solutions</div>
//                 <p className="mx-auto fs-5 text-secondary" style={{ maxWidth: '700px' }}>
//                     We work with your company to identify position requirements, implement recruitment programs,
//                     and initiate employee assessments that maximize recruitment efforts.
//                 </p>
//             </div>


//             {/* Services: Part 1 */}
//             <div className="container my-5">
//                 <div className="row g-4">
//                     {/* Service Card 1 */}
//                     <div className="col-md-4">
//                         <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                             <li className="mb-3">
//                                 <img
//                                     src="https://questmanagement.ae/wp-content/uploads/2021/11/service-image-6.jpg.webp"
//                                     alt="Talent Management"
//                                     className="img-fluid rounded"
//                                 />
//                             </li>
//                             <li>
//                                 <h5 className="text-body-1 text_mono-gray-7 mt_20"><b>Talent Management</b></h5>
//                             </li>
//                             <li>
//                                 <p className="text-muted">Once your company has hired the best employees, the next step...</p>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Service Card 2 */}
//                     <div className="col-md-4">
//                         <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                             <li className="mb-3">
//                                 <img
//                                     src="https://questmanagement.ae/wp-content/uploads/2021/10/service-image-5.jpg.webp"
//                                     alt="Health Care Benefits"
//                                     className="img-fluid rounded"
//                                 />
//                             </li>
//                             <li>
//                                 <h5 className="text-body-1 text_mono-gray-7 mt_20"><b>Health Care Benefits</b></h5>
//                             </li>
//                             <li>
//                                 <p className="text-muted">Workplace conflict can become a costly and time-consuming process.</p>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Service Card 3 */}
//                     <div className="col-md-4">
//                         <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                             <li className="mb-3">
//                                 <img
//                                     src="https://questmanagement.ae/wp-content/uploads/2021/10/service-image-4.jpg.webp"
//                                     alt="Risk Management"
//                                     className="img-fluid rounded"
//                                 />
//                             </li>
//                             <li>
//                                 <h5 className="text-body-1 text_mono-gray-7 mt_20"><b>Risk Management</b></h5>
//                             </li>
//                             <li>
//                                 <p className="text-muted">Mitigate workplace issues before they escalate.</p>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             {/* Services: Part 2 with Icons */}
//             <div className="container my-5">
//                 <div className="row g-4">
//                     <div className="col-md-4">
//                         <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                             <li>
//                                 <i className="bi bi-headset display-4 text-primary mb-3"></i>
//                             </li>
//                             <li>
//                                 <h5 className="text-body-1 text_mono-gray-7 mt_20"><b>24/7 Customer Support</b></h5>
//                             </li>
//                             <li>
//                                 <p className="text-muted">
//                                     The less water you use, the less runoff and wastewater that eventually end up in the ocean.
//                                 </p>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="col-md-4">
//                         <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                             <li>
//                                 <i className="bi bi-people-fill display-4 text-success mb-3"></i>
//                             </li>
//                             <li>
//                                 <h5 className="text-body-1 text_mono-gray-7 mt_20"><b>Experienced Team</b></h5>
//                             </li>
//                             <li>
//                                 <p className="text-muted">
//                                     Our team brings years of consulting experience to deliver tailored solutions.
//                                 </p>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="col-md-4">
//                         <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                             <li>
//                                 <i className="bi bi-graph-up-arrow display-4 text-danger mb-3"></i>
//                             </li>
//                             <li>
//                                 <h5 className="text-body-1 text_mono-gray-7 mt_20"><b>Strategic Growth</b></h5>
//                             </li>
//                             <li>
//                                 <p className="text-muted">
//                                     We help businesses identify strategic opportunities to grow effectively.
//                                 </p>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             <div className="title_sections three center my-5 text-center">
//                 <div className="before_title text-uppercase text-muted mb-2 fs-6">Leading</div>
//                 <div className="main_title heading-title split-text fw-bold fs-3 mb-3">Benefits to set up a business in Sharjah Airport International Free Zone</div>
//                 <p className="mx-auto fs-5 text-secondary" style={{ maxWidth: '700px' }}>
//                     Strategic Location: SAIF Zone is located adjacent to the Sharjah International Airport, providing easy access to major global markets.


//                 </p>
//             </div>

//             <div className="container my-5">
//                 <div className="row g-4">
//                     <div className="col-md-4">
//                         <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                             <li>
//                                 <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/service-ico-3.png" alt="" />
//                             </li>
//                             <li>
//                                 <h3>
//                                     Identifiying the Needs
//                                 </h3>
//                             </li>
//                             <li>
//                                 <p className="text-muted">Business-friendly environment: SAIF Zone offers a business-friendly environment with simplified business registration procedures, 100% foreign ownership, and zero personal and corporate income tax.</p>
//                             </li><br /><br /><br /><br />
//                             <li>
//                                 <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/process-icon-im-1.png" alt="" />
//                             </li>
//                             <li>
//                                 <h3>
//                                     Preparing  Job Description</h3>
//                             </li>
//                             <li>
//                                 <p className="text-muted">
//                                     The less water you use, the less runoff and wastewater that eventually end up in the ocean.
//                                 </p>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="col-md-4">
//                         <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                             <li>
//                                 <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/11/video-box-img-1.jpg" alt="" height={700} width={500} />
//                             </li>
//                             <li>
//                                 <div className='ratio ratio-16x9 rounded shadow'>
//                                     <iframe
//                                         src="https://www.youtube.com/embed/-VK0axfge4A"
//                                         title="YouTube video"
//                                         allowfullscreen>
//                                     </iframe>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>



//                     <div className="col-md-4">
//                         <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                             <li>
//                                 <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/service-ico-2.png" alt="" />
//                             </li>
//                             <li>
//                                 <h3>

//                                     Find  Talented Candidate
//                                 </h3>
//                             </li>
//                             <li>
//                                 <p className="text-muted">
//                                     Industry-specific benefits: SAIF Zone offers industry-specific benefits, including dedicated business centers and support for startups.</p>
//                             </li><br /><br /><br /><br />
//                             <li>
//                                 <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/process-icon-im-2.png" alt="" />
//                             </li>
//                             <li>
//                                 <h3>

//                                     Screening & Shortlisting</h3>
//                             </li>
//                             <li>
//                                 <p className="text-muted">

//                                     Cost-effective: The cost of setting up a business in SAIF Zone is relatively low compared to other free zones in the UAE, making it an attractive option for entrepreneurs and investors.
//                                 </p>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>


//             <div className="title_sections three center my-5 text-center">
//                 <div className="before_title text-uppercase text-muted mb-2 fs-6">The Steps of
//                 </div>
//                 <div className="main_title heading-title split-text fw-bold fs-3 mb-3">Recruitment Process
//                 </div>
//                 <p className="mx-auto fs-5 text-secondary" style={{ maxWidth: '700px' }}>
//                     Keep rising employee health care costs down. An employer's total benefit costs can be as much as 40 percent of the company's operating budget.




//                 </p>
//             </div>

//             <div className="container my-5">
//                 <div className="row g-4">
//                     <div className="col-md-3">
//                         <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                             <li>
//                                 <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/service-ico-2.png" alt="" />
//                             </li>
//                             <li>
//                                 <h6>

//                                     Find  Talented Candidate
//                                 </h6>
//                             </li>
//                             <li>
//                                 <p className="text-muted">
//                                     Industry-specific benefits: SAIF Zone offers industry-specific benefits, including dedicated business centers and support for startups.</p>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="col-md-3">
//                         <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                             <li>
//                                 <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/process-icon-im-2.png" alt="" />
//                             </li>

//                             <li>
//                                 <h6>

//                                     Screening & Shortlisting</h6>
//                             </li>
//                             <li>
//                                 <p className="text-muted">

//                                     Cost-effective: The cost of setting up a business in SAIF Zone is relatively low compared to other free zones in the UAE, making it an attractive option for entrepreneurs and investors.
//                                 </p>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="col-md-3">
//                         <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                             <li>
//                                 <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/process-icon-im-1.png" alt="" />
//                             </li>
//                             <li>
//                                 <h6>
//                                     Preparing  Job Description</h6>
//                             </li>
//                             <li>
//                                 <p className="text-muted">
//                                     The less water you use, the less runoff and wastewater that eventually end up in the ocean.
//                                 </p>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="col-md-3">
//                         <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
//                             <li>
//                                 <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/service-ico-3.png" alt="" />
//                             </li>
//                             <li>
//                                 <h6>
//                                     Identifiying the Needs
//                                 </h6>
//                             </li>
//                             <li>
//                                 <p className="text-muted">Business-friendly environment: SAIF Zone offers a business-friendly environment with simplified business registration procedures, 100% foreign ownership, and zero personal and corporate income tax.</p>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>


//             {/* Footer */}
//             <Footer1 />
//         </>
//     );
// };

// export default CompanyLiquidation;

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
//     title: "Dubai CompanyLiquidation",
//     description: "Dubai CompanyLiquidation",
// };
const metadata = {
  title:
    "Company Liquidation",
  description: "Company Liquidation",
};
const CompanyLiquidation = () => {
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
                                                Company Liquidation
                                            </h1>
                                            <br /><br />
                                            <h3>Business Setup in
                                                Sharjah</h3>
                                            <div className="description">
                                                <p
                                                    className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                                                    data-wow-delay="0s"
                                                >
                                                    Sharjah Airport International Free Zone (SAIF Zone) is a dynamic free zone
                                                    located adjacent to the Sharjah International Airport. Established in 1995,
                                                    SAIF Zone offers a business-friendly environment and a range of benefits
                                                    including 100% foreign ownership, zero personal and corporate income tax,
                                                    and access to modern infrastructure.
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
                                            src="/images/qb/CompanyLiquidation.jpg"
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
                                        data-src="/images/qb/CompanyLiquidation2.jpg"
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
                                <h5 className="text_dark fw-6 mb_16">Find Talented Candidate:</h5>
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
                                    Screening & Shortlisting:
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
                                <h5 className="text_dark fw-6 mb_16">Preparing Job Description:</h5>
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

export default CompanyLiquidation;

