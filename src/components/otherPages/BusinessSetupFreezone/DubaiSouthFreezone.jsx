import MetaComponent from "@/components/common/MetaComponent";
import OdometerComponent from "@/components/common/OdometerComponent";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { dubaiSouthFreeZone } from "@/data/sliderData";
import { counterItems2, counterItems4 } from "@/data/facts";
import { testimonials } from "@/data/testimonials";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import EffectiveSolutions from "../EffectiveSolutions";

const metadata = {
  title: "Dubai South Freezone",
  description: "Dubai South Freezone",
};
const DubaiSouthFreezone = () => {
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
                      <h1 className="title split-text effect-right mb-5">
                        Dubai South Free Zone
                      </h1>
                      <div className="description">
                        <p
                          className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          Dubai South (formerly known as Dubai World Central) is
                          a rapidly growing free zone located in the southern
                          part of Dubai. Dubai South offers a range of benefits
                          to entrepreneurs and investors looking to establish
                          their businesses in the region.Dubai South provides a
                          business-friendly environment, with streamlined
                          business registration processes, simplified
                          import/export procedures, and 100% foreign ownership.
                          The free zone also offers access to world-class
                          infrastructure, including modern office buildings,
                          logistics facilities, and an international airport.
                        </p>
                        <p
                          className="text-body-1 text_mono-gray-7 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          Dubai South is a strategic location for businesses
                          operating in logistics, aviation, and other
                          industries, offering access to major global markets.
                          The free zone also provides industry-specific
                          benefits, including the Aviation District, which
                          caters to businesses operating in the aviation
                          industry.
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
                      src="/images/qb/dubaiSouthFreezone.jpg"
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

      {/* <div style={{ marginTop: 100 }}>
        <div className={`heading-section text-center`}>
          <h2 className="section-faqs style-1 pt-0">
            Why business setup in Dubai?
          </h2>

          <p
            className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
            data-wow-delay="0s"
          >
            The UAE provides numerous possibilities for corporate growth because
            of its favorable business climate, <br /> cutting-edge
            infrastructure, and prime location as a commercial hub. Start your
            business journey in Dubai right <br />
            away to enjoy all that the city has to offer. Start your business in
            Dubai RIGHT NOW!
          </p>
        </div>
      </div> */}

      <div className="tf-container">
        <div className="wrap">
          <div className="row align-items-end">
            <div className="pt_90">
              <div className="box-service style-1">
                <div className="img-style effect-item effect-left effect-2">
                  <img
                    className="lazyload"
                    data-src="/images/qb/dubaiWorldCentral.jpg"
                    alt="service"
                    src="/images/qb/dubaiWorldCentral.jpg"
                    width={657}
                    height={534}
                  />
                </div>
                <div className="content">
                  <div className="heading mb_25 effect-item effect-right effect-2">
                    <h3 className="text_dark fw-6">Dubai World Central</h3>
                  </div>
                  <p className="text-body-1 text_mono-gray-7 mt_20 mb-4">
                    Dubai South is creating a vibrant society to invest, live
                    and work within a sustainable, healthy and happy
                    environment. As an important function of the regulatory
                    authority Dubai Aviation City Corporation (DACC), the Free
                    Zone Management fosters ingenuity and ease of business set
                    up and operations by providing all types of services such as
                    visas issuance, NOC letters, access cards, and work permits
                    that would assist business owners to set up and run their
                    businesses in a seamless and simple way as possible. As part
                    of Dubai Aviation City Corporation ( Dubai South regulatory
                    body ) pursuit of excellence and its mission to empower
                    businesses , the free-zone management offers a full array of
                    administrative and virtual services to individuals ,
                    business owners and investors to make day-to- day business
                    operations smoother and easier while focusing on growing
                    their business . Covering Free Zone, staff and family
                    sponsorship visas, permits, NOC letters and access cards,
                    among others.
                  </p>
                  {/* <ul className="list effect-item effect-right effect-3">
                    <li className="text-body-1 text_dark">
                      Instant Trade Name Approval & Initial Approval.
                    </li>
                    <li className="text-body-1 text_dark">
                      Office Lease Agreement or EJARI.
                    </li>
                    <li className="text-body-1 text_dark">
                      Obtaining SIRA Approval for Industrial Activities.
                    </li>
                    <li className="text-body-1 text_dark">License Issuance.</li>
                    <li className="text-body-1 text_dark">
                      Your queries are answered and met within a short time.
                    </li>
                    <li className="text-body-1 text_dark">
                      Collaboration with various Govt/Semi Govt agencies.
                    </li>
                    <li className="text-body-1 text_dark">
                      Affordable Charges.
                    </li>
                    <li className="text-body-1 text_dark">
                      Tailor made packages.
                    </li>
                    <li className="text-body-1 text_dark">
                      Highly experienced Professional.
                    </li>
                  </ul> */}

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
            Why Should You to Setup Your Business in Dubai South Free Zone ?
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
          {dubaiSouthFreeZone.map((item, index) => (
            <SwiperSlide
              className="swiper-slide"
              key={`${item.id}-${index}`}
              style={{paddingTop:50 }}
            >
              <div className="testimonial style-4">
                <div className="img-style-slider mb_40">
               
                  <div style={{borderRadius:35, width:"auto", overflow:"hidden"}}>
                    <img
                      className="lazyload"
                      data-src={item.imageSrc}
                      alt="testimonial"
                      src={item.imageSrc}
                      width={908}
                      height={652}

                    />
                 </div>
                 
                </div>
                <div className="content">
                  <div className="d-flex flex-column">
                    <h2 className="text_white mb-3">{item.heading}</h2>
                    <div className="left">
                      <p className="text-body-2 text_white mb_12">
                        {item.quote}
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

export default DubaiSouthFreezone;
