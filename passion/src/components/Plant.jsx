import React from 'react'
import palm from '../assets/images/palm.png'
import branch from '../assets/images/branch.png'
import b1 from '../assets/images/birds/1.png'
import b2 from '../assets/images/birds/2.png'
import b3 from '../assets/images/birds/3.png'
import b4 from '../assets/images/birds/4.png'




function Plant() {
  return (
    <div className='h-screen w-full relative flex bg-slate-300'>
        <div className='absolute max-w-[50%] left-[-100px]'>
            <img src={branch} alt="" />
        </div>

        <div className='absolute lg:right-40 top-20 max-w-[550px]'>
        <p className='uppercase md:tracking-[17px] text-white pb-12'>Restoring Nature</p>
        <h1 className='text-3xl text-white font-bold font-sans uppercase lg:tracking-[8px]'>Afforestation</h1>
        <p className='text-white pt-8 font-sans tracking-[1px] leading-7' style={{wordSpacing: '10px'}}>Afforestation is the process of planting trees in areas that have not previously been forested, helping to restore ecosystems and combat climate change. It reduces carbon dioxide levels, enhances biodiversity, and improves soil quality. By creating new forests, afforestation also provides habitats for wildlife and helps prevent soil erosion. This practice is vital for maintaining a balanced and sustainable environment. Through afforestation, we can rebuild lost ecosystems and contribute to a healthier planet for future generations.</p>

        <div className='absolute flex  justify-centermt-4 mt-12'>
            <img src={b1} className='max-h-[120px] bg-teal-800 rounded-full  p-2 bg-opacity-30' alt="" />

            <img src={b2} className='max-h-[120px] bg-teal-800 mx-8 rounded-full  p-2 bg-opacity-30' alt="" />

            <img src={b3} className='max-h-[120px] bg-teal-800 mx-8 rounded-full  p-2 bg-opacity-30' alt="" />

            <img src={b4} className='max-h-[120px] bg-teal-800 mx-8 rounded-full  p-2 bg-opacity-30' alt="" />
        </div>
        </div>




    </div>
  )
}

export default Plant