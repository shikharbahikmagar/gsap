import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const Test = () => {
  const birdRef = useRef(null);

  useEffect(() => {
    gsap.to(birdRef.current, {
      duration: 5,
      motionPath: {
        path: [
          { x: 100, y: 150 },
          { x: 300, y: 50 },
          { x: 500, y: 100 },
          { x: 700, y: 0 }
        ],
        curviness: 1.5,
        autoRotate: true
      },
      ease: "power1.inOut"
    });
  }, []);

  return (
    <svg width="800" height="400">
      <path
        d="M100,150 C300,50 500,100 700,0"
        stroke="transparent"
        fill="none"
      />
      <g ref={birdRef}>
        {/* Replace with your bird SVG or image */}
        <circle cx="0" cy="0" r="20" fill="blue" />
      </g>
    </svg>
  );
};

export default Test;
