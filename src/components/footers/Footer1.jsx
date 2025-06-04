import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Footer1({ parentClass = "footer style-default" }) {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobile");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  return (
    <footer id="footer" className={parentClass}>
      <div className="footer-wrap">
        <div className="tf-container">
          <div className="footer-body">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-about">
                  <Link to={`/`} className="footer-logo">
                    <img
                      alt="logo"
                      src="/images/qb/questBloomTransparent.png"
                      width={390}
                      height={80}
                    />
                  </Link>
                  <div className="footer-info mb_51">
                    <a href="#" className="link text-body-2 text_black">
                      info@questmanagement.ae
                    </a>
                    <div className="text-body-2">
                      Office 1004, 10th Floor, Bayswater, Business Bay,
                      Dubai-UAE <br />
                      Reg.Add: A3, 3rd Floor, Dubai South Freezone, P.O Box
                      113225, Dubai-UAE
                    </div>
                    {/* <Link to={} className="text-body-2">(+971) 458 964 36</Link> */}
                    <div className="text-body-2">(+971) 564 065 672</div>
                    <div className="text-body-2">(+971) 504 509 183</div>
                  </div>
                  {/* <div className="tf-social">
                    <a href="#" className="icon-twitter-x" />
                    <a href="#" className="icon-facebook-f" />
                    <a href="#" className="icon-github" />
                    <a href="#" className="icon-instagram" />
                    <a href="#" className="icon-youtube" />
                  </div> */}
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-col-block">
                  <h6 className="footer-heading footer-heading-mobile">
                    Company
                  </h6>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list">
                      <li className="text-body-2 text_mono-gray-6">
                        <Link to={`/about`} className="link footer-menu_item">
                          About Quest Management
                        </Link>
                      </li>
                      <li className="text-body-2 text_mono-gray-6">
                        <Link
                          to={`/contact-us`}
                          className="link footer-menu_item"
                        >
                          Contact us
                        </Link>
                      </li>
                      {/* <li className="text-body-2 text_mono-gray-6">
                        <Link
                          to={`/`}
                          className="link footer-menu_item"
                        >
                          Portfolio
                        </Link>
                      </li>
                      <li className="text-body-2 text_mono-gray-6">
                        <Link to={`/`} className="link footer-menu_item">
                          How We Work
                        </Link>
                      </li>
                      <li className="text-body-2 text_mono-gray-6">
                        <Link to={`/`} className="link footer-menu_item">
                          Career
                        </Link>
                      </li> */}
                      <li className="text-body-2 text_mono-gray-6">
                        <Link to={`/other-services`} className="link footer-menu_item">
                         Other Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div>
                  <div className="footer-col-block">
                    <h6 className="footer-heading footer-heading-mobile">
                      Our Services
                    </h6>
                    <div className="tf-collapse-content">
                      <ul className="footer-menu-list">
                        <li className="text-body-2 text_mono-gray-6">
                          <Link
                            to={`/international-fza`}
                            className="link footer-menu_item"
                          >
                           IFZA
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link
                            to={`/umm-al-quwain-ftz`}
                            className="link footer-menu_item"
                          >
                            UAQ FTZ
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link
                            to={`/hamriyah-freezone`}
                            className="link footer-menu_item"
                          >
                            HAFZA
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <a href="/sharjah-airport-freezone" className="link footer-menu_item">
                            SAIF Zone
                          </a>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link to={`/ras-al-khaimah-feza`} className="link footer-menu_item">
                            RAKEZ
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link to={`/fujairah-fza`} className="link footer-menu_item">
                            FFZA
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link to={`/ajman-media-city-fz`} className="link footer-menu_item">
                            AMCFZ
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link to={`/sharjah-media-city`} className="link footer-menu_item">
                            SHAMS
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link to={`/ajman-fza`} className="link footer-menu_item">
                            AFZA
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link to={`/jebel-ali-freezone`} className="link footer-menu_item">
                            JAFZA
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link to={`/dmcc-freezone`} className="link footer-menu_item">
                            DMCC
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div>
                  <div className="footer-col-block">
                    <h6 className="footer-heading footer-heading-mobile">
                      Other Services
                    </h6>
                    <div className="tf-collapse-content">
                      <ul className="footer-menu-list">
                        <li className="text-body-2 text_mono-gray-6">
                          <Link to={`/mainland-company-setup-with-ded-dubai`} className="link footer-menu_item">
                            Mainland Company Setup with DED-Dubai
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link to={`/bank-account-opening`} className="link footer-menu_item">
                            Bank Account Opening
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link to={`/trade-finance-assistance`} className="link footer-menu_item">
                            Trade Finannce Assistance
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link to={`/company-liquidation`} className="link footer-menu_item">
                            Company Liquidation
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-2 col-md-6">
                <div>
                  <div className="footer-col-block">
                    <h6 className="footer-heading footer-heading-mobile">
                      Links
                    </h6>
                    <div className="tf-collapse-content">
                      <ul className="footer-menu-list">
                        <li className="text-body-2 text_mono-gray-6">
                          <Link to={`/`} className="link footer-menu_item">
                            Terms & Conditions
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link to={`/`} className="link footer-menu_item">
                            FAQ's
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <a href="#" className="link footer-menu_item">
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-4">
                <div className="footer-newsletter">
                  <h6 className="footer-heading">Subscribe Our Newseltter</h6>
                  <div className="tf-collapse-content">
                    <div className="wrap-newsletter">
                      <p className="text-body-2 text_mono-gray-6 mb_29">
                        Sign up to get first dibs on new arrivals, sales
                        exclusive content, events and more!
                      </p>
                      <div
                        className={`tfSubscribeMsg  footer-sub-element ${
                          showMessage ? "active" : ""
                        }`}
                      >
                        {success ? (
                          <p style={{ color: "rgb(52, 168, 83)" }}>
                            You have successfully subscribed.
                          </p>
                        ) : (
                          <p style={{ color: "red" }}>Something went wrong</p>
                        )}
                      </div>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          // sendEmail(e);
                        }}
                        id="subscribe-form"
                        className="form-newsletter style-1 subscribe-form mb_10"
                      >
                        <div
                          id="subscribe-content"
                          className="subscribe-content"
                        >
                          <fieldset className="email">
                            <input
                              id="subscribe-email"
                              type="email"
                              name="email"
                              className="subscribe-email style-2"
                              placeholder="Enter your e-mail"
                              tabIndex={0}
                              aria-required="true"
                            />
                          </fieldset>
                          <div className="button-submit">
                            <button
                              id="subscribe-button"
                              className="subscribe-button tf-btn rounded-12 btn-primary2"
                              type="submit"
                            >
                              <span>Subscribe</span>
                              <span className="bg-effect" />
                            </button>
                          </div>
                          <div className="icon">
                            <i className="icon-envelope-solid" />
                          </div>
                        </div>
                        <div id="subscribe-msg" className="subscribe-msg" />
                      </form>
                      <p className="description text-body-2">
                        By subscribing, you accepted the our{" "}
                        <a href="#" className="link-black text_primary">
                          Privacy Policy
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="wrapper d-flex align-items-center flex-wrap gap_12">
                <p className="text-body-2">
                  © {new Date().getFullYear()} Copyright by{" "}
                  <a href="#" className="link-black text_primary text-body-3">
                    Quest Management
                  </a>{" "}
                  . All Right Reserved.
                </p>
                <ul className="right d-flex align-items-center">
                  <li>
                    <Link
                      to={`/`}
                      className="link text_mono-gray-5 text-body-1"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/about`}
                      className="link text_mono-gray-5 text-body-1"
                    >
                      About
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      to={`/`}
                      className="link text_mono-gray-5 text-body-1"
                    >
                      Serivce
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      to={`/`}
                      className="link text_mono-gray-5 text-body-1"
                    >
                      Blog
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      to={`/contact-us`}
                      className="link text_mono-gray-5 text-body-1"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
