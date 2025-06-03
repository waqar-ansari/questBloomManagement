import MetaComponent from "@/components/common/MetaComponent";
import OdometerComponent from "@/components/common/OdometerComponent";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { counterItems2, counterItems4 } from "@/data/facts";
import { dmccFreezone } from "@/data/sliderData";
import { testimonials } from "@/data/testimonials";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const metadata = {
  title: "DMCC Freezone",
  description: "DMCC Freezone",
};
const DmccFreezone = () => {
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
                      <h1 className="title split-text effect-right">
                        Dubai Multi Commodities<br/> Center (DMCC)
                      </h1>
                      <div className="description">
                        <p
                          className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                        DMCC was established in 2002 to enhance commodity trade flows in Dubai. DMCC is the preferred destination for trading of global commodities like Gold, Diamond, etc.DMCC provides a business-friendly environment, with streamlined business registration processes, simplified import/export procedures, and 100% foreign ownership. The free zone also offers access to world-class infrastructure, including modern office buildings, logistics facilities, and a dedicated commodities exchange. DMCC is a strategic location for businesses operating in commodities trade and related industries, offering access to major global markets. The free zone also provides industry-specific benefits, including the DMCC Free Zone member portal which offers a range of services and support for members.
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
                      src="/images/qb/dmcc.jpg"
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
                    data-src="/images/qb/dmcc2.jpg"
                    alt="service"
                    src="/images/qb/dmcc2.jpg"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <h3 className="text_dark fw-6">DMCC</h3>
                  </div>
                  <p className="text-body-1 text_mono-gray-7 mt_20 mb-4">
                   Dubai Multi Commodities Center (DMCC) is a free zone in Dubai dedicated to commodities trade and enterprise. DMCC offers a range of benefits to entrepreneurs and investors looking forward to establish their businesses in the region. Partnering with Quest Management Business Setup Services LLC can help entrepreneurs and investors take advantage of the numerous benefits of setting up a business in DMCC. Quest Management can provide a range of services including company registration, licensing, visa processing, and ongoing business support to help ensure a successful business setup in the UAE.
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

      <div
        className="bg-mono-gray-1"
        style={{ marginTop: 100, paddingTop: 100, paddingBottom: 100 }}
      >
        <div className="tf-container-2">
          <div className="heading-secetion text-center mb_61">
            <h1 className="heading-title text_dark fw-6 split-text effect-right">
              Effective Solutions
            </h1>
          </div>
          <p
            className="text-body-1 text_mono-gray-7 mb-4"
            style={{ marginBottom: 100 }}
          >
          We are a team of professionals who are specialized in providing holistic support and services towards setting up your business in UAE and abroad. We are always ready to walk the extra mile to cater to all your business requisites. Our customer-centric approach makes us more accessible to our global clientele.
          </p>
          <div className="tf-grid-layout lg-col-3">
            <div
              className="choice-item left wow animate__fadeInLeft animate__animated"
              data-wow-delay="0s"
            >
              <div className="heading">
                <h5 className="text_dark fw-6 mb_16">Choose Your Activity:</h5>
                <p className="text-body-1 text_dark">
                The First step to start a business in Dubai is to choose the correct business activity. In Dubai you have access to thousands of business activities and Quest Management Services can help you to analyze and choose the correct and most suitable Business Activity.
                </p>
              </div>
            </div>
            <div
              className="choice-item center wow animate__fadeInLeft animate__animated"
              data-wow-delay="0.2s"
            >
              <div className="heading">
                <h5 className="text_dark text_white fw-6 mb_16">
                  Choose Jurisdictions:
                </h5>
                <p className="text-body-1 text_dark text_white mb_32">
                 Our Business Setup Expert team ensures that you choose the most appropriate jurisdictions to ensures that your UAE Free Zone firm is successfully registered and that all UAE rules are followed. Examine the advantages among UAE Free Zones and helps you to create the appropriate company setup strategy.
                </p>
              </div>
            </div>
            <div
              className="choice-item right wow animate__fadeInLeft animate__animated"
              data-wow-delay="0.3s"
            >
              <div className="heading">
                <h5 className="text_dark fw-6 mb_16">Get Your License:</h5>
                <p className="text-body-1 text_dark">
                 Starting a business in Dubai can be difficult, but it doesn't have to be! There are several legal procedures, government documentation, and paperwork needed in establishing a business in Dubai. Don't be concerned if you are unfamiliar with all of the legal etiquette! That's where Quest Management Services can help you out and guide you through the process. Leave the legal stuff to us so you can concentrate on your core business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-testimonial style-5 tf-spacing-16 pb-0">
        <div className="heading-section text-center mb_63">
          <h3 className="text_white split-text effect-right">
           Benefits to set up business in DMCC Free Zone
          </h3>
        </div>
        <Swiper
          className="swiper sw-layout"
          loop
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
          {dmccFreezone.map((testimonial, index) => (
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

export default DmccFreezone;
