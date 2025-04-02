import React, {useState, useRef, useEffect} from 'react'
import palm from '../assets/images/palm.png'
import branch from '../assets/images/branch.png'
import b1 from '../assets/images/birds/1.png'
import b2 from '../assets/images/birds/2.png'
import b3 from '../assets/images/birds/3.png'
import b4 from '../assets/images/birds/4.png'
import birdCursor from '../assets/lottie/bird_cursor.json'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Lottie from 'lottie-react'
import animationBird from '../assets/lottie/bird.json'
import Cursor from './Cursor'
gsap.registerPlugin(ScrollTrigger);



function Bird() {

    //bird lottie follow mouse position

    const cursorRef = useRef(null);

    

    useEffect(() => {
        const moveCursor = (e) => {
          gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 1, // Smooth animation
            ease: "back.out",
          });
        };
    
        window.addEventListener("mousemove", moveCursor);
    
        return () => {
          window.removeEventListener("mousemove", moveCursor);
        };
      }, []);


    const birdRef = useRef()

  const birdTitleRef = useRef()

  const birdSubTitleRef = useRef()

  const birdDescRef = useRef()



  useGSAP(() => {


    gsap.from(birdRef.current, {
          
          x: 1000,
          duration: 1.5,
          delay: 0.4,
          scrollTrigger: {
            trigger: birdRef.current,
            start: "top 50%", // Animation starts when top of element reaches bottom of viewport
            end: "top 5%",
            scrub: 4,
            markers: false,
            toggleActions: "play reverse play reverse"
          }
    
        })

    gsap.from(birdTitleRef.current, {
      
      x: -900,
      delay: 0.2,
      duration: 1.5,
      scrollTrigger: {
        trigger: birdTitleRef.current,
        start: "top 70%", // Animation starts when top of element reaches bottom of viewport
        end: "top 20%",
        scrub: 3.5,
        pin: false,
        markers: false,
      }

    })

    gsap.from(birdSubTitleRef.current, {
      
      x: 900,
      delay: 0.3,
      duration: 1.5,
      scrollTrigger: {
        trigger: birdSubTitleRef.current,
        start: "top 90%", // Animation starts when top of element reaches bottom of viewport
        end: "top 20%",
        scrub: 3.5,
        pin: false,
        markers: false,
      }

    })

    gsap.from(birdDescRef.current, {
      
      x: 900,
      delay: 0.4,
      duration: 1.5,
      scrollTrigger: {
        trigger: birdDescRef.current,
        start: "top 80%", // Animation starts when top of element reaches bottom of viewport
        end: "top 20%",
        scrub: 3.5,
        pin: false,
        markers: false,
      }

    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#bird-img",
        start: "top 80%",
        end: "top 20%",
        markers: false,
        toggleActions: "play reverse play reverse"
      }
    });
    
    tl.from("#bird-img img", {
      x: 1000,
      y: -100,
      opacity: 0,
      ease: "power2.out",
      stagger: 0.2
    }, "-=1");

  }, [])


  return (
    <>
    <div
      
      className="fixed pointer-events-none hidden"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        transform: "translate(-50%, -50%)",
        zIndex: 50,
      }}
    >
      <Lottie animationData={birdCursor} style={{ width: 100, height: 60 }} />
    </div>
    <div className='fixed top-0 left-0 w-7 h-7 rounded-full bg-yellow-200 bg-opacity-50 z-40' ref={cursorRef}></div>


    <div className='h-screen w-full relative flex bg-slate-300' id='bird-sec'>
      
     

        <div className='absolute lg:left-12 top-20 max-w-[550px]' >
          <p className='uppercase md:tracking-[17px] text-white pb-12' ref={birdTitleRef}>Restoring Nature</p>
          <h1 className='text-3xl text-white font-bold font-sans uppercase lg:tracking-[8px]' ref={birdSubTitleRef}>Afforestation</h1>
          <p className='text-white pt-8 font-sans tracking-[1px] leading-7' style={{wordSpacing: '10px'}} ref={birdDescRef}>Afforestation is the process of planting trees in areas that have not previously been forested, helping to restore ecosystems and combat climate change. It reduces carbon dioxide levels, enhances biodiversity, and improves soil quality. By creating new forests, afforestation also provides habitats for wildlife and helps prevent soil erosion. This practice is vital for maintaining a balanced and sustainable environment. Through afforestation, we can rebuild lost ecosystems and contribute to a healthier planet for future generations.</p>

        <div className='absolute flex  justify-centermt-4 mt-12' id='bird-img'>
            <img src={b1} className='max-h-[120px] bg-teal-800 rounded-full  p-2 bg-opacity-30 hover:bg-opacity-100 transition-all duration-1000 cursor-pointer' alt="" />

            <img src={b2} className='max-h-[120px] bg-teal-800 mx-8 rounded-full  p-2 bg-opacity-30 hover:bg-opacity-100 transition-all duration-1000 cursor-pointer' alt="" />

            <img src={b3} className='max-h-[120px] bg-teal-800 mx-8 rounded-full  p-2 bg-opacity-30 hover:bg-opacity-100 transition-all duration-1000 cursor-pointer' alt="" />

            <img src={b4} className='max-h-[120px] bg-teal-800 mx-8 rounded-full  p-2 bg-opacity-30 hover:bg-opacity-100 transition-all duration-1000 cursor-pointer' alt="" />
        </div>
        </div>
        <div className='absolute max-w-[50%] top-0 right-16 z-80'  id='bird' ref={birdRef}>
           <Lottie animationData={animationBird} className='max-w-[450px]'/>
        </div>
    </div>
    </>
  )
}

export default Bird