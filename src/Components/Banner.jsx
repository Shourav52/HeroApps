import React from 'react'
import gplay from '../assets/pstore.png'
import appstore from '../assets/astore.png'
import bannerimg from '../assets/hero.png'
const Banner = () => {
  return (
    <div className='mt-15'>
     <div className='text-center px-4'>
         <h1 className='text-4xl font-bold '>We Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '>Productive</span> Apps</h1>
         <p className='text-gray-500 mt-5'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
     </div>
     <div className='flex justify-center gap-5 mt-10'>
      <a target='_blank' href="https://play.google.com/store/games">
      <button className='bg-gray-200 btn pl-4 pr-4 pt-5  pb-5 flex items-center gap-2'>
            <img className='w-6 h-6' src={gplay} alt="" />
            Google Play
            </button>
      </a>
        <a target='_blank' href="https://www.apple.com/app-store/">
        <button className='bg-gray-200 btn pl-6 pr-6 pt-5  pb-5 flex items-center gap-2'>
            <img className='w-6 h-6' src={appstore} alt="" />
            App Store
            </button>
        </a>
        
     </div>
     <div className='mt-10 flex justify-center p-5'>
        <img src={bannerimg} alt="" />
     </div>
      
      <div className='w-full h-[270px]  bg-gradient-to-b from-[#632EE3] to-[#9F62F2] flex flex-col  justify-center p-5  mt-10 items-center md:px-[100px]'>
        <h2 className='text-white text-center text-3xl font-bold '>Trusted by Millions, Built for You</h2>
        <div className='flex justify-around w-full mt-10 md:px-20  gap-5'>
            <div className='text-center text-white '>
                <p className='text-[12px] text-gray-300 mb-2'>Total Downloads</p>
                <h4 className='text-4xl font-extrabold mb-2'>29.6M</h4>
                <p className='text-[12px] text-gray-300'>21% More Than Last Month</p>
            </div>
            <div className='text-center text-white'>
                <p className='text-[12px] text-gray-300 mb-2'>Total Reviews</p>
                <h4 className='text-4xl font-extrabold mb-2'>906K</h4>
                <p className='text-[12px] text-gray-300'>46% More Than Last Month</p>
            </div>
            <div className='text-center text-white'>
                <p className='text-[12px] text-gray-300 mb-2'>Active Apps</p>
                <h4 className='text-4xl font-extrabold mb-2'>132+</h4>
                <p className='text-[12px] text-gray-300'>31 More Will Launch</p>
            </div>
        </div>
             
      </div>
    </div>
  )
}

export default Banner
