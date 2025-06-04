import React from "react";
import MetaComponent from "../common/MetaComponent";
import Header1 from "../headers/Header1";
import Footer1 from "../footers/Footer1";
import { otherServices } from "@/data/otherServices";
const metadata = {
  title: "Other Services",
  description: "Other Services",
};
const OtherServices = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header1 />
        <div className="page-title style-default">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_51">
                  <h1 className="text_black mb_16 letter-spacing-1">
                    Comprehensive Business Services <br /> Beyond Company Setup
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                    From visa renewals to document attestations, we offer a wide
                    range <br /> of essential services to keep your business
                    running smoothly—without the
                    <br /> need for your physical presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tf-container-2"
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        <div className="heading-section text-center mb_58">
          <h2 className="title text_mono-dark-9 fw-5 split-text split-lines-rotation-x">
           Other
            <span className="text-gradient"> Services</span>
          </h2>
        </div>
        <div className="tf-grid-layout lg-col-3 md-col-2">
          {otherServices.map((item)=>{
            return(
              <div className="tf-box-icon style-5 effect-icon bg-on-hover" key={item.id} >
            <div className="icon mb_24">
              <img
                alt="icon"
                src={`/images/qb/${item.icon}`}
                width={32}
                height={32}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
                {/* License Renewal */}
                {item.title}
              </div>
              <p className="text-body-3 text_mono-gray-7">
                {/* Renew Your License Hassle Free without your presence in UAE. */}
                {item.description}
              </p>
            </div>
          </div>
            )
          })}
          {/* <div className="tf-box-icon style-5 effect-icon">
            <div className="icon mb_24">
              <img
                alt="icon"
                src="/images/box-icon/package-open.svg"
                width={33}
                height={32}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
                Immigration Card Renewal
              </div>
              <p className="text-body-3 text_mono-gray-7">
                Get your Immigration Card Renewed Without Hassle
              </p>
            </div>
          </div>
          <div className="tf-box-icon style-5 effect-icon">
            <div className="icon mb_24">
              <img
                alt="icon"
                src="/images/box-icon/laptop-issue.svg"
                width={33}
                height={32}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
                New VISA Application
              </div>
              <p className="text-body-3 text_mono-gray-7">
                Let us handle your all VISA related ratters
              </p>
            </div>
          </div>
          <div className="tf-box-icon style-5 effect-icon">
            <div className="icon mb_24">
              <img
                alt="icon"
                src="/images/box-icon/auto-conversations.svg"
                width={32}
                height={32}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
                Visa Renewal
              </div>
              <p className="text-body-3 text_mono-gray-7">
                Renew your VISA without Hassle.
              </p>
            </div>
          </div>
          <div className="tf-box-icon style-5 effect-icon">
            <div className="icon mb_24">
              <img
                alt="icon"
                src="/images/box-icon/database.svg"
                width={33}
                height={32}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
                Dependent’s Visa
              </div>
              <p className="text-body-3 text_mono-gray-7">
                Complete assistance to get your Dependent VISA.
              </p>
            </div>
          </div>
          <div className="tf-box-icon style-5 effect-icon">
            <div className="icon mb_24">
              <img
                alt="icon"
                src="/images/box-icon/discover-circle.svg"
                width={33}
                height={32}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
                Ejari – Tenancy Contract
              </div>
              <p className="text-body-3 text_mono-gray-7">
                We assist with documentation related to office Occupancy.
              </p>
            </div>
          </div>
          <div className="tf-box-icon style-5 effect-icon">
            <div className="icon mb_24">
              <img
                alt="icon"
                src="/images/box-icon/creative-solutions.svg"
                width={29}
                height={29}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
                Registration Services
              </div>
              <p className="text-body-3 text_mono-gray-7">
                Register your Company in Three Easy Steps
              </p>
            </div>
          </div>
          <div className="tf-box-icon style-5 effect-icon">
            <div className="icon mb_24">
              <img
                alt="icon"
                src="/images/box-icon/package-open.svg"
                width={33}
                height={32}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
                Document Attestation Support
              </div>
              <p className="text-body-3 text_mono-gray-7">
                Get your Documents MOFA And Other Country Embassy Attestation
                Hassle Free.
              </p>
            </div>
          </div>
          <div className="tf-box-icon style-5 effect-icon">
            <div className="icon mb_24">
              <img
                alt="icon"
                src="/images/box-icon/laptop-issue.svg"
                width={33}
                height={32}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
                Cancelation of staff visas
              </div>
              <p className="text-body-3 text_mono-gray-7">
                Hassle Free VISA Cancellation.
              </p>
            </div>
          </div>
          <div className="tf-box-icon style-5 effect-icon">
            <div className="icon mb_24">
              <img
                alt="icon"
                src="/images/box-icon/auto-conversations.svg"
                width={32}
                height={32}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
                Change in Labour Contracts
              </div>
              <p className="text-body-3 text_mono-gray-7">
                We Assist to get it done
              </p>
            </div>
          </div>
          <div className="tf-box-icon style-5 effect-icon">
            <div className="icon mb_24">
              <img
                alt="icon"
                src="/images/box-icon/database.svg"
                width={33}
                height={32}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
                PO Box renewal.
              </div>
              <p className="text-body-3 text_mono-gray-7">
                We will Assist to get it done without your presence in UAE.
              </p>
            </div>
          </div>
          <div className="tf-box-icon style-5 effect-icon">
            <div className="icon mb_24">
              <img
                alt="icon"
                src="/images/box-icon/discover-circle.svg"
                width={33}
                height={32}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
                Emirates ID & Medical
              </div>
              <p className="text-body-3 text_mono-gray-7">
                We will you assist till completion.
              </p>
            </div>
          </div>
          <div className="tf-box-icon style-5 effect-icon">
            <div className="icon mb_24">
              <img
                alt="icon"
                src="/images/box-icon/discover-circle.svg"
                width={33}
                height={32}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
               Translations Assistance
              </div>
              <p className="text-body-3 text_mono-gray-7">
              We assist you to get it done.
              </p>
            </div>
          </div>
          <div className="tf-box-icon style-5 effect-icon">
            <div className="icon mb_24">
              <img
                alt="icon"
                src="/images/box-icon/discover-circle.svg"
                width={33}
                height={32}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
               Staff Labour card processing
              </div>
              <p className="text-body-3 text_mono-gray-7">
              Complete assistance to get it
              </p>
            </div>
          </div>
          <div className="tf-box-icon style-5 effect-icon">
            <div className="icon mb_24">
              <img
                alt="icon"
                src="/images/box-icon/discover-circle.svg"
                width={33}
                height={32}
              />
            </div>
            <div className="content">
              <div className="text-body-2 text_mono-dark-9 mb_9 fw-5">
              Company Liquidation
              </div>
              <p className="text-body-3 text_mono-gray-7">
               QMC assists in liquidation of companies in UAE.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default OtherServices;
