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

      
      <div id='hero_text' className='flex absolute z-5 top-[45%] left-[5%] md:top-[38%] md:left-[12%] lg:top-[38%] lg:left-[15%]'>
        <h1 className='text-[7rem] md:text-[10rem] lg:text-[14rem] font-playfair antialiased text-teal-100 leading-relaxed font-black tracking-[25px] md:tracking-widest'>G</h1>
        <h1 className='text-[7rem] md:text-[10rem] lg:text-[14rem] font-playfair antialiased text-teal-100 leading-relaxed font-black tracking-[25px] md:tracking-widest'>R</h1>
        <h1 className='text-[7rem] md:text-[10rem] lg:text-[14rem] font-playfair antialiased text-teal-100 leading-relaxed font-black tracking-[25px] md:tracking-widest'>O</h1>
        <h1 className='text-[7rem] md:text-[10rem] lg:text-[14rem] font-playfair antialiased text-teal-100 leading-relaxed font-black tracking-[25px] md:tracking-widest'>W</h1>
      </div>

      <div id='hero_plant' className='plant z-15 absolute top-[47%] left-[20%] md:top-[40%] md:left-[25%] lg:top-[43%] lg:left-[30%]'>
        <img src={plant} alt="" className='h-60 lg:h-96 md:h-80 opacity-96' />
      </div>

    
      {/* nav bar */}

      <div id="nav" className="relative z-20 flex justify-between items-center p-4 md:p-5 md:pl-20 md:pr-20">
        {/* Logo */}

        <div id="logo" className="cursor-pointer">
            <img src={logo} alt="" className='h-20'  />
        </div>


        {/* <div id="search" className="hidden md:block ml-auto text-white text-2xl"><input type="text" placeholder='search' className='bg-transparent border-2 focus:text-md focus:border-cyan-950 border-cyan-500 placeholder:text-md rounded-md justify-center text-[1rem]nter'/>
        </div> */}


        {/* Nav Links */}
        <div id="contact" className="md:ml-auto md:mr-52 cursor-pointer text-white text-2xl">
           <button onClick={() => {dispatch(openModal()); }} className="bg-teal-500 p-1 pl-4 pr-4 rounded-lg hover:bg-teal-800 hover:duration-1000">Contact</button>
        </div>
        {/* Menu Icon */}
        <i id="menu-icon" onClick={() => { setMenuOpen(!menuOpen);
        }} className='ri-menu-3-line cursor-pointer text-teal-500 text-3xl hover:text-teal-800 hover:duration-1000'></i>
      </div>

      {/* vertical nav bar */}
      <div id='vertical-nav' className='backdrop-blur-lg z-20 fixed right-0 top-0 lg:w-[500px] h-full overflow-y-auto'>

        <i onClick={() => { setMenuOpen(!menuOpen);
        }} className='ri-close-circle-fill cursor-pointer absolute top-10 right-10 text-teal-500 text-3xl hover:text-teal-800 hover:duration-1000'></i>

        <ul id='nav-links' className='flex flex-col gap-12 mt-8 m-6 p-10 text-left pt-20 text-white text-2xl'>
        <li className='border rounded-lg border-teal-500'>
          <h1 className='text-teal-300 p-2 font-serif tracking-wider uppercase group border md:text-[1.2rem] hover:text-teal-100 border-teal-500 text-center cursor-pointer rounded-lg hover:bg-teal-800 transition-all duration-500'>Home <span><i class="group-hover:text-teal-100 transition-all duration-500 text-teal-300 ri-home-4-line"></i></span></h1>
          <p className='p-6 text-center text-[1rem] text-teal-100'>Discover our mission to celebrate and protect the wonders of nature.</p>
          </li>

          <li className='border rounded-lg border-teal-500'>
            <h1 className='text-teal-300 p-2 font-serif tracking-wider uppercase group border md:text-[1.2rem] hover:text-teal-100 border-teal-500 text-center cursor-pointer rounded-lg hover:bg-teal-800 transition-all duration-500'>Conservation <span><i class="group-hover:text-teal-100 transition-all duration-500 text-teal-300 ri-seedling-line"></i>
            </span></h1>
            <p className='p-4 text-center text-[1rem] text-teal-100'>Learn about our efforts to preserve biodiversity and natural habitats.</p>
          </li>

          <li className='border rounded-lg border-teal-500'>
            <h1 className='text-teal-300 p-2 font-serif tracking-wider uppercase group border md:text-[1.2rem] hover:text-teal-100 border-teal-500 text-center cursor-pointer rounded-lg hover:bg-teal-800 transition-all duration-500'>Sustainability <span><i class="group-hover:text-teal-100 transition-all duration-500 text-teal-300 ri-recycle-line"></i>
            </span></h1>
            <p className='p-4 text-center text-[1rem] text-teal-100'>Join us in adopting sustainable practices to protect the Earth.</p>
          </li>

          <li className='border rounded-lg border-teal-500'>
            <h1 className='text-teal-300 p-2 font-serif tracking-wider uppercase group border md:text-[1.2rem] hover:text-teal-100 border-teal-500 text-center cursor-pointer rounded-lg hover:bg-teal-800 transition-all duration-500'>Wild-Life <span><i class="group-hover:text-teal-100 transition-all duration-500 text-teal-300 ri-bear-smile-line"></i>
            </span></h1>
            <p className='p-4 text-center text-[1rem] text-teal-100'>Explore the diverse species that inhabit our planet and how to protect them.</p>
          </li>

        </ul>
      </div>
    </div>

    </>
  );
}

export default Header;
