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
import { rasAlKhaimahFEZA } from "@/data/sliderData";
import { Autoplay } from "swiper/modules";

const metadata = {
  title: "Ras Al Khaimah Free Economic Zone Authority",
  description: "Ras Al Khaimah Free Economic Zone Authority",
};
const RasAlKhaimahFEZA = () => {
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
                        Ras Al Khaimah Free EZA
                      </h1>
                      <div className="description">
                        <p
                          className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          Ras Al Khaimah Free Economic Zone (RAKEZ) is one of
                          the most dynamic and fastest-growing free zones in the
                          UAE. Located in the northernmost emirate of the UAE,
                          RAKEZ offers a range of benefits to entrepreneurs and
                          investors looking to establish their businesses in the
                          region. RAKEZ provides a cost-effective and
                          business-friendly environment for entrepreneurs, with
                          100% foreign ownership, 0% corporate and personal
                          income tax, and simplified import/export procedures.
                          The free zone also offers access to world-class
                          infrastructure, modern office spaces, and logistics
                          facilities, as well as a skilled and diverse
                          workforce. RAKEZ supports a wide range of industries,
                          including manufacturing, trading, and logistics, among
                          others. The free zone also provides industry-specific
                          benefits, such as the RAK Maritime City Free Zone,
                          which caters to businesses operating in the maritime
                          industry. Quest Management can help streamline the
                          process of setting up your business in RAKEZ,
                          providing a range of services including company
                          registration, licensing, visa processing, and ongoing
                          business support. With Quest Management's expertise,
                          entrepreneurs and investors can take advantage of the
                          numerous benefits of RAKEZ and establish a successful
                          business in the UAE.
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
                      src="/images/qb/rasAlKhaimahFEZA.jpg"
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
                    data-src="/images/qb/rasAlKhaimahFEZA2.webp"
                    alt="service"
                    src="/images/qb/rasAlKhaimahFEZA2.webp"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <h3 className="text_dark fw-6">RAKEZ</h3>
                  </div>
                  <p className="text-body-1 text_mono-gray-7 mt_20 mb-4">
                    Ras Al Khaimah Economic Zone (RAKEZ) is a thriving business
                    hub that caters to startups, SMEs, and industrial
                    enterprises with a wide range of customizable solutions.
                    Strategically located in the northern emirate of Ras Al
                    Khaimah, RAKEZ offers competitive setup costs, modern
                    infrastructure, and access to international markets. Its
                    flexible licensing options and investor-friendly regulations
                    make it an attractive choice for businesses across various
                    sectors. Partnering with Quest Management Business Setup
                    Services LLC can help streamline the setup process in RAKEZ.
                    Quest Management offers expert services including company
                    formation, licensing, visa processing, and ongoing
                    operational support to ensure a successful and compliant
                    business launch in the UAE.
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
            Why Should You Choose to Setup Your Business in RAKEZ
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
          {rasAlKhaimahFEZA.map((testimonial, index) => (
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

export default RasAlKhaimahFEZA;
