import React from 'react'
import { Link } from 'react-router';

const Appscard = ({app}) => {
    const {image, title, companyName, description, id } = app;
  return (
    <Link to={`/allapps/${id}`} className="card bg-base-100 m-4 shadow-sm hover:scale-105 transition ease in out ">
  <figure className='h-48 overflow-hidden'>
    <img className='w-full object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{companyName}</p>
  </div>
</Link>
  )
}

export default Appscard
