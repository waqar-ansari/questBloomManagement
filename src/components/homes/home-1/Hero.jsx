import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="page-title style-1">
      <div className="content-inner">
        <div className="tf-container">
          <div className="heading-title">
            <div className="text-display-2 text_white mb_49 split-text effect-scale">
           Start Your Company<br/>
           in Dubai
            </div>
            <Link to={`/about`} className="tf-btn btn-white height-2">
              <span className="text_black">Get Free Quote</span>
              <span className="bg-effect" />
            </Link>
          </div>
          <div className="bot d-flex align-items-end justify-content-between gap-20 flex-wrap">
            <p className="text_white sub-heading description">
            Register your company in Mainland Dubai & Freezone <br/> with ease through expert guidance and support from Quest Management.
            </p>
            <div className="wrap-facts">
              <h5 className="text_white mb_19">Connect Your Experts</h5>
              <div className="facts style-1">
                <div className="avatar-wrap d-flex">
                  <div className="avatar item-1">
                    <img
                      alt=""
                      src="/images/qb/people1.webp"
                      width={40}
                      style={{borderRadius:20,height:"100%"}}
                      height={40}
                    />
                  </div>
                  <div className="avatar item-2">
                    <img
                      alt=""
                      src="/images/qb/people2.webp"
                      width={40}
                      style={{borderRadius:20,height:"100%"}}
                      height={40}
                    />
                  </div>
                  <div className="avatar item-3">
                    <img
                      alt=""
                      src="/images/qb/people3.webp"
                      width={40}
                      style={{borderRadius:20,height:"100%"}}
                      height={40}
                    />
                  </div>
                </div>
                <p className="text-body-1 text_white">
                  The expert team brings a wealth of knowledge and creativity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
