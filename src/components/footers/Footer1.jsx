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

    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []);

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
                    {/* <a href="#" className="link text-body-2 text_black">
                      info@questmanagement.ae
                    </a> */}
                    <div className="text-body-2">
                      P.O Box 113225
                      <br />
                      Office 1702, 17th Floor, Lake Central Tower <br/>Marasi Drive,  Business Bay, Dubai, UAE
                      {/* Reg.Add: A3, 3rd Floor, Dubai South Freezone, P.O Box
                      113225, Dubai-UAE */}
                    </div>
                    {/* <div className="text-body-2"><span className="fw-bold">Tel </span> : +971 04 529 9247</div>
                    <div className="text-body-2"><span className="fw-bold">Mob </span> : +971 56 4065 672</div>
                    <div className="text-body-2"><span className="fw-bold">Mob </span> : +971 50 4509 183</div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-col-block">
                  <h6 className="footer-heading footer-heading-mobile">
                    Contact Us
                  </h6>
                  <div className="tf-collapse-content">
                    {/* <ul className="footer-menu-list">
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
                      <li className="text-body-2 text_mono-gray-6">
                        <Link to={`/other-services`} className="link footer-menu_item">
                         Other Services
                        </Link>
                      </li>
                    </ul> */}
                    <a href="#" className="link text-body-2 text_black mb-3">
                      <img
                        src="/images/qb/emailIcon.png"
                        width={15}
                        style={{ marginRight: 12 }}
                      />{" "}
                      info@questmanagement.ae
                    </a>
                    <div className="text-body-2 mb-2">
                      <span className="fw-bold">
                        <img
                          src="/images/qb/phoneIcon.png"
                          width={20}
                          style={{ marginRight: 10 }}
                        />
                      </span>
                      <a
                        href="tel:+97145299247"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        +971 4 529 9247
                      </a>
                    </div>
                    <div className="text-body-2">
                      <span className="fw-bold">
                        <img
                          src="/images/qb/telephoneIcon.png"
                          width={15}
                          style={{ marginRight: 10 }}
                        />{" "}
                      </span>{" "}
                      <a
                        href="tel:+971504509183"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {" "}
                        +971 50 4509 183
                      </a>
                    </div>
                  </div>
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
                      <li className="text-body-2 text_mono-gray-6">
                        <Link
                          to={`/other-services`}
                          className="link footer-menu_item"
                        >
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
                    {/* <div className="tf-collapse-content">
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
                    </div> */}
                    <div className="tf-collapse-content">
                      <ul className="footer-menu-list">
                        <li className="text-body-2 text_mono-gray-6">
                          <Link
                            to={`/business-setup-dubai-mainland`}
                            className="link footer-menu_item"
                          >
                            Mainland Company Setup with DED-Dubai
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link
                            to={`/bank-account-opening`}
                            className="link footer-menu_item"
                          >
                            Bank Account Opening Assistance
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link
                            to={`/trade-finance-assistance`}
                            className="link footer-menu_item"
                          >
                            Trade Finance Assistance
                          </Link>
                        </li>
                        <li className="text-body-2 text_mono-gray-6">
                          <Link
                            to={`/company-liquidation`}
                            className="link footer-menu_item"
                          >
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
                      Other Services
                    </h6>
                    <div className="tf-collapse-content">
                      <ul className="footer-menu-list">
                        <li className="text-body-2 text_mono-gray-6">
                          <Link to={`/business-setup-dubai-mainland`} className="link footer-menu_item">
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
