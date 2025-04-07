import React, { useState, useRef } from 'react'
import tigerbg from '../assets/images/tigerbg.jpg'
import tiger_bg from '../assets/images/tiger_bg.jpg'
import tiger from '../assets/images/tiger.png'
import bg_cons from '../assets/images/back_conservation.jpg'
import bg_cons1 from '../assets/images/bg-cons.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { log } from 'react-modal/lib/helpers/ariaAppHider'
import Conservation from './Conservation'
 
function Tiger() {

  const [tigermouseover, setTigerMouseOver] = useState(false);

  const tlRef = useRef();

  const handleMouseOver = () => {

    setTigerMouseOver(true)
  }

  const handleMouseOut = () => {
    setTigerMouseOver(false)
  }

  useGSAP(() => {

    tlRef.current = gsap.timeline({ paused: true })


    gsap.set('.tiger-text', {x: 0, opacity: 1, });

    gsap.set('#wall', { filter: 'blur(0px)' });

  
    tlRef.current.from(".tiger-text", {

      x: 800,
      delay: .5,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
    })

    .to('#wall', {

      filter: 'blur(8px)',
      duration: 1,
    }, 0)
    
    
    
  })

  useGSAP(() => {

    if(tigermouseover)
      {
       
        tlRef.current.play();
         
      }else
      {
  
     
        tlRef.current.reverse();      
      }
  

  }, [tigermouseover])

  useGSAP(() => {

    gsap.from("#vd-title", {
      x: -100,
      y: -100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#vd-title",
        start: "top 10%",
        end: "top 5%",
        scrub: 4,
        pin: false,
        markers: false,
        toggleActions: "play reverse play reverse"
      }
    })
    gsap.from("#vd-desc", {
          x: 100,
          y: -100,
          opacity: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: "#vd-desc",
            start: "top 40%",
            end: "top 5%",
            scrub: 4,
            pin: false,
            markers: false,
            toggleActions: "play reverse play reverse"
          }
        })

        gsap.from("#vd-line", {
          x: 1000,
          opacity: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: "#vd-line",
            start: "top 40%",
            end: "top 5%",
            pin: false,
            markers: false,
            toggleActions: "play reverse play reverse"
          }
        })

  })


 //console.log(tigermouseover);
  

  return (
    <>
    <div className="w-full h-full bg-green-900 flex flex-col items-center justify-center p-4 py-4 text-center space-y-6">
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide" id='vd-title'>Nature's Whisper</h1>
      <p className="text-white max-w-2xl text-lg md:text-xl font-light leading-relaxed" id='vd-desc'>
        Immerse yourself in the beauty of nature with every frame. A serene escape that reminds us to slow down and appreciate the world around us.
      </p>
      <div className="mt-4 w-24 h-1 bg-green-400 rounded-full" id='vd-line'></div>
    </div>
      <div className='min-h-full flex justify-center w-full object-cover relative bg-green-900'  
     >
     

        <div className='absolute h-full w-full'></div>
      <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} className='card relative mx-8 my-28 h-full group rounded-2xl cursor-pointer overflow-hidden max-w-[500px]' >

        <div className='absolute right-0 max-w-sm p-12 z-20 tiger-text' >
        <p className='uppercase md:tracking-[17px] text-white pb-8'>balanced by nature</p>
        <h1 className='text-3xl text-white font-bold font-sans uppercase lg:tracking-[8px]'>Conservation</h1>
        <p className='text-white pt-4 font-sans tracking-[.5px]'>Conservation is essential for protecting ecosystems and natural resources. By taking action today, we ensure a sustainable and healthy planet for future generations.</p>
          </div>
          
          <img src={tigerbg} className='object-cover h-full w-full' alt="" id='wall'/>
      </div>

      <Conservation />
    </div>
    </>
    
  )
}

export default Tiger