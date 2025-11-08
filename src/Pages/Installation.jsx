import React, { useEffect, useState } from 'react';
import icon from '../assets/icon-downloads.png';
import ratingicon from '../assets/icon-ratings.png';

const Installation = () => {
  const [installList, setInstallList] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');

  useEffect(() => {
    const storedInstallList = JSON.parse(localStorage.getItem('installList')) || [];
    setInstallList(storedInstallList);
  }, []);

  const handleUninstallBtn = (id) => {
    const updatedList = installList.filter(app => app.id !== id);
    setInstallList(updatedList);
    localStorage.setItem('installList', JSON.stringify(updatedList));
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    let sorted = [...installList];
    if (order === 'high-low') {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (order === 'low-high') {
      sorted.sort((a, b) => a.downloads - b.downloads);
    }
    setInstallList(sorted);
  };

  return (
    <div>
      <div className='w-full mt-20 mb-20 text-center '>
        <h1 className='text-4xl font-semibold'>Your Installed Apps</h1>
        <p className='mt-3 text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className='w-full mt-5'>
      <div className='flex justify-between items-center mb-5'>
        <h1 className='font-semibold'>{installList.length} Apps Found</h1>

        <label className='form-control w-[130px] max-w-xs'>
          <select
            value={sortOrder}
            onChange={(e) => handleSortChange(e.target.value)}
            className='border border-gray-300 rounded-md p-2 text-sm text-gray-500 select select-bordered'
          >
            <option value='none'>Sort By</option>
            <option value='high-low'>High to Low</option>
            <option value='low-high'>Low to High</option>
          </select>
        </label>
      </div>

      <div className='space-y-3 w-full mt-5'>
        {installList.map((p) => (
          <div
            className='flex justify-between items-center border border-gray-300 p-3 rounded-md'
            key={p.id}
          >
            <div className='flex items-center gap-3.5'>
              <img className='object-cover w-20 h-15' src={p.image} alt='' />
              <div>
                <h1>{p.title}</h1>
                <div className='flex gap-5 mt-2'>
                  <span className='flex items-center text-green-400 font-semibold gap-1'>
                    <img className='w-4 h-3' src={icon} alt='' />
                    {p.downloads}M
                  </span>
                  <span className='flex items-center gap-1 text-[#FF8811]'>
                    <img className='w-4 h-4' src={ratingicon} alt='' />
                    {p.ratingAvg}
                  </span>
                  <span className='text-gray-400'>{p.size}MB</span>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleUninstallBtn(p.id)}
                className='btn bg-green-400 text-white'
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Installation;
