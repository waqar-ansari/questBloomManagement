import { mapLocations } from "@/data/locations";
import VariableProximity from "@/utlis/VariableProximity";
import React, { useRef } from "react";

export default function OfficeLocations() {
  const containerRef = useRef(null);
  return (
    <div className="section-map tf-spacing-6 pt_90 pb_90">
      <div className="tf-container">
        <div className="heading-seciton mb_60">
          <h2 className="heading-title">
            <div ref={containerRef} style={{ position: "relative" }}>
                      <VariableProximity
                        label="Visit Our Office"
                        className="variable-proximity"
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                      />
                    </div>
          </h2>
        </div>
        <div className="tf-grid-layout lg-col-2">
          {mapLocations.map((item, index) => (
            <div key={index} className="map-item">
              <iframe
                className="map"
                src={item.src}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* <ul className="info d-grid gap_11">
                <li>
                  <h6 className="text_primary">Location</h6>
                  <p className="text-body-2">{item.location}</p>
                </li>
                <li>
                  <h6 className="text_primary">Phone</h6>
                  <p className="text-body-1">{item.phone}</p>
                </li>
                <li>
                  <h6 className="text_primary">Email</h6>
                  <a href="#" className="link text-body-1">
                    {item.email}
                  </a>
                </li>
              </ul> */}

            </div>
          ))}

          {mapLocations.map((item, index) => (
            <div key={index} className="map-item">
              {/* <iframe
                className="map"
                src={item.src}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              /> */}
              <ul className="info d-grid gap_11">
                <li>
                  <h6 className="text_primary">Location</h6>
                  <p className="text-body-2">{item.location}</p><br />
                  <p>Monday – Friday: 8.30AM to 8.00PM</p>
                  <p>Saturday: 10.00AM to 4.00PM</p>
                </li>
                <li>
                  <h6 className="text_primary">Phone</h6>
                  <p className="text-body-1">{item.phone}</p>
                </li>
                <li>
                  <h6 className="text_primary">Email</h6>
                  <a href="#" className="link text-body-1">
                    {item.email}
                  </a>
                </li>
                
              </ul>

            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}
