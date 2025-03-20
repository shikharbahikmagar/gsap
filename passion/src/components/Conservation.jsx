import React from 'react'
import ReactPlayer from 'react-player'
import conservationVideo from '../assets/videos/conservation.mp4'

function Conservation() {
  return (
   <div className='flex justify-center'>
     <div className='card m-5 p-5'> 
        <ReactPlayer 
        url={conservationVideo}
        playing={true}
        loop={true}
        muted={true}


        />
      
    </div>
   </div>
  )
}

export default Conservation
