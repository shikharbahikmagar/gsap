import React, { useState, useRef } from 'react';
import "@fontsource/playfair-display";
import gsap from 'gsap';
import hero_bg from '../assets/hero_bg.png';
import logo from '../assets/logo.png';
import plant from '../assets/plant.png';
import { useGSAP } from '@gsap/react';  
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/ModalSlice.jsx';
import ContactModal from './ContactModal.jsx';


function Header() {

  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);

  const vernav = useRef(null);

  useGSAP(() => {
  
  vernav.current = gsap.timeline({ paused: true });
    
    vernav.current.to('#menu-icon', { rotate: menuOpen ? 0 : 180, duration: 0.5 });

    //menu open
    vernav.current.to('#vertical-nav', { 

      x: 0, 
      opacity: 1, 
      duration: 0.5 
    
    });


      vernav.current.from('#nav-links li', {
        x: 800,
        stagger: 0.2,
        opacity: 0,
        duration: 1.5,
      }, '-=0.7');

  }, []);

  useGSAP(() => {


    if (menuOpen) {

      //console.log(menuOpen);

      vernav.current.play();
     
    }
    else {

      vernav.current.reverse();
      //console.log(menuOpen);
     
    }
    

  }, [menuOpen]);



// console.log(menuOpen);
  

  useGSAP(() => {
    // Set initial states using GSAP to avoid conflict with Tailwind
    gsap.set(['#logo', '#contact', '#menu-icon', '#hang_plant'], { y: -200, opacity: 0 });

    gsap.set('#vertical-nav', { x: '1000px', opacity: 0 });

    // GSAP Timeline for animation
    const tl = gsap.timeline({ defaults: { duration: 0.7 } });

    tl.to('#logo', { y: 0, opacity: 1, delay: 0.2, ease: 'bounce.out' })
      .to('#contact', { y: 0, opacity: 1, ease: 'power3.out' }, '-=0.5')
      .to('#menu-icon', { y: 0, opacity: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.5');
    
    // const hang_plant_element = hang_plant_ref.current;
    gsap.from('#hero_text h1', { 
      x: -800, 
      opacity: 0, 
      duration: 1, 
      stagger: 0.2,
      delay: 0.5 
    });
    // //mouseover effect
    // hang_plant_element.addEventListener('mouseover', () => {
    //   gsap.to(hang_plant_ref, { rotate: 360, duration: 1 });
    // });
      
     
  }, []);  // Empty dependency array ensures this runs once on component mount

  return (
    <>
     <ContactModal />

    <div className="bg-cover bg-center !w-screen h-screen overflow-hidden" style={{ backgroundImage: `url(${hero_bg})` }}>
           
      <div className="absolute h-full w-full right-0 top-0 bg-sky-950 opacity-50 z-20" onClick={() => {setMenuOpen(false)}}></div>

      {/* contact modal */}

      
      <div id='hero_text' className='flex absolute z-5' style={{top: '35%', left: '15%'}}>
        <h1 className='text-[14rem] font-playfair antialiased text-teal-100 leading-relaxed font-black tracking-widest'>G</h1>
        <h1 className='text-[14rem] font-playfair antialiased text-teal-100 leading-relaxed font-black tracking-widest'>R</h1>
        <h1 className='text-[14rem] font-playfair antialiased text-teal-100 leading-relaxed font-black tracking-widest'>O</h1>
        <h1 className='text-[14rem] font-playfair antialiased text-teal-100 leading-relaxed font-black tracking-widest'>W</h1>
      </div>

      <div id='hero_plant' className='plant z-15 absolute' style={{top: '43%', left: '30%'}}>
        <img src={plant} alt="" className='h-96 opacity-96' />
      </div>

    
      {/* nav bar */}

      <div id="nav" className="relative z-20 flex justify-between items-center p-4 md:p-5 md:pl-20 md:pr-20">
        {/* Logo */}

        <div id="logo" className="">
            <img src={logo} alt="" className='h-20'  />
        </div>


        {/* <div id="search" className="hidden md:block ml-auto text-white text-2xl"><input type="text" placeholder='search' className='bg-transparent border-2 focus:text-md focus:border-cyan-950 border-cyan-500 placeholder:text-md rounded-md justify-center text-center'/>
        </div> */}


        {/* Nav Links */}
        <div id="contact" className="md:ml-auto md:mr-52 text-white text-2xl">
           <button onClick={() => {dispatch(openModal()); }} className="bg-teal-500 p-1 pl-4 pr-4 rounded-lg hover:bg-teal-800 hover:duration-1000">Contact</button>
        </div>
        {/* Menu Icon */}
        <i id="menu-icon" onClick={() => { setMenuOpen(!menuOpen);
        }} className='ri-menu-3-line text-teal-500 text-3xl hover:text-teal-800 hover:duration-1000'></i>
      </div>

      {/* vertical nav bar */}
      <div id='vertical-nav' className='backdrop-blur-lg z-20 fixed right-0 top-0 lg:w-[500px] h-full overflow-y-auto'>

        <i onClick={() => { setMenuOpen(!menuOpen);
        }} className='ri-close-circle-fill absolute top-10 right-10 text-teal-500 text-3xl hover:text-teal-800 hover:duration-1000'></i>

        <ul id='nav-links' className='flex flex-col gap-12 m-10 text-left pt-20 text-white text-2xl'>
            <li className='border rounded-lg border-teal-500'>
              <h1 className='p-2 border border-teal-500 text-center cursor-pointer rounded-lg hover:bg-teal-800 transition-all duration-1000 hover:duration-1000'>HOME</h1>
              <p className='p-4 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam corrupti quae placeat ea et nemo rem? Minima possimus necessitatibus cupiditate debitis earum cum, veritatis, repellendus pariatur perspiciatis ducimus quidem ipsa.</p>
            </li>
            <li className='border rounded-lg border-teal-500'>
              <h1 className='p-2 border border-teal-500 text-center cursor-pointer rounded-lg hover:bg-teal-800 transition-all duration-1000 hover:duration-1000'>HOME</h1>
              <p className='p-4 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam corrupti quae placeat ea et nemo rem? Minima possimus necessitatibus cupiditate debitis earum cum, veritatis, repellendus pariatur perspiciatis ducimus quidem ipsa.</p>
            </li>
            <li className='border rounded-lg border-teal-500'>
              <h1 className='p-2 border border-teal-500 text-center cursor-pointer rounded-lg hover:bg-teal-800 transition-all duration-1000 hover:duration-1000'>HOME</h1>
              <p className='p-4 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam corrupti quae placeat ea et nemo rem? Minima possimus necessitatibus cupiditate debitis earum cum, veritatis, repellendus pariatur perspiciatis ducimus quidem ipsa.</p>
            </li>
            <li className='border rounded-lg border-teal-500'>
              <h1 className='p-2 border border-teal-500 text-center cursor-pointer rounded-lg hover:bg-teal-800 transition-all duration-1000 hover:duration-1000'>HOME</h1>
              <p className='p-4 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam corrupti quae placeat ea et nemo rem? Minima possimus necessitatibus cupiditate debitis earum cum, veritatis, repellendus pariatur perspiciatis ducimus quidem ipsa.</p>
            </li>
        </ul>
      </div>
    </div>

    </>
  );
}

export default Header;
