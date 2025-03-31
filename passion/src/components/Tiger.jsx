import React, { useState, useRef } from 'react'
import tigerbg from '../assets/images/tigerbg.jpg'
import tiger_bg from '../assets/images/tiger_bg.jpg'
import tiger from '../assets/images/tiger.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { log } from 'react-modal/lib/helpers/ariaAppHider'
 
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


    gsap.set('#tiger-text', {x: 0, opacity: 1 });

    gsap.set('#wall', { filter: 'blur(0px)' });

  
    tlRef.current.from("#tiger-text", {

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

 console.log(tigermouseover);
  

  return (
    <div className='min-h-full flex justify-center w-full bg-[#1f3638]'>
      <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} className='card relative mx-28 my-28 h-full group rounded-2xl cursor-pointer overflow-hidden max-w-[600px]' >
        <div className='h-full w-full z-10 absolute transition-all duration-700'>

        </div>
        <div className='absolute p-12 z-20'>
          <p className='text-white' id='tiger-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, soluta velit. Adipisci eius ea esse dolorem. Quia obcaecati hic laboriosam harum quos modi temporibus, earum assumenda labore vero iure fuga!</p>
          </div>
          
          <img src={tigerbg} className='object-cover h-full w-full' id='wall' alt="" />
      </div>
    </div>
  )
}

export default Tiger