import React from 'react'
import ReactPlayer from 'react-player'
import conservationVideo from '../assets/videos/conservation.mp4'
import boy from '../assets/plant.png'
import boybg from '../assets/hero_bg.png'

function Conservation() {
  return (
    <div className='flex w-full bg-[#10191a]'>
    <div className='card lg:mx-24 lg:my-28 z-12 relative overflow-hidden rounded-xl cursor-pointer group'> 
    <div className='absolute w-full h-full group-hover:bg-teal-800 opacity-0 group-hover:opacity-40 transition-all duration-1000 overflow-visible'>
    </div>
        <ReactPlayer 
       url={conservationVideo}
       playing={true}
       loop={true}
       muted={true}
       width='100%'
       height='100%'
       style={{overflow: 'hidden'}}
       /> 
       {/* <div className='absolute h-full w-full top-0 left-0 relative'>
          <img src={boybg} alt="" className='object-cover top-0 left-0' />
          <img src={boy} alt="" className='object-cover h-60 top-0 left-0' />
       </div> */}
       
       <div className='absolute top-12 right-0 lg:max-w-xl mx-auto opacity-0 group-hover:opacity-100 transition-all duration-1000 p-8'>
        <p className='uppercase md:tracking-[17px] text-white pb-8'>balanced by nature</p>
         <h1 className='text-3xl text-white font-bold font-sans uppercase lg:tracking-[8px]'>Conservation</h1>
         <p className='text-white pt-4 font-sans tracking-[.5px]'>We are committed to the conservation of our planet and its wildlife. We work with local communities to protect and preserve the natural habitats of endangered species. We also support research and education programs that promote sustainable practices and environmental awareness. Our goal is to create a world where people and wildlife can coexist in harmony, and where future generations can enjoy the beauty and diversity of our planet.</p>
       </div> 
    </div>
  </div>
  )
}

export default Conservation
