import React from 'react';
import Header1 from '../headers/Header1';
import Footer1 from '../footers/Footer1';
import MetaComponent from '@/components/common/MetaComponent';

const metadata = {
    title: "Company Liquidation || Advitex - Finance and Business Consulting Reactjs Template",
    description: "Advitex - Finance and Business Consulting Reactjs Template",
};

const CompanyLiquidation = () => {
    return (
        <>
            <MetaComponent meta={metadata} />

            {/* Header */}
            <div className="wrap-page-header">
                <Header1 />
            </div>

            {/* Section: Testimonial/Content */}
            <div className="section-testimonial style-1">
                <div className="tf-container">
                    <div className="row">
                        {/* Left Column */}
                        <div className="col-lg-6">
                            <div className="wrap">
                                <div className="heading-section">
                                    <h3 className="heading-title split-text split-lines-rotation-x">
                                        Business Setup in Sharjah
                                    </h3>
                                    <p className="text-body-1 text_mono-gray-7 mt_20">
                                        <b>Sharjah World Central</b>
                                    </p>
                                    <p className="text-body-1 text_mono-gray-7 mt_20">
                                        Sharjah Airport International Free Zone (SAIF Zone) is a dynamic free zone located
                                        adjacent to the Sharjah International Airport. Established in 1995, SAIF Zone offers a
                                        business-friendly environment and a range of benefits including 100% foreign ownership,
                                        zero personal and corporate income tax, and access to modern infrastructure.
                                    </p>
                                </div>
                                <div className="item mt-4">
                                    <div className="image_boxes style_three">
                                        <div className="video_box">
                                            <li className="icon-play"></li>
                                        </div>
                                        <a
                                            href="https://www.youtube.com/embed/-VK0axfge4A"
                                            className="video-link popup-video"
                                        >
                                            <img
                                                alt="item"
                                                src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/image-about-ls.jpg"
                                                width={715}
                                                height={330}
                                                className="icon-play"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-6">
                            <div className="images-wrapper">
                                <img
                                    src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/11/home-4-about-1.jpg"
                                    alt=""
                                    className="img-fluid"
                                    width={400}
                                    height={285}
                                />
                                <br /><br />
                                <img
                                    src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/about-hm-3-2.jpg"
                                    alt=""
                                    className="img-fluid"
                                    width={300}
                                    height={500}
                                />
                                <img
                                    src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/about-hm-3-4.jpg"
                                    alt=""
                                    className="img-fluid"
                                    width={300}
                                    height={500}
                                />
                                <p className="text-body-1 text_mono-gray-7 mt_20">
                                    <b>Since 1998, Operating in Sharjah:</b>
                                </p>
                                <p className="text-body-1 text_mono-gray-7 mt_20">
                                    SAIF specializes in licenses for general trading, commercial, service, and industrial purposes...
                                </p>
                                <br />
                                <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/icon-img-n-1.png" alt="" />
                                <b className="text-body-1 text_mono-gray-7 mt_20">Sharjah Multi Commodities Center (SMCC)</b>
                                <br /><br /><br />
                                <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/icon-img-n-2.png" alt="" />
                                <b className="text-body-1 text_mono-gray-7 mt_20">
                                    Sharjah Airport International Free Zone (SAIF Zone)
                                </b>
                                <p className="text-body-1 text_mono-gray-7 mt_20">
                                    One of the UAE's largest and longest-established free zones...
                                </p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            {/* Section: Solutions */}
            <div className="title_sections three center my-5 text-center">
                <div className="before_title text-uppercase text-muted mb-2 fs-6">Leading</div>
                <div className="main_title heading-title split-text fw-bold fs-3 mb-3">Effective Solutions</div>
                <p className="mx-auto fs-5 text-secondary" style={{ maxWidth: '700px' }}>
                    We work with your company to identify position requirements, implement recruitment programs,
                    and initiate employee assessments that maximize recruitment efforts.
                </p>
            </div>


            {/* Services: Part 1 */}
            <div className="container my-5">
                <div className="row g-4">
                    {/* Service Card 1 */}
                    <div className="col-md-4">
                        <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
                            <li className="mb-3">
                                <img
                                    src="https://questmanagement.ae/wp-content/uploads/2021/11/service-image-6.jpg.webp"
                                    alt="Talent Management"
                                    className="img-fluid rounded"
                                />
                            </li>
                            <li>
                                <h5 className="text-body-1 text_mono-gray-7 mt_20"><b>Talent Management</b></h5>
                            </li>
                            <li>
                                <p className="text-muted">Once your company has hired the best employees, the next step...</p>
                            </li>
                        </ul>
                    </div>

                    {/* Service Card 2 */}
                    <div className="col-md-4">
                        <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
                            <li className="mb-3">
                                <img
                                    src="https://questmanagement.ae/wp-content/uploads/2021/10/service-image-5.jpg.webp"
                                    alt="Health Care Benefits"
                                    className="img-fluid rounded"
                                />
                            </li>
                            <li>
                                <h5 className="text-body-1 text_mono-gray-7 mt_20"><b>Health Care Benefits</b></h5>
                            </li>
                            <li>
                                <p className="text-muted">Workplace conflict can become a costly and time-consuming process.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Service Card 3 */}
                    <div className="col-md-4">
                        <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
                            <li className="mb-3">
                                <img
                                    src="https://questmanagement.ae/wp-content/uploads/2021/10/service-image-4.jpg.webp"
                                    alt="Risk Management"
                                    className="img-fluid rounded"
                                />
                            </li>
                            <li>
                                <h5 className="text-body-1 text_mono-gray-7 mt_20"><b>Risk Management</b></h5>
                            </li>
                            <li>
                                <p className="text-muted">Mitigate workplace issues before they escalate.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Services: Part 2 with Icons */}
            <div className="container my-5">
                <div className="row g-4">
                    <div className="col-md-4">
                        <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
                            <li>
                                <i className="bi bi-headset display-4 text-primary mb-3"></i>
                            </li>
                            <li>
                                <h5 className="text-body-1 text_mono-gray-7 mt_20"><b>24/7 Customer Support</b></h5>
                            </li>
                            <li>
                                <p className="text-muted">
                                    The less water you use, the less runoff and wastewater that eventually end up in the ocean.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
                            <li>
                                <i className="bi bi-people-fill display-4 text-success mb-3"></i>
                            </li>
                            <li>
                                <h5 className="text-body-1 text_mono-gray-7 mt_20"><b>Experienced Team</b></h5>
                            </li>
                            <li>
                                <p className="text-muted">
                                    Our team brings years of consulting experience to deliver tailored solutions.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
                            <li>
                                <i className="bi bi-graph-up-arrow display-4 text-danger mb-3"></i>
                            </li>
                            <li>
                                <h5 className="text-body-1 text_mono-gray-7 mt_20"><b>Strategic Growth</b></h5>
                            </li>
                            <li>
                                <p className="text-muted">
                                    We help businesses identify strategic opportunities to grow effectively.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="title_sections three center my-5 text-center">
                <div className="before_title text-uppercase text-muted mb-2 fs-6">Leading</div>
                <div className="main_title heading-title split-text fw-bold fs-3 mb-3">Benefits to set up a business in Sharjah Airport International Free Zone</div>
                <p className="mx-auto fs-5 text-secondary" style={{ maxWidth: '700px' }}>
                    Strategic Location: SAIF Zone is located adjacent to the Sharjah International Airport, providing easy access to major global markets.


                </p>
            </div>

            <div className="container my-5">
                <div className="row g-4">
                    <div className="col-md-4">
                        <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
                            <li>
                                <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/service-ico-3.png" alt="" />
                            </li>
                            <li>
                                <h3>
                                    Identifiying the Needs
                                </h3>
                            </li>
                            <li>
                                <p className="text-muted">Business-friendly environment: SAIF Zone offers a business-friendly environment with simplified business registration procedures, 100% foreign ownership, and zero personal and corporate income tax.</p>
                            </li><br /><br /><br /><br />
                            <li>
                                <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/process-icon-im-1.png" alt="" />
                            </li>
                            <li>
                                <h3>
                                    Preparing  Job Description</h3>
                            </li>
                            <li>
                                <p className="text-muted">
                                    The less water you use, the less runoff and wastewater that eventually end up in the ocean.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
                            <li>
                                <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/11/video-box-img-1.jpg" alt="" height={700} width={500} />
                            </li>
                            <li>
                                <div className='ratio ratio-16x9 rounded shadow'>
                                    <iframe
                                        src="https://www.youtube.com/embed/-VK0axfge4A"
                                        title="YouTube video"
                                        allowfullscreen>
                                    </iframe>
                                </div>
                            </li>
                        </ul>
                    </div>



                    <div className="col-md-4">
                        <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
                            <li>
                                <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/service-ico-2.png" alt="" />
                            </li>
                            <li>
                                <h3>

                                    Find  Talented Candidate
                                </h3>
                            </li>
                            <li>
                                <p className="text-muted">
                                    Industry-specific benefits: SAIF Zone offers industry-specific benefits, including dedicated business centers and support for startups.</p>
                            </li><br /><br /><br /><br />
                            <li>
                                <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/process-icon-im-2.png" alt="" />
                            </li>
                            <li>
                                <h3>

                                    Screening & Shortlisting</h3>
                            </li>
                            <li>
                                <p className="text-muted">

                                    Cost-effective: The cost of setting up a business in SAIF Zone is relatively low compared to other free zones in the UAE, making it an attractive option for entrepreneurs and investors.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="title_sections three center my-5 text-center">
                <div className="before_title text-uppercase text-muted mb-2 fs-6">The Steps of
                </div>
                <div className="main_title heading-title split-text fw-bold fs-3 mb-3">Recruitment Process
                </div>
                <p className="mx-auto fs-5 text-secondary" style={{ maxWidth: '700px' }}>
                    Keep rising employee health care costs down. An employer's total benefit costs can be as much as 40 percent of the company's operating budget.




                </p>
            </div>

            <div className="container my-5">
                <div className="row g-4">
                    <div className="col-md-3">
                        <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
                            <li>
                                <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/service-ico-2.png" alt="" />
                            </li>
                            <li>
                                <h6>

                                    Find  Talented Candidate
                                </h6>
                            </li>
                            <li>
                                <p className="text-muted">
                                    Industry-specific benefits: SAIF Zone offers industry-specific benefits, including dedicated business centers and support for startups.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
                            <li>
                                <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/process-icon-im-2.png" alt="" />
                            </li>

                            <li>
                                <h6>

                                    Screening & Shortlisting</h6>
                            </li>
                            <li>
                                <p className="text-muted">

                                    Cost-effective: The cost of setting up a business in SAIF Zone is relatively low compared to other free zones in the UAE, making it an attractive option for entrepreneurs and investors.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
                            <li>
                                <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/process-icon-im-1.png" alt="" />
                            </li>
                            <li>
                                <h6>
                                    Preparing  Job Description</h6>
                            </li>
                            <li>
                                <p className="text-muted">
                                    The less water you use, the less runoff and wastewater that eventually end up in the ocean.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled border rounded p-3 h-100 shadow-sm text-center">
                            <li>
                                <img src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/service-ico-3.png" alt="" />
                            </li>
                            <li>
                                <h6>
                                    Identifiying the Needs
                                </h6>
                            </li>
                            <li>
                                <p className="text-muted">Business-friendly environment: SAIF Zone offers a business-friendly environment with simplified business registration procedures, 100% foreign ownership, and zero personal and corporate income tax.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Footer */}
            <Footer1 />
        </>
    );
};

export default CompanyLiquidation;
