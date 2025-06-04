import {
  bankingAssistance,
  homepages,
  otherPages,
  businessSetupInFreeZone,
  shopPages,
} from "@/data/menu";

import { Link, useLocation } from "react-router-dom";

import React from "react";

export default function Mobilemenu() {
  const { pathname } = useLocation();
  const isActive = (link) => link.split("/")[1] == pathname.split("/")[1];
  const isActiveParent = (links) => links.some((link) => isActive(link.href));

  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="menu-mobile">
      <div className="offcanvas-header top-nav-mobile justify-content-between">
        <Link to={`/`} className="logo">
          <img
            alt="logo"
            src="/images/qb/questBloomTransparent.png"
            width={390}
            height={80}
          />
        </Link>
        <div className="close-menu" data-bs-dismiss="offcanvas">
          <i className="icon-times-solid" />
        </div>
      </div>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="mb-content-top">
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
               <li
                className={`nav-mb-item ${
                  isActive("/") ? "active" : ""
                }`}
              >
                <Link to={`/`} className="mb-menu-link">
                  Home
                </Link>
              </li>
              <li
                className={`nav-mb-item ${
                  isActive("/business-setup-dubai-mainland") ? "active" : ""
                }`}
              >
                <Link to={`/business-setup-dubai-mainland`} className="mb-menu-link">
                  Business Setup in Dubai Mainland
                </Link>
              </li>
              <li
                className={`nav-mb-item ${
                  isActiveParent(businessSetupInFreeZone) ? "active" : ""
                }`}
              >
                <a
                  href="#dropdown-menu-services"
                  className="collapsed mb-menu-link"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-services"
                >
                  <span>Business Setup in Free Zone</span>
                  <span className="btn-open-sub" />
                </a>
                <div
                  id="dropdown-menu-services"
                  className="collapse"
                  data-bs-parent="#menu-mobile"
                >
                  <ul className="sub-nav-menu">
                    {businessSetupInFreeZone.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          className={`sub-nav-link ${
                            isActive(item.href) ? "active" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li
                className={`nav-mb-item ${
                  isActiveParent(bankingAssistance) ? "active" : ""
                }`}
              >
                <a
                  href="#dropdown-menu-blog"
                  className="collapsed mb-menu-link"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-blog"
                >
                  <span>Banking Assistance</span>
                  <span className="btn-open-sub" />
                </a>
                <div
                  id="dropdown-menu-blog"
                  className="collapse"
                  data-bs-parent="#menu-mobile"
                >
                  <ul className="sub-nav-menu">
                    {bankingAssistance.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          className={`sub-nav-link ${
                            isActive(item.href) ? "active" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
               <li
                className={`nav-mb-item ${
                  isActive("/other-services") ? "active" : ""
                }`}
              >
                <Link to={`/other-services`} className="mb-menu-link">
                  Other Services
                </Link>
              </li>
               <li
                className={`nav-mb-item ${
                  isActive("/contact-us") ? "active" : ""
                }`}
              >
                <Link to={`/contact-us`} className="mb-menu-link">
                  Contact
                </Link>
              </li>
             
            </ul>
          </div>
          <div className="mb-other-content">
            <ul className="mb-info mb_20">
              <li>
                <p className="text_mono-gray">
                  Address:
                  <a
                    target="_blank"
                    href="https://www.google.com/maps?q=16/9,ScotlandUnitedKingdom"
                  >
                    <span className="fw-5 text_mono-gray-5">
                      Office 1004, 10th Floor, Bayswater,<br/> Business Bay, Dubai-UAE
                    </span>
                  </a>
                </p>
              </li>
              <li>
                <p className="text_mono-gray">
                  Email:
                  <a href="mailto:info@questmanagement.ae">
                    <span className="fw-5 text_mono-gray-5">
                      info@questmanagement.ae
                    </span>
                  </a>
                </p>
              </li>
              <li>
                <p className="text_mono-gray">
                  Phone:
                  <a href="tel:+97145896436">
                    <span className="fw-5 text_mono-gray-5">
                     (+971) 458 964 36
                    </span>
                  </a>
                </p>
              </li>
            </ul>
            <div className="mb-wrap-btn d-flex gap_12">
              {/* <Link to={`/pricing`} className="tf-btn">
                <span>Get Started</span>
                <span className="bg-effect" />
              </Link> */}
              <Link to={`/contact-us`} className="tf-btn">
                <span>Contact Us</span>
                <span className="bg-effect" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
