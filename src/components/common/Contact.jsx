import VariableProximity from "@/utlis/VariableProximity";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
export default function Contact() {
  const options = [
     { value: "businessSetupMainland", label: "Business Setup Mainland" },
    { value: "businessSetupfreezone", label: "Business Setup Free Zone" },
    { value: "bankingAssistance", label: "Banking Assistance" },
    { value: "tradeFinanceAssistance", label: "Trade Finance Assistance" },
  ];
 const [selectedOption, setSelectedOption] = useState(null);
const containerRef = useRef(null);
  const customStyles = {
    control: (base) => ({
      ...base,
      borderRadius: 10,
      borderColor: "#ccc",
      boxShadow: "none",
      minHeight: 50,
      height: 50,
      lineHeight:"20px",
      fontSize: "18px",
      "&:hover": {
        borderColor: "#ccc",
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "#000",
      fontSize: "18px",
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
    <div className="section-contact style-default position-relative py-5">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left">
              <div className="heading">
                <div className="h1 split-text split-lines-rotation-x pt-5 mt-5">
                   <div ref={containerRef} style={{ position: "relative" }}>
                      <VariableProximity
                        label="Success is a team play, right? Let’s work together!"
                        className="variable-proximity"
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                      />
                    </div>
                </div>
              </div>
              <div className="bot">
                <div className="content">
                  <h6 className="mb_5">
                    <img
                      src="/images/qb/phoneIconGolden.png"
                      width={35}
                      style={{ marginRight: 20 }}
                    />
                    +971 4 529 9247
                  </h6>
                  {/* <p className="text-body-2 text_mono-gray-6">
                    Call us for urgent
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="form-contact"
              style={{ padding: "30px 64px 30px" }}
            >
              <fieldset>
                <label className="mb_15" htmlFor="name">
                  Full Name*
                </label>
                <input type="text" placeholder="Full Name" id="name" required />
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
              <div>
                  <fieldset>
                  <label className="mb_15" htmlFor="serviceType">
                    Service Type
                  </label>
               <Select
      value={selectedOption}
      onChange={setSelectedOption}
      options={options}
      styles={customStyles}
      placeholder="Select an option"
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
              <button type="submit" className="tf-btn btn-primary2 mt_27">
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
          className="contact-image-animate"
          height={720}
        />
      </div>
    </div>
  );
}
