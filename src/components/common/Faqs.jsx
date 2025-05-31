import React from "react";

export default function Faqs({
  parentClass = "section-faqs style-1 tf-spacing-8 pt-0",
  headingClass = "heading-title split-text effect-right",
  header2 = false,
}) {
  return (
    <div className={parentClass}>
      <div className="tf-container">
        <div
          className={`heading-section text-center ${
            header2 ? "mb_86" : "mb_92"
          } `}
        >
          {header2 ? (
            <h2 className={headingClass}>Got a question? Get your answer</h2>
          ) : (
            <h1 className={headingClass}>Got a question? Get your answer</h1>
          )}
          <p
            className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
            data-wow-delay="0s"
          >
            We revolutionize industries with dynamic digital solutions, tailored
            to meet contemporary demands and <br />
            drive impactful transformations for businesses of all sectors.
          </p>
        </div>
        <ul
          className="accordion-wrap gap-16 style-faqs d-grid gap_16"
          id="accordion-faq-1"
        >
          <li className="accordion-item action_click scrolling-effect effectBottom style-default v2">
            <a
              href="#accordion-1"
              className="accordion-title action collapsed current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-1"
            >
              <div className="heading">
                <h5 className="title">
                 What is the difference between Mainland and Freezone company setup?
                </h5>
              </div>
              <span className="icon" />
            </a>
            <div
              id="accordion-1"
              className="collapse"
              data-bs-parent="#accordion-faq-1"
            >
              <div className="accordion-faqs-content">
                <p className="text-body-2 lh-20">
                  Mainland businesses allow you to operate across the UAE and take on government projects. Freezone companies are limited to operating within their zone or internationally, but offer 100% foreign ownership, tax exemptions, and streamlined setup processes—ideal for those not needing access to the local UAE market.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item action_click scrolling-effect effectBottom active style-default v2">
            <a
              href="#accordion-2"
              className="accordion-title action current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-2"
            >
              <div className="heading">
                <h5 className="title">How long does it take to set up a business in Dubai?</h5>
              </div>
              <span className="icon" />
            </a>
            <div
              id="accordion-2"
              className="collapse show"
              data-bs-parent="#accordion-faq-1"
            >
              <div className="accordion-faqs-content">
                <p className="text-body-2 lh-20">
                 The setup process can take anywhere from 5 to 10 business days, depending on the business activity, legal structure, and jurisdiction. Some Freezones offer fast-track options, while Mainland businesses may take longer due to approvals from various government departments.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item action_click scrolling-effect effectBottom style-default v2">
            <a
              href="#accordion-3"
              className="accordion-title action collapsed current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-3"
            >
              <div className="heading">
                <h5 className="title">Do I need a local sponsor for a mainland business?</h5>
              </div>
              <span className="icon" />
            </a>
            <div
              id="accordion-3"
              className="collapse"
              data-bs-parent="#accordion-faq-1"
            >
              <div className="accordion-faqs-content">
                <p className="text-body-2 lh-20">
                 Yes, traditionally, a UAE national was required as a sponsor holding 51% ownership. However, recent reforms allow 100% foreign ownership in many sectors. For professional services, you may only need a local service agent without ownership rights.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item action_click scrolling-effect effectBottom style-default v2">
            <a
              href="#accordion-4"
              className="accordion-title action collapsed current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-4"
            >
              <div className="heading">
                <h5 className="title">
                Can I open a corporate bank account after setting up my company?
                </h5>
              </div>
              <span className="icon" />
            </a>
            <div
              id="accordion-4"
              className="collapse"
              data-bs-parent="#accordion-faq-1"
            >
              <div className="accordion-faqs-content">
                <p className="text-body-2 lh-20">
                 Yes, once your company is registered and you have your trade license, you can apply for a corporate bank account. Banks will typically request business documents, passport copies, and in some cases, a business plan or proof of business activity.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item action_click scrolling-effect effectBottom style-default v2">
            <a
              href="#accordion-5"
              className="accordion-title action collapsed current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-5"
            >
              <div className="heading">
                <h5 className="title">
                What are the common documents needed for business setup?
                </h5>
              </div>
              <span className="icon" />
            </a>
            <div
              id="accordion-5"
              className="collapse"
              data-bs-parent="#accordion-faq-1"
            >
              <div className="accordion-faqs-content">
                <p className="text-body-2 lh-20">
                  You’ll generally need passport copies of shareholders, visa or entry stamp, NOC (if employed), a business activity outline, and an application form. Depending on the business type, additional documents such as tenancy contracts or initial approvals may be required.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item action_click scrolling-effect effectBottom style-default v2">
            <a
              href="#accordion-6"
              className="accordion-title action collapsed current"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="accordion-6"
            >
              <div className="heading">
                <h5 className="title">Do you assist with opening a corporate bank account?</h5>
              </div>
              <span className="icon" />
            </a>
            <div
              id="accordion-6"
              className="collapse"
              data-bs-parent="#accordion-faq-1"
            >
              <div className="accordion-faqs-content">
                <p className="text-body-2 lh-20">
                 Yes, we provide end-to-end assistance with opening corporate bank accounts by guiding you through documentation and coordination with banks.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
