import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const services = [
  {
    title: (
      <>
        Business Setup <br /> - Dubai Mainland
      </>
    ),
    imgSrc: "/images//qb/dubaiMainland.svg  ",
    description:
      "Expert assistance for hassle-free Dubai mainland business setup, licensing, and complete legal compliance.",
    delay: "0s",
  },
  {
    title: (
      <>
        Business Setup
        <br />
        - Freezone
      </>
    ),
    imgSrc: "/images/qb/dubaiFreezone.svg",
    description:
      "Seamless Freezone business setup services in Dubai, including licensing, documentation, and office space support.",
    delay: ".15s",
  },
  {
    title: (
      <>
        Banking 
        <br />
        Assistance
      </>
    ),
    imgSrc: "/images/qb/bankingServices.svg",
    description:
      "Expert banking assistance for smooth account opening, compliance, and financial setup in Dubai.",
    delay: ".25s",
  },
  {
    title: (
      <>
        Other <br /> Services
      </>
    ),
    imgSrc: "/images/qb/otherServices.svg",
    description:
      "Comprehensive support including VAT registration, PRO services, legal documentation, and office setup solutions.",
    delay: ".35s",
  },
];

export default function Services() {
  return (
    <div className="section section-service style-1 bg-sub-color tf-spacing-16">
      <div className="tf-container">
        <div className="heading-section d-flex justify-content-between flex-wrap-md gap_12 align-items-end mb_112">
          <div className="left">
            <h2 className="heading-title split-text effect-right">
              Tailored Solutions For Your Growth
            </h2>
            <p
              className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
              data-wow-delay="0s"
            >
              With custom services, we empower the development, provide support
              from your unique vision.
            </p>
          </div>
          <Link to={`/services`} className="tf-btn btn-primary2">
            <span>View Services</span>
            <span className="bg-effect" />
          </Link>
        </div>
        <Swiper
          className="swiper tf-sw-mobile bg_1 swiper-active-576"
          data-screen={576}
          spaceBetween={15}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd16",
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide wow animate__fadeInRight animate__animated"
              data-wow-delay={service.delay}
            >
              <div className="tf-box-icon style-1 hover-border">
                <h5 className="mb_53 title">
                  <a href="#" className="link hover-line-text line-clamp-2">
                    {service.title}
                  </a>
                </h5>
                <div className="icon">
                  <img
                    alt="icon"
                    src={service.imgSrc}
                    width={160}
                    height={160}
                  />
                </div>
                <p className="text-body-1 text_mono-gray-7">
                  {service.description}
                </p>
              </div>
            </SwiperSlide>
          ))}

          <div className="sw-dots style-default spd16 sw-pagination-mb mt_20 justify-content-center d-flex d-md-none" />
        </Swiper>
        <div className="swiper tf-sw-mobile bg_1 swiper-inActive-576">
          <div className="swiper-wrapper tf-grid-layout-sm xl-col-4 sm-col-2 gap_24">
            {services.map((service, index) => (
              <div
                key={index}
                className="swiper-slide wow animate__fadeInRight animate__animated"
                data-wow-delay={service.delay}
              >
                <div className="tf-box-icon style-1 hover-border">
                  <h5 className="mb_53 title">
                    <a href="#" className="link hover-line-text line-clamp-2">
                      {service.title}
                    </a>
                  </h5>
                  <div className="icon">
                    <img
                      alt="icon"
                      src={service.imgSrc}
                      width={160}
                      height={160}
                    />
                  </div>
                  <p className="text-body-1 text_mono-gray-7">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="sw-dots style-default sw-pagination-mb mt_20 justify-content-center d-flex d-md-none" />
        </div>
      </div>
    </div>
  );
}
