import MetaComponent from "@/components/common/MetaComponent";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { blogArticles2 } from "@/data/blogs";
import { freezones } from "@/data/freezones";
import React from "react";
import { Link } from "react-router-dom";
const metadata = {
  title: "Free Zones",
  description: "Free Zones",
};
const Freezones = () => {
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
                      <h1 className="title split-text effect-right">
                        UAE Free Zones
                      </h1>
                      <div className="description">
                        <p
                          className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                          data-wow-delay="0s"
                        >
                          Free zones in the UAE offer a business-friendly
                          environment designed to attract foreign investment and
                          encourage economic growth. These zones provide
                          numerous benefits such as 100% foreign ownership, full
                          repatriation of profits, tax exemptions, and
                          simplified company setup procedures. Each free zone is
                          tailored to support specific industries, from trade
                          and logistics to media, finance, and technology.
                          Entrepreneurs and investors can choose from a wide
                          range of locations across all emirates based on their
                          business needs. Setting up a company in a UAE free
                          zone is an ideal option for those seeking flexibility,
                          efficiency, and access to regional and international
                          markets.
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
                      src="/images/qb/freezones2.webp"
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

     <div className="tf-container pt_90">
         <div className="row">
              {freezones.map((item) => (
                <div className="col-md-3 col-sm-2 col-12 mb-5" key={item.id}>
                  <div className="blog-article-item style-1 hover-image-3">
                    <Link
                      to={`/${item.link}`}
                      className="article-thumb mb_30"
                    >
                      <img
                        className="lazyload"
                        data-src={item.imageSrc}
                        alt="blog"
                        src={item.imageSrc}
                        width={item.width}
                        height={item.height}
                      />
                      <img
                        className="lazyload"
                        data-src={item.imageSrc}
                        alt="blog"
                        src={item.imageSrc}
                        width={item.width}
                        height={item.height}
                        style={{borderRadius:20}}
                      />
                      {/* <div className="tag text-body-3 text_white d-flex flex-column">
                        <h6 className="text_white">{article.day}</h6>
                        <span>{article.month}</span>
                      </div> */}
                    </Link>




                    
                    <div className="article-content mb_25">
                      <h6 className="title fw-5 letter-spacing-2 mb_8">
                        <Link to={`/${item.link}`} className="link">
                          {item.title}
                        </Link>
                      </h6>
                      {/* <p className="text-body-1 text_mono-gray-5">
                        {article.description}
                      </p> */}
                    </div>
                    {/* <Link
                      to={`/single-post/${article.id}`}
                      className="btn_link text-body-1 link-black"
                    >
                      Read it
                    </Link> */}
                  </div>
                </div>
              ))}
         </div>
     </div>

      <Footer1 />
    </>
  );
};

export default Freezones;
