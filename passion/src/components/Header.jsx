import React, { useState } from 'react';
import gsap from 'gsap';
import hb from '../assets/hb3.jpg';
import { useGSAP } from '@gsap/react';

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {

    setMenuOpen(!menuOpen);

    const vernav = gsap.timeline();

    vernav.to('#menu-icon', { rotate: menuOpen ? 0 : 180, duration: 0.5 });

    if (menuOpen) {

      console.log(menuOpen);
      
      vernav.to('#vertical-nav', { x: 0, opacity: 1, duration: 0.5 });
    }
    else {

      console.log(menuOpen);
      vernav.to('#vertical-nav', { x: '1000px', opacity: 0, duration: 0.5 });
    }
    
  }



// console.log(menuOpen);
  

  useGSAP(() => {
    // Set initial states using GSAP to avoid conflict with Tailwind
    gsap.set(['#logo', '#contact', '#menu-icon'], { y: -200, opacity: 0 });

    gsap.set('#vertical-nav', { x: '1000px', opacity: 0 });

    // GSAP Timeline for animation
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

    tl.to('#logo', { y: 0, opacity: 1, delay: 0.2 })
      .to('#contact', { y: 0, opacity: 1 }, '-=0.5')
      .to('#menu-icon', { y: 0, opacity: 1 }, '-=0.5'); 
      
     
  }, []);  // Empty dependency array ensures this runs once on component mount

  return (
    <div className="bg-cover relative bg-center h-screen" style={{ backgroundImage: `url(${hb})` }}>
      <div className="absolute h-full w-full left-0 top-0 bg-fuchsia-950 opacity-30 z-10"></div>
      <div id="nav" className="relative z-20 flex justify-between p-10 pl-20 pr-20">
        {/* Logo */}
        <div id="logo" className="bg-green-400 p-2 rounded-full">
          <a href="#">Logo</a>
        </div>

        {/* Nav Links */}
        <div id="contact" className="hidden md:flex gap-20 ml-auto mr-52 text-white text-2xl">
          <a href="#" className="bg-purple-500 p-1 pl-4 pr-4 rounded-xl hover:bg-purple-800 hover:duration-1000">Contact</a>
        </div>

        {/* Menu Icon */}
        <i id="menu-icon" onClick={handleMenuClick} className={` ${menuOpen ? 'ri-close-circle-fill' : 'ri-menu-3-line'} text-purple-500 hidden md:flex text-3xl hover:text-purple-800 hover:duration-1000`}></i>
      </div>
      <div id='vertical-nav' className='backdrop-blur-lg z-10 absolute right-0 top-0 w-[40%] h-full'>

        <ul id='nav-links' className='flex flex-col gap-12 m-10 text-left pt-20 text-white text-2xl'>
          <li><h1>Home</h1></li>
          <li><h1>About</h1></li>
          <li><h1>Services</h1></li>
          <li><h1>Portfolio</h1></li>
          <li><h1>Contact</h1></li>

        </ul>

      </div>
    </div>
  );
}

export default Header;
