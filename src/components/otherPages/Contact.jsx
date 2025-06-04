import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="page-title style-default -mb_11">
      <div className="section-contact style-default position-relative py-0">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left">
                <div className="heading">
                  <h1 className="mb_21">
                    Contact Us
                  </h1>
                  <p className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s">
                    Let us know how we can help! Fill out our contact form and we will get back to you as soon as possible.
                  </p>
                  {/* <ul className="breadcrumb">
                    <li>
                      <Link to={`/`} className="link">
                        Home
                      </Link>
                    </li>
                    <li>Contact</li>
                  </ul> */}
                </div>
                <div className="bot">
                  <div className="content mb-0">
                    <h6> (+971) 564 065 672</h6>
                    <p className="text-body-2 text_mono-gray-6">
                      Call us for urgent
                    </p>
                  </div><br />
                  <div className="content mb-0">
                    <h6><b>Monday – Friday:</b> 8.30AM to 8.00PM</h6>
                    <p className="text-body-2 text_mono-gray-6">
                      RECEPTION HOURS
                    </p>
                  </div><br />
                  <div className="content mb-0">
                    <h6><b>Monday – Friday:</b> 8.30AM to 8.00PM</h6>
                    <h6><b>Saturday:</b> 10.00AM to 4.00PM</h6>
                    <p className="text-body-2 text_mono-gray-6">
                      CALL CENTRE HOURS
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form
                className="form-contact"
                onSubmit={(e) => e.preventDefault()}
              >
                <fieldset>
                  <label className="mb_15" htmlFor="name">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    required
                  />
                </fieldset>
                <div className="grid-2 gap_24">
                  <fieldset>
                    <label className="mb_15" htmlFor="email">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      placeholder="Your email address*"
                      id="email"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <label className="mb_15" htmlFor="phone">
                      Phone Number
                      <span className="text_mono-gray-5">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your phone number"
                      id="phone"
                      required
                    />
                  </fieldset>
                </div>
                <fieldset className="">
                  <label className="mb_15" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="message"
                    placeholder="Write your message here..."
                    id="message"
                    defaultValue={""}
                  />
                </fieldset>
                {/* <a href="#" className="link attachment">
                  <i className="icon-paperclip-solid" />
                  Add an attachment
                </a> */}
                <button type="submit" className="tf-btn btn-primary2 mt_22">
                  <span>Send Message</span>
                  <span className="bg-effect" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="shape position-absolute">
          <img
            alt="item"
            src="/images/item/shape-5.png"
            width={1105}
            height={720}
          />
        </div>
      </div>
    </div>
  );
}
