import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="page-title style-1">
      <div className="content-inner">
        <div className="tf-container">
          <div className="heading-title mb-0">
            <div className="text-display-2 text_white mb_49 split-text effect-scale">
              Start Your Company
              <br />{" "}
              <span className="fw-bold" style={{ color: "#797631" }}>
                 in Dubai
              </span>
              <div
                className="d-sm-flex align-items-center mt-4"
                style={{ gap: "10px" }}
              >
                <div className="me-4">
                  <span
                    style={{
                      fontSize: 25,
                      lineHeight: "30px",
                      display: "block",
                    }}
                  >
                    From Just
                  </span>
                  <span
                    style={{
                      fontSize: 40,
                      lineHeight: "45px",
                      display: "block",
                      fontWeight: 900,
                      letterSpacing: 5,
                      color: "#797631",
                    }}
                  >
                    AED
                  </span>
                </div>

                <span
                  style={{
                    fontSize: 90,
                    lineHeight: 1,
                    position: "relative",
                    display: "inline-block",
                    fontWeight:700
                  }}
                >
                  5,500
                  <span
                    style={{
                      fontSize: 30,
                      position: "absolute",
                      top: 0,
                      right: -10, // adjust if needed
                    }}
                  >
                    *
                  </span>
                </span>

                {/* This one should align to the bottom */}
                <span
                  style={{
                    fontSize: 16,
                    lineHeight: 1,
                    alignSelf: "flex-end",
                    marginBottom: 20,
                  }}
                >
                 Designated Free Zone
                </span>
              </div>
              <div
                className="d-sm-flex align-items-center mt-4"
                style={{ gap: "10px" }}
              >
                <div className="me-4">
                  <span
                    style={{
                      fontSize: 25,
                      lineHeight: "30px",
                      display: "block",
                    }}
                  >
                    From Just
                  </span>
                  <span
                    style={{
                      fontSize: 40,
                      lineHeight: "45px",
                      display: "block",
                      fontWeight: 900,
                      letterSpacing: 5,
                      color: "#797631",
                    }}
                  >
                    AED
                  </span>
                </div>

                <span
                  style={{
                    fontSize: 90,
                    lineHeight: 1,
                    position: "relative",
                    display: "inline-block",
                    fontWeight:700
                  }}
                >
                  7,000
                  <span
                    style={{
                      fontSize: 30,
                      position: "absolute",
                      top: 0,
                      right: -10, // adjust if needed
                    }}
                  >
                    *
                  </span>
                </span>

                {/* This one should align to the bottom */}
                <span
                  style={{
                    fontSize: 16,
                    lineHeight: 1,
                    alignSelf: "flex-end",
                    marginBottom: 20,
                  }}
                >
                General Trading License
                </span>
              </div>
            </div>
          
          </div>
          <div className="bot d-flex align-items-end justify-content-between gap-20 flex-wrap">
             <Link to={`/contact-us`} className="tf-btn btn-white height-2">
              <span className="text_black fs-2 fw-medium">Start Now</span>
              <span className="bg-effect" />
            </Link>
            <div className="wrap-facts">
              <h5 className="text_white mb_19">Connect To The Expert</h5>
              <div className="facts style-1">
                <div className="avatar-wrap d-flex">
                  <div className="avatar item-1">
                    <img
                      alt=""
                      src="/images/qb/people1.webp"
                      width={40}
                      style={{ borderRadius: 20, height: "100%" }}
                      height={40}
                    />
                  </div>
                  <div className="avatar item-2">
                    <img
                      alt=""
                      src="/images/qb/people2.webp"
                      width={40}
                      style={{ borderRadius: 20, height: "100%" }}
                      height={40}
                    />
                  </div>
                  <div className="avatar item-3">
                    <img
                      alt=""
                      src="/images/qb/people3.webp"
                      width={40}
                      style={{ borderRadius: 20, height: "100%" }}
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
