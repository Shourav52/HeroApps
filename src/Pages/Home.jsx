import React, { use } from 'react'
import Appscard from '../Components/Appscard';
import { Link } from 'react-router';
import useapps from '../hooks/useapps';
import Banner from '../Components/Banner';

const Home = () => {
  const [allapps, loading, error] = useapps()
  const featuredApps = allapps.slice(0,8);
  return (
    <div>
       <Banner />
      <div className='text-center my-8'>
        <h1 className='text-4xl'>Trending Apps</h1>
        <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
      </div>
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
          featuredApps.map(app=> (
            <Appscard key={app.id} app={app}/>
          ))
        }
        </div>
        <div className='flex justify-center my-8'>
           <Link className='btn  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white ' to='/allapps' >Show All</Link>
        </div>
    </div>
    
  )
  
}

export default Home