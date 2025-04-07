import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import back from '../assets/images/hero/back.png';
import front from '../assets/images/hero/front.png';
import "@fontsource/playfair-display";


gsap.registerPlugin(MotionPathPlugin);

const Test = () => {
  const backRef = useRef(null);
 
  const frontRef = useRef(null);

  const heroRef = useRef(null);

  const textRef = useRef(null);

  useGSAP(() => {
 
    gsap.from(frontRef.current, {

      y: 100,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: frontRef.current,
        start: "top 5%",
        end: "bottom 50%",
        scrub: 1,
        pin: false,
        markers: false,
        toggleActions: "play reverse play reverse",
      }, 

  });


      gsap.from(backRef.current, {

        y: -500,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 50%",
          end: "bottom 82%",
          scrub: 1,
          pin: false,
          markers: false,
          toggleActions: "play reverse play reverse"
        }, 

    })
  
});  
  

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-green-900" ref={heroRef}>
        <p className="absolute w-full h-full z-20 text-[100px] font-playfair text-[#7e2732] uppercase top-[45%] left-[45%]" ref={textRef}>In the Heart <br /> of Nature</p>
        <img src={front} alt="back" className="absolute w-full h-full object-cover z-40" ref={frontRef}/>
        <img src={back} alt="front" className="absolute w-full h-full object-cover " ref={backRef}/>
      </div>
      <div className="min-h-screen bg-green-900 z-80">

      </div>
    </>
  );
};

export default Test;
