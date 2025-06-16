import { effectiveSolutionsData } from "@/data/blogs";
import React from "react";

const EffectiveSolutions = () => {
  return (
    <>
    
    <div className="section-blog style-3 sw-layout-1 tf-spacing-17 pt_90 pb_90">
      <div className="tf-container">
        <div className="wrap pb-0" style={{borderBottom:0 }}>
          <div className="heading-section d-flex justify-content-center flex-wrap-md gap_12 align-items-end mb_60">
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
