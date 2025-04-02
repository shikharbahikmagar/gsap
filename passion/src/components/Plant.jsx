import React, {useState, useRef} from 'react'
import palm from '../assets/images/palm.png'
import branch from '../assets/images/branch.png'
import p1 from '../assets/images/plants/p1.png'
import p2 from '../assets/images/plants/p2.png'
import p3 from '../assets/images/plants/p3.png'
import p4 from '../assets/images/plants/p4.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger);



function Plant() {

  const treeRef = useRef()

  const titleRef = useRef()

  const subTitleRef = useRef()

  const descRef = useRef()



  useGSAP(() => {

    gsap.from(treeRef.current, {
      
      x: -900,
      rotate: (-80),
      scrollTrigger: {
        trigger: treeRef.current,
        start: "top 90%", // Animation starts when top of element reaches bottom of viewport
        end: "top 5%",
        pin: false,
        scrub: true
      }

    })

    gsap.from(titleRef.current, {
      
      x: -900,
      delay: 0.2,
      duration: 1.5,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 70%", // Animation starts when top of element reaches bottom of viewport
        end: "top 20%",
        scrub: 4,
        pin: false,
        markers: false,
      }

    })

    gsap.from(subTitleRef.current, {
      
      x: 900,
      delay: 0.3,
      duration: 1.5,
      scrollTrigger: {
        trigger: subTitleRef.current,
        start: "top 90%", // Animation starts when top of element reaches bottom of viewport
        end: "top 20%",
        scrub: 4,
        pin: false,
        markers: false,
      }

    })

    gsap.from(descRef.current, {
      
      x: 900,
      delay: 0.4,
      duration: 1.5,
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 80%", // Animation starts when top of element reaches bottom of viewport
        end: "top 20%",
        scrub: 4,
        pin: false,
        markers: false,
      }

    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#plant-img",
        start: "top 80%",
        end: "top 20%",
        markers: false,
        toggleActions: "play reverse play reverse"
      }
    });
    
    tl.from("#plant-img img", {
      x: 1000,
      y: -100,
      opacity: 0,
      rotation: 15, // Slight rotation
      ease: "power2.out",
      stagger: 0.2
    }, "-=1");

  }, [])


  return (
    <div className='h-screen w-full relative flex bg-green-800' id='plant-sec'>
        <div className='absolute max-w-[50%] left-[-100px] z-80'  id='tree'>
            <img src={branch} alt="" ref={treeRef}/>
        </div>

        <div className='absolute lg:right-40 top-20 max-w-[550px]' >
          <p className='uppercase md:tracking-[17px] text-white pb-12' ref={titleRef}>Restoring Nature</p>
          <h1 className='text-3xl text-white font-bold font-sans uppercase lg:tracking-[8px]' ref={subTitleRef}>Afforestation</h1>
          <p className='text-white pt-8 font-sans tracking-[1px] leading-7' style={{wordSpacing: '10px'}} ref={descRef}>Afforestation is the process of planting trees in areas that have not previously been forested, helping to restore ecosystems and combat climate change. It reduces carbon dioxide levels, enhances biodiversity, and improves soil quality. By creating new forests, afforestation also provides habitats for wildlife and helps prevent soil erosion. This practice is vital for maintaining a balanced and sustainable environment. Through afforestation, we can rebuild lost ecosystems and contribute to a healthier planet for future generations.</p>

        <div className='absolute flex  justify-centermt-4 mt-12' id='plant-img'>
            <img src={p1} className='max-h-[120px] bg-teal-800 rounded-full  p-2 bg-opacity-30 hover:bg-opacity-100 transition-all duration-1000 cursor-pointer' alt="" />

            <img src={p2} className='max-h-[120px] bg-teal-800 mx-8 rounded-full  p-2 bg-opacity-30 hover:bg-opacity-100 transition-all duration-1000 cursor-pointer' alt="" />

            <img src={p3} className='max-h-[120px] bg-teal-800 mx-8 rounded-full  p-2 bg-opacity-30 hover:bg-opacity-100 transition-all duration-1000 cursor-pointer' alt="" />

            <img src={p4} className='max-h-[120px] bg-teal-800 mx-8 rounded-full  p-2 bg-opacity-30 hover:bg-opacity-100 transition-all duration-1000 cursor-pointer' alt="" />
        </div>
        </div>




    </div>
  )
}

export default Plant