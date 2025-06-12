import {
  bankingAssistance,
  homepages,
  otherPages,
  servicePages,
  shopPages,
  businessSetupInFreeZone,
  freezones2,
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
        <Link to="/">Home</Link>
      </li>
      {/* <li
        className={`position-relative ${
          isActiveParent(otherPages) ? "current-menu" : ""
        } `}
      >
        <a href="/business-setup-dubai-mainland">
          Business Setup
        </a>
      </li> */}
      <li
        className={` position-relative ${
          isActiveParent(shopPages) ? "current-menu" : ""
        } `}
      >
        <a href="/about">Who we are</a>
      </li>
      <li
        className={`has-child ${
          isActiveParent(homepages) ? "current-menu" : ""
        } `}
      >
        <a href="#">Business Setup</a>
        {/* <div className="submenu mega-menu" style={{width:"38%"}}>
          <div  className={`single-item-grid`}> */}
        <div className="submenu mega-menu" style={{width:"50%"}}>
          <div className="wrap-demo-item tf-grid-layout-lg lg-col-2">
            {homepages.map((item, index) => (
              <div
                key={index}
                className={`demo-item pb-2 ${
                  isActive(item.href) ? "current-menu-item" : ""
                }`}
              >
                <Link to={item.href}>
                  <div className="demo-image mb-3">
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
          </div>
        </div>
      </li>
      <li
        className={`has-child ${
          isActiveParent(homepages) ? "current-menu" : ""
        } `}
      >
        <a href="#">Free Zones</a>
        <div
          className="submenu mega-menu"
          style={{ height: "auto", overflow: "auto" ,width:"80%"}}
        >
          <div className="wrap-demo-item tf-grid-layout-lg lg-col-4">
            {freezones2.map((item, index) => (
              <div
                key={index}
                className={`demo-item pb-2 ${
                  isActive(item.href) ? "current-menu-item" : ""
                }`}
              >
                <Link to={item.href}>
                  <div className="demo-image mb-3">
                    <img
                      className="lazyload"
                      data-src={item.src}
                      src={item.src}
                      alt={item.alt}
                      // width={480}
                      width={300}
                      // height={228}
                      height={143}
                      style={{ height: 200, borderRadius: 15 }}
                    />
                  </div>
                  <h6 className="demo-name fw-4">{item.title}</h6>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </li>

      {/* <li
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
      </li> */}

<li
        className={`has-child ${
          isActiveParent(bankingAssistance) ? "current-menu" : ""
        } `}
      >
        <a href="#">Banking Assistance</a>
        <div className="submenu mega-menu" style={{width:"50%", left:200}}>
          <div className="wrap-demo-item tf-grid-layout-lg lg-col-2">
            {bankingAssistance.map((item, index) => (
              <div
                key={index}
                className={`demo-item pb-2 ${
                  isActive(item.href) ? "current-menu-item" : ""
                }`}
              >
                <Link to={item.href}>
                  <div className="demo-image mb-3">
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
          </div>
        </div>
      </li>



      <li className={` ${isActive("/other-services") ? "current-menu" : ""} `}>
        <Link to={`/other-services`}>Our Services</Link>
      </li>
      <li
        className={` position-relative ${
          isActiveParent(shopPages) ? "current-menu" : ""
        } `}
      >
        <a href="/contact-us">Contact Us</a>
      </li>
    </>
  );
}
