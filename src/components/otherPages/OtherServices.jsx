import React, { useEffect, useRef, useState } from "react";
import MetaComponent from "../common/MetaComponent";
import Header1 from "../headers/Header1";
import Footer1 from "../footers/Footer1";

import axios from "axios";
import api from "@/axios/axiosInstance";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import VariableProximity from "@/utlis/VariableProximity";
const metadata = {
  title: "Other Services",
  description: "Other Services",
};

const OtherServices = () => {
const containerRef = useRef(null);
const allServices = useSelector((state)=>state.services)

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header" id="animated-background">
        <Header1 />
        <div className="page-title style-default pb-0">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_51 text-center">
                  <h1 className="text_black mb_16 letter-spacing-1">
                 <div ref={containerRef} style={{ position: "relative" }}>
                      <VariableProximity
                        label="Business Solutions Beyond Company Formation"
                        className="variable-proximity"
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                      />
                    </div>
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                     We handle everything from visa renewals to document attestations, so your business runs seamlessly without your physical presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tf-container-2 pt_90"
      >
        <div className="heading-section text-center mb_60">
          <h2 className="title text_mono-dark-9 fw-5 split-text split-lines-rotation-x">
           Other
            <span className="text-gradient"> Services</span>
          </h2>
        </div>
        <div className="tf-grid-layout lg-col-3 md-col-2">
          {allServices.map((item)=>{
            return(
              <Link className="tf-box-icon style-5 effect-icon bg-on-hover" key={item.id} to={item.page_link} >
            <div className="icon mb_24">
              <img
                alt="icon"
                src={item.image_url}
                width={32}
                height={32}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
                {/* License Renewal */}
                {item.name}
              </div>
              <p className="text-body-3 text_mono-gray-7">
                {/* Renew Your License Hassle Free without your presence in UAE. */}
                {item.description}
              </p>
            </div>
          </Link>
            )
          })}
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default OtherServices;
