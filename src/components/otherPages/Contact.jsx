import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
export default function Contact() {
  const options = [
    { value: "businessSetup", label: "Business Setup" },
    { value: "freezone", label: "Free Zone" },
    { value: "bankingAssistance", label: "Banking Assistance" },
    { value: "tradefinanceAssistance", label: "Trade Finance Assistance" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const customStyles = {
    control: (base) => ({
      ...base,
      borderRadius: 10,
      borderColor: "#ccc",
      boxShadow: "none",
        lineHeight:"20px",
      minHeight: 50, // reduce height
      height: 50,
      fontSize: "16px", // increase font size
      "&:hover": {
        borderColor: "#ccc",
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "#000",
      fontSize: "18px", // increase font size
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#797631"
        : state.isFocused
        ? "#f9f9f9"
        : "#fff",
      color: state.isSelected ? "#fff" : "#000",
      cursor: "pointer",
      fontSize: "16px",
      paddingTop: 8,
      paddingBottom: 8,
    }),
    indicatorsContainer: (base) => ({
      ...base,
      height: 50,
    }),
    valueContainer: (base) => ({
      ...base,
      height: 50,
      paddingTop: 0,
      paddingBottom: 0,
    }),
  };
  return (
    <div className="page-title style-default pb_90 pt_90">
      <div className="section-contact style-default position-relative py-0 hover-animate">
        <div className="tf-container">
          <div className="row pb-3">
            <div className="col-lg-6">
              <div className="left pt-5 mt-5">
                <div className="heading">
                  <h1 className="mb_21">Contact Us</h1>
                  <p
                    className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s"
                  >
                    Let us know how we can help! Fill out our contact form and
                    we will get back to you as soon as possible.
                  </p>
                  <br />
                  <br />
                  <br />
                  <p
                    className="text-body-1 text_mono-gray-7 mb_9 wow animate__fadeInUp animate__animated"
                    data-wow-delay="0s"
                  >
                    Reach Our Expert Team : <br />
                    <br />
                    Send a message through given form, If your enquiry is time
                    sensitive please use below contact details.
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
              </div>
            </div>
            <div className="col-lg-6">
              <form
                className="form-contact"
                onSubmit={(e) => e.preventDefault()}
                style={{ padding: "30px 64px" }}
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
                <fieldset>
                  <label className="mb_15" htmlFor="serviceType">
                    Service Type
                  </label>
                  <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    styles={customStyles}
                    id="serviceType"
                    placeholder="Select an option"
                  />
                </fieldset>
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
                  <span>Submit</span>
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
            className="shape-img"
          />
        </div>
      </div>
    </div>
  );
}
