import { all } from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';
import useapps from '../hooks/useapps';
import icon from '../assets/icon-downloads.png'
import ratingicon from '../assets/icon-ratings.png'
import reviewsicon from '../assets/icon-review.png'
import {toast} from 'react-hot-toast';

const AppsDetails = () => {
  const {id} = useParams();
  const [allapps,loading, error] = useapps();
  const [isInstalled, setInstalled] =useState(false);
  const allapp = allapps.find(a=>  String(a.id) === (id));
  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem('installList'))
    const alreadyInstalled = installedApps?.some(app => app.id === allapp?.id);
    if (alreadyInstalled) {
      setInstalled(true);
    }
  }, [allapp])
  if(loading)
    return <div>Loading...</div>
  const {title, companyName, description, image,downloads,ratingAvg,reviews,size} = allapp;
  
   const hendelAddToInstall = ()=> {
    const installedApps = JSON.parse(localStorage.getItem('installList')) || [];
    const alreadyInstalled = installedApps?.some(app => app.id === allapp.id);
    if(alreadyInstalled){
      toast.error(`${title} is already installed`);
      setInstalled(true);
      return;
    }
    const updatedApps = [...installedApps, allapp];
    localStorage.setItem('installList', JSON.stringify(updatedApps));
    toast.success(`${title} installed Successfully`);
    setInstalled(true);
   }

  return (
 <div className=''>
   <div className=' w-full mt-10 border-b border-gray-300 pb-10 '>
    <div className='flex items-center md:flex-row flex-col gap-10'>
      <div className='pr-5'>
        <img className='object-cover w-[370px] h-[255px] border border-gray-200' src={image} alt="" />
      </div>
      <div className='w-full'>
      <div className='mb-5'> 
          <h2 className="card-title font-bold text-2xl">{title}</h2>
        <p className='text-sm text-gray-500'>Devoloped by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '>{companyName}</span></p>
      </div>
        <div className='flex border-t border-gray-300 pt-5 gap-15 md:flex-row flex-col'>
          <div>
            <img className='w-6 mb-2' src={icon} alt="" />
            <p className='text-sm text-gray-500 mb-2'>Downloads</p>
            <span className='text-3xl font-extrabold'>{downloads}M</span>
          </div>
          <div>
            <img className='w-6 mb-2' src={ratingicon} alt="" />
            <p className='text-sm text-gray-500 mb-2'>Average Ratings</p>
            <span className='text-3xl font-extrabold'>{ratingAvg}</span>
          </div>
          <div>
            <img className='w-6 mb-2' src={reviewsicon} alt="" />
            <p className='text-sm text-gray-500 mb-2'>Total Reviews</p>
            <span className='text-3xl font-extrabold'>{reviews}+</span>
          </div>
        </div>
        <div className='my-5'>
          <button onClick={hendelAddToInstall} disabled={isInstalled}
          className={`bg-[#00D390] btn rounded-sm w-[180px] h-[45px] text-white ${
            isInstalled ? 'bg-gray-400 cursor-not-allowed'
              : 'hover:bg-green-500 hover:bg-[#00b67a]'
          }`}>{isInstalled ? 'Installed' : `Install Now (${size} MB)`}</button>
        </div>
      </div>
    </div>
    </div>
    <div className='w-full mt-5 mb-10 border-b border-gray-300 pb-10'>
      <h2 className='text-2xl font-semibold'>Ratings</h2>
      <div >
        <div className='flex gap-3.5 items-center my-2 '>
          <h4 className='text-gray-500'>5 star</h4>
          <div className='w-[1000px] h-4 bg-[#FF8811]'></div>
        </div>
        <div className='flex gap-3.5 items-center my-2'>
          <h4 className='text-gray-500'>4 star</h4>
          <div className='w-[550px] h-4 bg-[#FF8811]'></div>
        </div>
        <div className='flex gap-3.5 items-center my-2'>
          <h4 className='text-gray-500'>3 star</h4>
          <div className='w-[250px] h-4 bg-[#FF8811]'></div>
        </div>
        <div className='flex gap-3.5 items-center my-2'>
          <h4 className='text-gray-500'>2 star</h4>
          <div className='w-[150px] h-4 bg-[#FF8811]'></div>
        </div>
        <div className='flex gap-3.5 items-center my-2'>
          <h4 className='text-gray-500'>1 star</h4>
          <div className='w-[80px] h-4 bg-[#FF8811]'></div>
        </div>
        <div className='flex justify-between ml-12 text-gray-500'>
          <span>0</span>
          <span>3000</span>
          <span>6000</span>
          <span>9000</span>
          <span>12000</span>
        </div>
      </div>
    </div>
    <div className='mb-10'>
      <h2 className='font-semibold text-2xl'>Description</h2>
      <p className='text-md text-gray-500' >{description}</p>
    </div>
 </div> 
  )
}

export default AppsDetails
