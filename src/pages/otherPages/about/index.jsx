import Contact from "@/components/common/Contact";
import Faqs from "@/components/common/Faqs";
import Testimonials from "@/components/common/Testimonials";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/otherPages/About";
import Process from "@/components/otherPages/Process";
import Team from "@/components/otherPages/Team";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
import OriginalTestimonials from "@/components/common/OriginalTestimonials";
import { counterItems3 } from "@/data/facts";
import OdometerComponent from "@/components/common/OdometerComponent";
import VariableProximity from "@/utlis/VariableProximity";
const metadata = {
  title: "About Quest Management",
  description: "About Quest Management",
};
export default function AboutPage() {
  const containerRef = useRef(null);
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="wrap-page-header" id="animated-background" >
        <Header1 />
        <div className="page-title style-default pt_90 pb_90">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_51 text-center">
                  <h1 className="text_black mb_16 letter-spacing-1">
                     <div ref={containerRef} style={{ position: "relative" }}>
                      <VariableProximity
                        label="Meet the minds of our success"
                        className="variable-proximity"
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                      />
                    </div>
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                    A dedicated team driving innovation and
                     delivering great results.
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
         <div className="tf-container tf-spacing-3 pt_90 pb_90">
        <div className="row wrap-counter">
          {counterItems3.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="counter-item style-default">
                <div className="sub-heading text_black text-uppercase mb_21">
                  {item.title}
                </div>
                <div className="counter-number mb_15">
                  <div className="odometer text_primary">
                    <OdometerComponent max={item.value} />
                  </div>
                  <span className="sub text_primary">{item.unit}</span>
                </div>
                <p className="sub-heading text_mono-gray-5">
                  {item.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < item.description.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}
