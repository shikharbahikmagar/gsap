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
      stagger: true,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
    })

    .to('#wall', {

      filter: 'blur(8px)',
      stagger: true,
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

 //console.log(tigermouseover);
  

  return (
    <div className='min-h-full flex justify-center w-full object-cover relative'  
     style={{
      backgroundImage: `url(${bg_cons1})`,
      backgroundSize: 'cover',       // Ensures the background image covers the whole div
      backgroundPosition: 'center',  // Centers the background image
      backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    }}>
        <div className='absolute h-full w-full backdrop-blur-sm'></div>
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
  )
}

export default Tiger