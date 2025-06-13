import React from "react";

export default function Process() {
  return (
    <div className="section-process style-1 tf-spacing-3 pt_90 pb-0">
      <div className="tf-container">
        <div className="wrap pb_90">
          <div className="row align-items-end">
            <div className="col-12">
              <div className="heading-section mb_88 ps-0">
                <h2 className="heading-title split-text effect-right">
                  Our Approach
                </h2>
                <p
                  className="text-body-1 text_mono-gray-7 mt_18 wow animate__fadeInUp animate__animated"
                  data-wow-delay="0s"
                >
                  We rely on data-driven analysis and methodologies to
                  structurise our client's business model, thereby ensuring
                  accuracy.
                </p>
              </div>
            </div>
            <div className="col-xl-6 left">
              <ul
                className="accordion-wrap gap-16 style-faqs"
                id="accordion-approach"
              >
                <li className="accordion-item action_click scrolling-effect effectLeft style-default">
                  <a
                    href="#accordion-approach-1"
                    className="accordion-title action collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-approach-1"
                  >
                    <div className="heading">
                      <h3 className="text_mono-gray-5 title">
                        <span className="text_primary">1.</span>Research &
                        Analysis
                      </h3>
                    </div>
                    <span className="icon" />
                  </a>
                  <div
                    id="accordion-approach-1"
                    className="collapse"
                    data-bs-parent="#accordion-approach"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-body-1">
                        {/* We start by deeply understanding your business goals and challenges. This phase helps us gather critical insights that shape a tailored, strategic roadmap aligned with your unique objectives. */}
                        We start with understanding your business goals and find
                        out the best ways to help you achieve them through SWOT
                        analysis. This phase helps us gather critical insights
                        that shape a bespoke, strategic roadmap aligned with
                        your unique objectives.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-item action_click scrolling-effect effectLeft active style-default">
                  <a
                    href="#accordion-approach-2"
                    className="accordion-title action current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-approach-2"
                  >
                    <div className="heading">
                      <h3 className="text_mono-gray-5 title">
                        <span className="text_primary">2.</span> Data Collection
                      </h3>
                    </div>
                    <span className="icon" />
                  </a>
                  <div
                    id="accordion-approach-2"
                    className="collapse show"
                    data-bs-parent="#accordion-approach"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-body-1">
                        We gather reliable, relevant, and up-to-date data to
                        form the foundation of our recommendations. This ensures
                        that every decision is backed by evidence, not
                        assumptions.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-item action_click scrolling-effect effectLeft style-default">
                  <a
                    href="#accordion-approach-3"
                    className="accordion-title action collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-approach-3"
                  >
                    <div className="heading">
                      <h3 className="text_mono-gray-5 title">
                        <span className="text_primary">3.</span> Detailed
                        Analysis
                      </h3>
                    </div>
                    <span className="icon" />
                  </a>
                  <div
                    id="accordion-approach-3"
                    className="collapse"
                    data-bs-parent="#accordion-approach"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-body-1">
                        Using advanced tools and methodologies, we analyze the
                        collected data to identify trends, uncover risks, and
                        spot growth opportunities that might otherwise go
                        unnoticed.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-item action_click scrolling-effect effectLeft style-default">
                  <a
                    href="#accordion-approach-4"
                    className="accordion-title action collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion-approach-4"
                  >
                    <div className="heading">
                      <h3 className="text_mono-gray-5 title">
                        <span className="text_primary">4.</span>Strategic
                        Planning
                      </h3>
                    </div>
                    <span className="icon" />
                  </a>
                  <div
                    id="accordion-approach-4"
                    className="collapse"
                    data-bs-parent="#accordion-approach"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-body-1">
                        Based on our findings, we develop data-driven strategies
                        that are actionable and measurable. These plans are
                        designed to meet your goals efficiently and effectively.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion-item action_click scrolling-effect effectLeft style-default">
                  <a
                    href="#accordion--approach-5"
                    className="accordion-title action collapsed current"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="accordion--approach-5"
                  >
                    <div className="heading">
                      <h3 className="text_mono-gray-5 title">
                        <span className="text_primary">5.</span>Execution &
                        Evaluation
                      </h3>
                    </div>
                    <span className="icon" />
                  </a>
                  <div
                    id="accordion--approach-5"
                    className="collapse"
                    data-bs-parent="#accordion-approach"
                  >
                    <div className="accordion-faqs-content">
                      <p className="text-body-1">
                        We assist in executing the strategies and continuously
                        monitor performance. Regular evaluations help us adapt
                        and improve results, ensuring long-term success and
                        sustainability.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 right">
              <div
                className="shape-img-bg shape-border style-2 scroll-tranform"
                data-distance="20%"
              >
                <img
                  alt=""
                  className="img-custom-anim-left wow"
                  src="/images/qb/discussion.avif"
                  width={802}
                  height={535}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
