import Contact from "@/components/common/Contact";
import Faqs from "@/components/common/Faqs";
import Testimonials from "@/components/common/Testimonials";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/otherPages/About";
import Process from "@/components/otherPages/Process";
import Team from "@/components/otherPages/Team";
import React from "react";
import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
import OriginalTestimonials from "@/components/common/OriginalTestimonials";
const metadata = {
  title: "About Quest Management",
  description: "About Quest Management",
};
export default function AboutPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header">
        <Header1 />
        <div className="page-title style-default">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_51">
                  <h1 className="text_black mb_16 letter-spacing-1">
                    Meet the minds our success
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                    A dedicated team driving innovation and
                    <br /> delivering great results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <Testimonials />

        <About />
        <Team />
        <OriginalTestimonials />
        {/* <Process /> */}
        {/* <Faqs parentClass="section-faqs style-1 tf-spacing-8" /> */}
        {/* <Contact /> */}
      </div>
      <Footer1 />
    </>
  );
}
