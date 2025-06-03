// import React from 'react'
import Header1 from '../headers/Header1'
import Footer1 from '../footers/Footer1'
// import MetaComponent from '../common/MetaComponent'
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
// import Contact from './Contact';
const metadata = {
    title:
        "Company Liquidation || Advitex - Finance and Business Consulting Reactjs Template",
    description: "Advitex - Finance and Business Consulting Reactjs Template",
};
const CompanyLiquidation = () => {
    return (
        <>
            <MetaComponent meta={metadata} />
            <div className="wrap-page-header">
                <Header1 />
            </div>
            <div className="section-testimonial style-1">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="wrap">
                                <div className="heading-section">
                                    <h3 className="heading-title split-text split-lines-rotation-x">
                                        Business Setup in Sharjah
                                    </h3>
                                    <p
                                        className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
                                        data-wow-delay="0s"
                                    >
                                        <b>Sharjah World Central</b>
                                    </p>
                                    <p
                                        className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
                                        data-wow-delay="0s"
                                    >
                                        Sharjah Airport International Free Zone (SAIF Zone) is a dynamic free zone located adjacent to the Sharjah International Airport. Established in 1995, SAIF Zone offers a business-friendly environment and a range of benefits to entrepreneurs and investors looking to establish their businesses in the region. SAIF Zone provides a range of business services, including simplified business registration procedures, 100% foreign ownership, and zero personal and corporate income tax. The free zone also offers access to world-class infrastructure, including modern office buildings, warehouses, and logistics facilities. SAIF Zone is a strategic location for businesses operating in manufacturing, trading, and related industries, offering easy access to major global markets.
                                    </p><br />
                                </div>
                                <div className="item">
                                    <div className='image_boxes style_three '>
                                        <div className='video_box'>

                                            <li className='icon-play'></li>

                                        </div>
                                        <a href="https://www.youtube.com/embed/-VK0axfge4A" className="video-link popup-video ">
                                            <img
                                                alt="item"
                                                src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/image-about-ls.jpg"
                                                width={715}
                                                height={330}
                                                className='icon-play'
                                            />
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/11/home-4-about-1.jpg" alt="" className='img-fluid ls-is-cached lazyloaded' width={400}
                                height={285} /> <br /><br />
                            <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/about-hm-3-2.jpg" alt="" className='img-fluid one_img ls-is-cached lazyloaded' width={300}
                                height={500} />
                            <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/about-hm-3-4.jpg" alt="" className='img-fluid one_img ls-is-cached lazyloaded' width={300}
                                height={500} />
                            <p
                                className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
                                data-wow-delay="0s"
                            >
                                <b>Since 1998,
                                    Operating in Sharjah : </b>
                            </p>
                            <p
                                className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
                                data-wow-delay="0s"
                            >

                                SAIF specializes in licenses for general trading, commercial, service, and industrial purposes. Foreign investments and initiatives are attracted by efficiency and low-cost operations. Its ideal location simplifies transportation and logistics. Warehouses, storage facilities, container parking, bunkers, and worker housing are all easily available for the establishment of a firm.
                            </p><br />
                            <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/icon-img-n-1.png" alt="" />

                            <b className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated">
                                Sharjah Multi Commodities Center (SMCC) </b><br /><br /><br />
                            <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/icon-img-n-2.png" alt="" />

                            <b className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated">

                                Sharjah Airport International Free Zone (SAIF Zone)</b>
                            <p
                                className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
                                data-wow-delay="0s"
                            >


                                One of the UAE's largest and longest-established free zones is the Sharjah Airport International Free Zone (SAIF Zone). SAIF, which is in Sharjah, gives investors and entrepreneurs who want to start businesses there a lot of advantages.

                                Businesses in the manufacturing, trading, and related industries can get to major global markets from SAIF, a strategic location. The free zone likewise gives industry-explicit advantages, including the SAIF One entry which offers a scope of administrations and backing for individuals.
                            </p><br />

                        </div>

                    </div>
                </div>
            </div>
            <div>
                <ul className="info d-grid gap_11">
                    <li>
                        {/* <h6 className="text_primary">Location</h6> */}
                        <p className="text-body-2"><img src="https://questmanagement.ae/wp-content/uploads/2021/11/service-image-6.jpg.webp" alt="" /></p>
                    </li>
                    <li>
                        {/* <h6 className="text_primary">Phone</h6> */}
                        {/* <p className="text-body-1">{item.phone}</p> */}
                        <a href="" className="text-body-1">Talent Management</a>
                    </li>
                    <li>
                        <h6 className="text_primary">Email</h6>
                        <a href="#" className="link text-body-1">
                            {/* {item.email} */}
                        </a>
                    </li>
                </ul>
            </div>
            <Footer1 />
        </>)
}

export default CompanyLiquidation