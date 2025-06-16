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
import { sharjahAirportFreezone, fujairahFZA } from "@/data/sliderData";
import { Autoplay } from "swiper/modules";

const metadata = {
  title: "Fujairah Free Zone Authority",
  description: "Fujairah Free Zone Authority",
};
const FujairahFZA = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header1 />

        <div className="section-process style-1 tf-spacing-5 pb-0">
          <div className="tf-container">
            <div className="wrap border-0 pb-0">
              <div className="row align-items-end">
                <div className="col-xl-6 my-auto">
                  <div className="content">
                    <div className="heading">
                      <h1 className="title split-text effect-right  mb-5">
                        Fujairah Free Zone
                        <br /> Authority (FFZA)
                      </h1>
                      <div className="description">
                        <p
                          className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          Fujairah Free Zone Authority (FFZA) is a rapidly
                          growing business hub located in the Emirate of
                          Fujairah, which is situated on the east coast of the
                          United Arab Emirates. It is one of the most successful
                          and fast-growing free zones in the UAE, offering a
                          wide range of business opportunities to investors and
                          entrepreneurs.The Fujairah Free Zone Authority is
                          strategically located near major shipping routes,
                          providing easy access to markets in Asia, Europe, and
                          Africa. The free zone offers a variety of business
                          activities, including trading, manufacturing,
                          logistics, and services. Investors can take advantage
                          of tax exemptions, 100% foreign ownership, and a
                          simplified business setup process. FFZA is home to
                          more than 2,500 companies from different industries,
                          such as healthcare, food and beverage, construction,
                          and technology. It offers world-class infrastructure
                          and facilities, including warehouses, offices, and
                          industrial units, which are equipped with the latest
                          technology.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div
                    className="shape-img-bg shape-border style-2 scroll-tranform"
                    data-distance="6%"
                  >
                    <img
                      alt=""
                      className="img-custom-anim-left wow"
                      src="/images/qb/fujairahFZA.jpg"
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
            <div className="pt_90">
              <div className="box-service style-1">
                <div className="img-style effect-item effect-left effect-2">
                  <img
                    className="lazyload"
                    data-src="/images/qb/fujairahFZA2.jpg"
                    alt="service"
                    src="/images/qb/fujairahFZA2.jpg"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <h3 className="text_dark fw-6">FFZA</h3>
                  </div>
                  <p className="text-body-1 text_mono-gray-7 mt_20 mb-4">
                    The free zone is known for its excellent customer service,
                    making it easier for investors to set up and operate their
                    businesses. Additionally, it provides support services such
                    as legal and accounting services, banking facilities, and
                    visa processing services.Overall, Fujairah Free Zone is an
                    ideal destination for investors who are looking to establish
                    their businesses in the UAE. With its strategic location,
                    flexible business setup process, and world-class
                    infrastructure, the free zone offers a conducive environment
                    for growth and success. Partnering with Quest Management can
                    help entrepreneurs and investors take advantage of the
                    numerous benefits of setting up a business in FFZA. Quest
                    Management can provide a range of services including company
                    registration, licensing, visa processing, and ongoing
                    business support to help ensure a successful business setup
                    in the UAE.
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
      <div className="section-testimonial style-5 tf-spacing-16 pb-0 pt_90">
        <div className="heading-section text-center mb_63">
          <h3 className="text_white split-text effect-right">
            Why should you choose to Setup Your Business in Fujairah Free Zone?
          </h3>
        </div>
        <Swiper
          className="swiper sw-layout mb-0"
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
          {fujairahFZA.map((testimonial, index) => (
            <SwiperSlide
              className="swiper-slide"
              key={`${testimonial.id}-${index}`}
              style={{paddingTop:50 }}
            >
              <div className="testimonial style-4">
                <div className="img-style-slider mb_40">
                  <div style={{borderRadius:35, width:"auto", overflow:"hidden"}}>
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

export default FujairahFZA;
