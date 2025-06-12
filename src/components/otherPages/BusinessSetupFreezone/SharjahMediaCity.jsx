import MetaComponent from "@/components/common/MetaComponent";
import OdometerComponent from "@/components/common/OdometerComponent";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { counterItems2, counterItems4 } from "@/data/facts";
import { testimonials } from "@/data/testimonials";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import EffectiveSolutions from "../EffectiveSolutions";
import {
  sharjahAirportFreezone,
  fujairahFZA,
  sharjahMediaCity,
} from "@/data/sliderData";
import { Autoplay } from "swiper/modules";

const metadata = {
  title: "Sharjah Media City",
  description: "Sharjah Media City",
};
const SharjahMediaCity = () => {
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
                      <h1 className="title split-text effect-right  mb-5">
                        Sharjah Media <br /> City (SHAMS)
                      </h1>
                      <div className="description">
                        <p
                          className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          Sharjah Media City (SHAMS), is located in the emirate
                          of Sharjah, the cultural capital of the UAE. Shams was
                          launched in January 2017, with a vision to be a
                          world-class hub for media and creativity in the
                          region. The Shams community fosters a vibrant
                          ecosystem for innovation to live, learn and co-create.
                          As a world-class free zone hub for innovation, Shams
                          sets the benchmark for service and support to those
                          wishing to set up and launch their business with
                          specialized facilities for the creative and media
                          industries. SHAMS’ mission is to make creative
                          entrepreneurship accessible to all aspiring startups,
                          SMEs and established companies striving to grow their
                          business both locally and globally. Shams is a dynamic
                          initiative that makes a strong connection with the
                          talented individuals it attracts. As a creative
                          forward-thinking community, it inspires, shapes and
                          celebrates its many successes, both individually and
                          as a group.
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
                      src="/images/qb/sharjahMediaCity.jpeg"
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
                    data-src="/images/qb/sharjahMediaCity2.avif"
                    alt="service"
                    src="/images/qb/sharjahMediaCity2.avif"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <h3 className="text_dark fw-6">SHAMS</h3>
                  </div>
                  <p className="text-body-1 text_mono-gray-7 mt_20 mb-4">
                    Shams offers smart innovative services, coupled with a
                    holistic community-centered approach. It projects great
                    value on localized content and actively encourage
                    entrepreneurial talent from within this thriving community.
                    SHAMS represent a safe and progressive environment for
                    company formation, offering foreign investors benefits, such
                    as zero corporate, import and export taxes, in addition to
                    other advantages. The UAE is well-recognized the world over
                    as a trading hub, boasting a large non-oil sector that
                    contributes to nearly 70% of the GDP – 45% of which is
                    contributed by Sharjah’s trading activities. Join the
                    thousands of entrepreneurs who have successfully completed
                    the business formation process and are now part of this
                    thriving community.
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

      <EffectiveSolutions />
      <div className="section-testimonial style-5 tf-spacing-16 pb-0">
        <div className="heading-section text-center mb_63">
          <h3 className="text_white split-text effect-right">
            Why Should You Setup Your Business in Shams Free Zone
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
          {sharjahMediaCity.map((testimonial, index) => (
            <SwiperSlide
              className="swiper-slide"
              key={`${testimonial.id}-${index}`}
            >
              <div className="testimonial style-4">
                <div className="img-style-slider mb_40">
                  <div style={{borderRadius:35, width:"max-content", overflow:"hidden"}}>
                  <img
                    className="lazyload"
                    data-src={testimonial.imageSrc}
                    alt="testimonial"
                    src={testimonial.imageSrc}
                    width={908}
                    height={652}
                    style={{borderRadius:35}}
                  />
                </div>
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

export default SharjahMediaCity;
