import React from "react";

import { testimonials3 } from "@/data/testimonials";
export default function Testimonials() {
  return (
    <div className="section-testimonial style-1 pt_90">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="wrap pt-0">
              {/* <div className="heading-section">
                <h2 className="heading-title split-text split-lines-rotation-x">
                  About
                </h2>
               
              </div> */}
               {/* <p
                  className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
                  data-wow-delay="0s"
                >
                  <b>Quest Management was established in</b>
                </p> */}
                <p
                  className="text-body-1 text_mono-gray-7 mt-2 wow animate__fadeInUp animate__animated"
                  data-wow-delay="0s"
                  style={{textAlign:"justify"}}
                >
                Quest Management was established in Feb 2016 saw the launch of Quest management a one stop solution for obtaining a proper and simple Business Registration & Banking Assistance in UAE, Quest is supported with highly qualified group of individuals who’s banking experience are unparalleled. We are one of the leading business setup and advisory firm primarily focusing on client satisfaction, our success rate is a testimony to our reputation as the most successful business consultant in the UAE. To establish your business in Dubai, contact us and we will provide you with all necessary support.
                </p>
                 <p
              className="text-body-1 text_mono-gray-7 mt_20 mt-5 wow animate__fadeInUp animate__animated"
              data-wow-delay="0s"
            >
              <b>Expertise : </b>
            </p>
            <p
              className="text-body-1 text_mono-gray-7 mt-2 wow animate__fadeInUp animate__animated"
              data-wow-delay="0s"
            >

              We are a team of highly skilled professionals who are specialized in providing holistic support and services towards setting up your business and Corporate Banking advisory service in the UAE . We are always ready to walk the extra mile to cater to all your business requisites. Our customer-centric approach makes us more accessible to our global clientele.
              We are your single point of contact for integrated Business Solutions and all kind of Business Support in UAE.
              We have a competent team of core professionals who are experts in banking advisory services, Business Setup in Mainland & Free Zone , UAE Visa , Immigration assistance and cost-effective Annual Business Support Packages.
            </p>
            <p
              className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
              data-wow-delay="0s"
            >
              <b>Client Satisfaction : </b>
            </p>
            <p
              className="text-body-1 text_mono-gray-7 mt-2 wow animate__fadeInUp animate__animated"
              data-wow-delay="0s"
            >


              Quest Management's commitment to provide quality services and meeting the needs of our clients.We take pride in establishing strong and enduring relationships with our clients and in going beyond the usual scope of work to ensure that all their needs are met. Whatever the complexity of the situation faced by our clients, we aim to provide them with simple, practical yet innovative solutions.
            </p>
            <p
              className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
              data-wow-delay="0s"
            >
              <b>Professional Individuals
                : </b>
            </p>
            <p
              className="text-body-1 text_mono-gray-7 mt-2 wow animate__fadeInUp animate__animated"
              data-wow-delay="0s"
            >


              We are a team of highly skilled professionals who are specialized in providing holistic support and services towards setting up your business and Corporate Banking advisory service in the UAE. We are always ready to walk the extra mile to cater to all your business requisites. Our customer-centric approach makes us more accessible to our global clientele. We are your single point of contact for integrated Business Solutions and all kind of Business Support in UAE.
            </p>
             
            </div>
          </div>
          <div className="col-lg-6 my-auto">
             <div className="item">
                <img
                  alt="item"
                  src="/images/qb/group.webp"
                  width={1200}
                  height={330}
                />
              </div>
           
          </div>

        </div>
      </div>
    </div>
  );
}