import React from "react";

import { counterItems3, counterItems5 } from "@/data/facts";
import OdometerComponent from "../common/OdometerComponent";
export default function About() {
  return (
    <>
      {/* .section-about */}
      <div className="text-with-img-2 tf-spacing-4">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="wrap-img"><br /><br /><br /><br /><br /><br /><br />
                <div className="shape-img-bg shape-border">
                  <img
                    alt="shape"
                    className="img-custom-anim-left wow"
                    src="/images/qb/head of hr.png"
                    width={692}
                    height={543}
                  />
                  <div className="img-bg-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 288 288"
                    >
                      <linearGradient
                        id="imagewave-1"
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
                      <path fill="url(#imagewave-1)" d="">
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
              <div className="content mb-0">
                <h5 className="title split-text split-lines-rotation-x">
                  <br />
                  BRAHMARUP GANGULY
                </h5>
                <p className="title split-text split-lines-rotation-x">
                  Head of Admin & HR

                </p>
                <p
                  className="description text-body-1 text_mono-gray-7 description-1 wow animate__fadeInUp animate__animated"
                  data-wow-delay="0s"
                >
                  Brahmarup Ganguly hails from the city of Calcutta, India. After Pursuing his MBA from “Christ College Institute of Management” Bangalore, he Joined the banking Industry in India. He worked with renowned banks like HDFC Bank and Axis Bank. Getting hands-on experience in Business Banking. Portfolio Management, Trade Finance and Corporate Banking for six years, he moved to Dubai. UAE in 2013. Brahmarup Ganguly has worked ith renowned banks like “First Gulf Bank” and “Mashreq Bank” in Dubai and gathered intrinsic knowledge in Business Banking. By virtue of his profession he developed a strong learning about the various protocols of the Authorities who incorporates companies in UAE. He also holds an extensive network of clients globally with a view to implement his knowledge to assist global clients to establish their company in UAE. Mr Brahmarup prides in solution delivery with minimum turn around time specially with various Govt Authorities like Ministry of Human Resource and Emiratisation(MOHRE), Development Economic Department (DED), Fedral Tax Authority and all the Free Zone authorities in UAE adding to the delight of the customers
                </p>
                {/* <p
                  className="description text-body-1 text_mono-gray-7 description-2 wow animate__fadeInUp animate__animated"
                  data-wow-delay="0s"
                >
                  By leveraging the latest technologies and industry best
                  practices, we empower our clients to streamline their
                  operations, reduce costs, and achieve sustainable business
                  growth. Our innovative software solutions are designed to
                  increase efficiency, improve productivity, and enhance overall
                  business performance.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.section-about */}
      {/* .section-about */}
      <div className="text-with-img-2 tf-spacing-5 pt-0">
        <div className="tf-container">
          <div className="row">
            <div className="col-xl-6">
              <div className="content">
                <h5 className="title split-text split-lines-rotation-x">
                  <br />
                  JALENDHAR SHARMA
                </h5>
                <p className="title split-text split-lines-rotation-x">
                    General Manager
                  Head of Business Development
                </p>
                <p
                  className="description text-body-1 text_mono-gray-7 description-1 wow animate__fadeInUp animate__animated"
                  data-wow-delay="0s"
                >
                  Jalendhar Sharma comes from a rich professional background wherein he was engaged in building strong client network over the past nine years. After completing his Graduation from the Calcutta University, Jalendhar joined HDFC Bank in India wherein developed strong skills to manage individual and corporate clients. He later moved to Max New York Life insurance company to manage investment portfolio of high net-worth clients. He was later hired by Kotak Mahindra Bank in India where he gathered extensive knowledge about the banking systems and protocols. His vast experience in India helped him make a strong foothold when he moved to Dubai, UAE in 2014. Working with one of the most prestigious Bank in UAE, Mashreq Bank to promote their Business Banking department , not only helped Mr Sharma to understand the global market, but also created a zeal in him to apply his knowledge towards entrepreneurship. With the zest of his ability he decided to form a company to assist his Global clients to setup their business and run it cost effectively from UAE. Mr Sharma believed in building a strong relationship with all Govt authorities like Ministry of Human Resource and Emiratisation (MOHRE), Department of Economic Development (DED), Federal Tax Authority (FTA), Dubai Courts, Security Industry Regulation Authority (SIRA) and designated freezones like JAFZA, DAFZA, DMCC, DWC, DIFC, ADGM, RAKEZ, SAIF Zone, Hamriyah Free Zone Authority, UAQFTZ etc. With his strong ability to convert the impossible, Mr Sharma prides in solution delivery with minimum turn around time prioritising Client’s satisfaction as his primary moto.
                </p>
                {/* <p
                  className="description text-body-1 text_mono-gray-7 description-2 wow animate__fadeInUp animate__animated"
                  data-wow-delay="0s"
                >
                  By leveraging the latest technologies and industry best
                  practices, we empower our clients to streamline their
                  operations, reduce costs, and achieve sustainable business
                  growth. Our innovative software solutions are designed to
                  increase efficiency, improve productivity, and enhance overall
                  business performance.
                </p> */}
              </div>
            </div>
            <div className="col-xl-6">
              <div className="wrap-img mb-0"><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="shape-img-bg shape-border">
                  <img
                    alt="shape"
                    className="img-custom-anim-right wow"
                    src="/images/qb/General Manager.png"
                    width={695}
                    height={568}
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
          <div className="row wrap-counter" style={{paddingTop:100}}>
          {counterItems3.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="counter-item style-default">
                <div className="sub-heading text_black text-uppercase mb_21">
                  {item.title}
                </div>
                <div className="counter-number mb_15">
                  <div className="odometer text_primary">
                    <OdometerComponent max={item.value} />
                  </div>
                  <span className="sub text_primary">{item.unit}</span>
                </div>
                <p className="sub-heading text_mono-gray-5">
                  {item.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < item.description.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}


