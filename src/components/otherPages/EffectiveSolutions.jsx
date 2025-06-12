import { blogArticles, effectiveSolutionsData } from "@/data/blogs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";

const EffectiveSolutions = () => {
  return (
    <>
    {/* <div
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
          We are a team of professionals who are specialized in providing
          holistic support and services towards setting up your business in UAE
          and abroad. We are always ready to walk the extra mile to cater to all
          your business requisites. Our customer-centric approach makes us more
          accessible to our global clientele.
        </p>
        <div className="tf-grid-layout lg-col-3">
          <div
            className="choice-item left wow animate__fadeInLeft animate__animated"
            data-wow-delay="0s"
          >
            <div className="heading">
              <h5 className="text_dark fw-6 mb_16">Choose Your Activity:</h5>
              <p className="text-body-1 text_dark">
                The First step to start a business in Dubai is to choose the
                correct business activity. In Dubai you have access to thousands
                of business activities and Quest Management Services can help
                you to analyze and choose the correct and most suitable Business
                Activity.
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
                Our Business Setup Expert team ensures that you choose the most
                appropriate jurisdictions to ensures that your UAE Free Zone
                firm is successfully registered and that all UAE rules are
                followed. Examine the advantages among UAE Free Zones and helps
                you to create the appropriate company setup strategy.
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
                Starting a business in Dubai can be difficult, but it doesn't
                have to be! There are several legal procedures, government
                documentation, and paperwork needed in establishing a business
                in Dubai. Don't be concerned if you are unfamiliar with all of
                the legal etiquette! That's where Quest Management Services can
                help you out and guide you through the process. Leave the legal
                stuff to us so you can concentrate on your core business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <div className="section-blog style-3 sw-layout-1 tf-spacing-17">
      <div className="tf-container">
        <div className="wrap pb-0" style={{borderBottom:0 }}>
          <div className="heading-section d-flex justify-content-between flex-wrap-md gap_12 align-items-end mb_108">
            <div className="left">
              <h1 className="heading-title split-text effect-right text-center">
                Effective Solutions
              </h1>
              <p
                className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated text-center"
                data-wow-delay="0s"
              >
                We are a team of professionals who are specialized in providing
                holistic support and services towards setting up your business<br/>
                in UAE and abroad. We are always ready to walk the extra mile to
                cater to all your business requisites. Our customer-centric<br/>
                approach makes us more accessible to our global clientele.
              </p>
            </div>
          </div>
          <div className="row">
            {effectiveSolutionsData.map((article) => (
              <div className="col-md-4">
                <div className="blog-article-item hover-image">
                  <div className="article-thumb mb_25">
                    <img
                      className="lazyload"
                      data-src={article.imageSrc}
                      alt="blog"
                      src={article.imageSrc}
                      width={article.width}
                      height={article.height}
                    />
                  </div>
                  <div className="article-content">
                    <h5 className="title letter-spacing-2">
                      <div className="link">
                        {article.title}
                      </div>
                    </h5>
                    <p
                      className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
                      data-wow-delay="0s"
                    >
                      {article.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default EffectiveSolutions;
