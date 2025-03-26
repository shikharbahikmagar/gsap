import React from 'react'
import ReactPlayer from 'react-player'
import conservationVideo from '../assets/videos/conservation.mp4'

function Conservation() {
  return (
   <div className='flex justify-center bg-[#10191a]'>
     <div className='card lg:mx-24 lg:my-24 text-center relative overflow-hidden'> 
     <div className='absolute top-0 w-full h-full bg-blue z-10'></div>
        {/* <ReactPlayer 
        url={conservationVideo}
        playing={true}
        loop={true}
        muted={true}
        width='100%'
        height='100%'
        style={{overflow: 'hidden', borderRadius: '10px'}}
        /> */}
      
        {/* <div className='absolute top-40'>
          <h1 className='text-3xl text-white font-bold'>Conservation</h1>
          <p className='text-white'>We are committed to the conservation of our planet and its wildlife. We work with local communities to protect and preserve the natural habitats of endangered species. We also support research and education programs that promote sustainable practices and environmental awareness. Our goal is to create a world where people and wildlife can coexist in harmony, and where future generations can enjoy the beauty and diversity of our planet.</p>
        </div> */}
      </div>
   </div>
  )
}

export default Conservation
