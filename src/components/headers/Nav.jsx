import {
  bankingAssistance,
  homepages,
  otherPages,
  servicePages,
  shopPages,
  businessSetupInFreeZone
} from "@/data/menu";

import { Link, useLocation } from "react-router-dom";

import React from "react";

export default function Nav() {
  const { pathname } = useLocation();
  const isActive = (link) => link.split("/")[1] == pathname.split("/")[1];
  const isActiveParent = (links) => links.some((link) => isActive(link.href));
  return (
    <>
      {" "}
      <li className={`${isActiveParent(homepages) ? "current-menu" : ""} `}>
        <a href="/">Home</a>
        {/* <div className="submenu mega-menu">
          <div className="wrap-demo-item tf-grid-layout-lg lg-col-3">
            {homepages.map((item, index) => (
              <div
                key={index}
                className={`demo-item ${
                  isActive(item.href) ? "current-menu-item" : ""
                }`}
              >
                <Link to={item.href}>
                  <div className="demo-image">
                    <img
                      className="lazyload"
                      data-src={item.src}
                      src={item.src}
                      alt={item.alt}
                      width={480}
                      height={228}
                    />
                  </div>
                  <h6 className="demo-name fw-4">{item.title}</h6>
                </Link>
              </div>
            ))}
            <div className="comming-soon">
              <Link to={`/coming-soon`} className="wrap">
                <h5 className="demo-name">Coming Soon</h5>
              </Link>
            </div>
          </div>
        </div> */}
      </li>
      <li
        className={`position-relative ${
          isActiveParent(otherPages) ? "current-menu" : ""
        } `}
      >
        <a href="/business-setup-dubai-mainland">Business Setup in Dubai Mainland</a>
        {/* <ul className="submenu">
          {otherPages.map((item) => (
            <li
              key={item.href}
              className={`menu-item  ${
                isActive(item.href) ? "current-menu-item" : ""
              }`}
            >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul> */}
      </li>
      <li
        className={`has-child position-relative ${
          isActiveParent(businessSetupInFreeZone) ? "current-menu" : ""
        } `}
      >
        <a href="#">Business Setup in Free Zone</a>
        <ul className="submenu">
          {businessSetupInFreeZone.map((item) => (
            <li
              key={item.href}
              className={`menu-item  ${
                isActive(item.href) ? "current-menu-item" : ""
              }`}
            >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li
        className={`has-child position-relative ${
          isActiveParent(bankingAssistance) ? "current-menu" : ""
        } `}
      >
        <a href="#">Banking Assistance</a>
        <ul className="submenu">
          {bankingAssistance.map((item) => (
            <li
              key={item.href}
              className={`menu-item  ${
                isActive(item.href) ? "current-menu-item" : ""
              }`}
            >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={` ${isActive("/other-services") ? "current-menu" : ""} `}>
        <Link to={`/other-services`}>Other Services</Link>
      </li>
      <li
        className={` position-relative ${
          isActiveParent(shopPages) ? "current-menu" : ""
        } `}
      >
        <a href="#">Contact Us</a>
        {/* <ul className="submenu">
          {shopPages.map((item) => (
            <li
              key={item.href}
              className={`menu-item  ${
                isActive(item.href) ? "current-menu-item" : ""
              }`}
            >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul> */}
      </li>
    </>
  );
}
