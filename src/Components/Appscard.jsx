import React from 'react'
import { Link } from 'react-router';
import icon from '../assets/icon-downloads.png';
import ratingicon from '../assets/icon-ratings.png';

const Appscard = ({app}) => {
    const {image, title, downloads,ratingAvg, id } = app;
  return (
    <Link to={`/allapps/${id}`} className="card bg-base-100 m-4 shadow-sm hover:scale-105 transition ease in out ">
  <figure className='h-48 overflow-hidden'>
    <img className='w-full object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className='flex justify-between items-center'>
      <button className='flex btn w-16 text-sm bg-[#F1F5E8] h-6 text-green-400' ><img className='w-4 h-4' src={icon} alt="" /> {downloads}M</button>
      <button className='flex btn w-16 text-sm bg-[#FFF0E1] h-6 text-[#FF8811]'><img className='w-4 h-4' src={ratingicon} alt="" />{ratingAvg}</button>
    </div>
  </div>
</Link>
  )
}

export default Appscard
