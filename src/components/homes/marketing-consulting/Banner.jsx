import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Banner() {
  useEffect(() => {
    // Select all elements with the class "text-container" inside ".banner-stripe"
    const textContainers = document.querySelectorAll(
      ".banner-stripe .text-container"
    );

    textContainers.forEach((container) => {
      const settings = {
        scrollTrigger: {
          trigger: container,
          start: "top bottom", // Animation starts when the top of the element hits the bottom of the viewport
          end: "bottom top", // Animation ends when the bottom of the element hits the top of the viewport
          scrub: 1, // Smooth scrubbing effect
          markers: false, // Disable debug markers
        },
        ease: "none", // No easing
      };

      // Check if the element has the class "effect-left" or "effect-right"
      if (container.classList.contains("effect-left")) {
        settings.x = "-7%"; // Move left by 7%
      }
      if (container.classList.contains("effect-right")) {
        settings.x = "7%"; // Move right by 7%
      }

      // Apply the GSAP animation
      gsap.to(container, settings);
    });

    // Cleanup ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array ensures this runs only once after mount
  return (
    <div className="banner-stripe tf-spacing-43">
      <div className="text-container scrolling-text effect-right">
        <span className="banner-text text-display-2 text_mono-gray-5">
          Email
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          <i className="icon-Star-2" />
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          Business
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          <i className="icon-Star-2" />
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          Marketing
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          <i className="icon-Star-2" />
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          Consulting
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          <i className="icon-Star-2" />
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          Money
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          <i className="icon-Star-2" />
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          Email
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          <i className="icon-Star-2" />
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          Business
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          <i className="icon-Star-2" />
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          Marketing
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          <i className="icon-Star-2" />
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          Consulting
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          <i className="icon-Star-2" />
        </span>
        <span className="banner-text text-display-2 text_mono-gray-5">
          Money
        </span>
      </div>
    </div>
  );
}
