import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { teamMembers } from "@/data/team";
import VariableProximity from "@/utlis/VariableProximity";
export default function Team() {
  const containerRef = useRef(null);
  return (
    <div className="section-team style-1 tf-spacing-6 pt_90">
      <div className="tf-container">
        <div className="heading-secion mb_60">
          <h2 className="heading-title split-text effect-right">
             <div ref={containerRef} style={{ position: "relative" }}>
                      <VariableProximity
                        label="Dedicated Team"
                        className="variable-proximity"
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                      />
                    </div>
          </h2>
          <p
            className="text-body-1 text_mono-gray-7 mt_20 wow animate__fadeInUp animate__animated"
            data-wow-delay="0s"
          >
            {/* Our dedicated members actively participate in our community, sharing
            expertise, <br />
            collaborating on projects, and supporting one another. */}
            Professional Individuals

          </p>
        </div>
        <div className="tf-grid-layout-2 lg-col-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-item style-default hover-border hover-image"
            >
              <div className="img-style mb_19">
                <div className="w-full aspect-square overflow-hidden rounded-full" style={{ maxHeight: "555px" }}>

                  <img alt="avatar" src={member.image} className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div className="content">
                <h3 className="name">
                  <div className="link hover-line-text">
                    {member.name}
                  </div>
                </h3>
                <p className="text-body-1">{member.role}</p>
              </div>
            </div>
          ))}
          {/* {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-item style-default hover-border hover-image"
            >
              <div className="img-style mb_19">
                <div className="w-full aspect-square overflow-hidden rounded-full">

                  <img alt="avatar" src={member.image} className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div className="content">
                <h3 className="name">
                  <div className="link hover-line-text">
                    {member.name}
                  </div>
                </h3>
                <p className="text-body-1">{member.role}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
