import React, { use } from 'react'
import useapps from '../hooks/useapps';
import Appscard from '../Components/Appscard';
import { useState } from 'react';
import { Link } from 'react-router';
import { all } from 'axios';


const AllApps = () => {
  const [allapps] = useapps()
  const [search, setSearch]=useState('')
  const term= search.trim().toLowerCase()
  const searchedApps = term ? allapps.filter(allapp=> allapp.title.toLowerCase().includes(term)) : allapps;
  console.log(searchedApps);
  return (
   <div>
      <div className='text-center my-8'>
        <h1 className='text-4xl'>Our All Applications</h1>
        <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className='flex justify-between items-center'>
        <div>
          ({searchedApps.length}) Apps Found
        </div>
        <div className='border border-gray-300 rounded'>
          <input
          value={search}
           onChange={(e)=>setSearch(e.target.value)} className='p-2 ' type="search" placeholder='Search' />
        </div>
      </div>
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
          searchedApps.map(app=> (
            <Appscard key={app.id} app={app}/>
          ))
        }
        </div>
    </div>
  )
}

export default AllApps
