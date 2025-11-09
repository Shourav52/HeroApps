import React from 'react'

const Spinner = () => {
  return (
    <div>
      <div className='flex justify-center  items-center mt-10 '>
    <div className = 'w-16 h-16 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin'></div>
  </div>
    </div>
  )
}

export default Spinner
