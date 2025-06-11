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
import { ajmanFZA } from "@/data/sliderData";
import { Autoplay } from "swiper/modules";

const metadata = {
  title: "Ajman Free Zone Authority",
  description: "Ajman Free Zone Authority",
};
const AjmanFZA = () => {
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
                        Ajman Free Zone <br /> Authority (AFZA)
                      </h1>
                      <div className="description">
                        <p
                          className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          Ajman Free Zone Authority (AFZA) is a government-owned
                          entity that was established in 1988 to promote
                          business opportunities in the United Arab Emirates
                          (UAE). It is located in the Emirate of Ajman and
                          provides a variety of business setup options for local
                          and international companies looking to operate in the
                          region.AFZA offers a range of facilities and services
                          to its clients, including commercial office space,
                          warehouses, land plots, and virtual offices. The free
                          zone also provides various administrative and support
                          services, such as company registration, licensing,
                          visa processing, and legal assistance.One of the key
                          advantages of setting up a company in AFZA is the
                          favorable business environment, which includes 100%
                          foreign ownership, no corporate or personal income
                          tax, and no restrictions on the repatriation of
                          profits. The free zone also has a streamlined and
                          efficient company registration process, which can be
                          completed within a few days.AFZA caters to a wide
                          range of industries, including trading, manufacturing,
                          services, and logistics. It has established itself as
                          a hub for small and medium-sized enterprises (SMEs)
                          and offers attractive incentives for startups and
                          entrepreneurs.Overall, AFZA is an attractive
                          destination for companies looking to establish a
                          presence in the UAE. Its strategic location, favorable
                          business environment, and comprehensive range of
                          services make it a popular choice for local and
                          international businesses alike.
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
                      src="/images/qb/ajmanFZA2.webp"
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
                    data-src="/images/qb/ajmanFZA.jpg"
                    alt="service"
                    src="/images/qb/ajmanFZA.jpg"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <h3 className="text_dark fw-6">AFZA</h3>
                  </div>
                  <p className="text-body-1 text_mono-gray-7 mt_20 mb-4">
                    Ajman Free Zone Authority (AFZA) offers a strategic location
                    with easy access to both the Sharjah and Dubai airports and
                    seaports, making it an attractive hub for small to
                    medium-sized enterprises across various sectors. Known for
                    its affordable setup costs and investor-friendly policies,
                    AFZA provides a supportive environment for startups and
                    established businesses alike. Partnering with Quest
                    Management Business Setup Services LLC can help
                    entrepreneurs and investors navigate the setup process with
                    ease. Quest Management offers end-to-end services including
                    company formation, license acquisition, visa processing, and
                    business support to ensure a hassle-free establishment
                    within AFZA.
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
            Why should you choose to Setup Your Business in Ajman Free Zone
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
          {ajmanFZA.map((testimonial, index) => (
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

export default AjmanFZA;
