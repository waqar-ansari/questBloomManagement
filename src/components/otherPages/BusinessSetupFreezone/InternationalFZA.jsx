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
import { internationalFZA } from "@/data/sliderData";
import { Autoplay } from "swiper/modules";

const metadata = {
  title: "International Free Zone Authority",
  description: "International Free Zone Authority",
};
const InternationalFZA = () => {
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
                        International Free Zone <br /> Authority (IFZA)
                      </h1>
                      <div className="description">
                        <p
                          className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          The International Free Zone Authority (IFZA) is a
                          rapidly growing free zone located in Dubai, UAE,
                          offering strategic advantages for businesses looking
                          to establish a strong presence in the region. Known
                          for its flexible business setup options and
                          investor-friendly policies, IFZA provides tailored
                          licensing solutions for a wide range of industries,
                          including consultancy, trading, and service sectors.
                        </p>
                        <p
                          className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          Businesses in IFZA benefit from 100% foreign
                          ownership, full repatriation of profits and capital,
                          zero corporate and income taxes, and streamlined
                          registration processes. The free zone also features
                          modern infrastructure, customizable office solutions,
                          and efficient support services designed to cater to
                          startups, SMEs, and international companies alike.
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
                      src="/images/qb/ifzaFreezone.png"
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
                    data-src="/images/qb/ifzaFreezone2.webp"
                    alt="service"
                    src="/images/qb/ifzaFreezone2.webp"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <h3 className="text_dark fw-6">IFZA</h3>
                  </div>
                  <p className="text-body-1 text_mono-gray-7 mt_20 mb-4">
                    IFZA Free Zone has quickly emerged as a leading choice for
                    entrepreneurs and international businesses seeking to
                    establish a presence in the UAE, thanks to its strategic
                    Dubai location, investor-friendly setup, and global
                    connectivity. The free zone offers an efficient registration
                    process and access to a wide network of professional service
                    providers, making business formation seamless and
                    hassle-free.
                  </p>
                  <p className="text-body-1 text_mono-gray-7 mt_20 mb-4">
                    Overall, IFZA presents a highly cost-effective and flexible
                    environment for businesses of all sizes, with scalable
                    office solutions, modern infrastructure, and supportive
                    regulations—creating ideal conditions for long-term growth
                    and regional expansion.
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
            Why Should you Setup your Business in International Free Zone
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
          {internationalFZA.map((testimonial, index) => (
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

export default InternationalFZA;
