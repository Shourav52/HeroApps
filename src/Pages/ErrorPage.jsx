import React from 'react'
import { useRouteError } from 'react-router';
import ErrorImg from '../assets/error-404.png';
import Navbar from '../Components/Navbar';

const ErrorPage = () => {
 const error = useRouteError();


  return (
  <div className='flex flex-col justify-center items-center min-h-screen text-center'>
    <img className='w-96 h-96' src={ErrorImg} alt="Error" />
    <h2 className='text-3xl font-bold mb-4'>OPPS!! APP NOT FOUND</h2>
    <p className='text-gray-500 mb-4'>The App you are requesting is not found on our system.  please try another apps</p>
      <a href="/">
        <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded hover:bg-blue-600 transition'>Go Back!</button>

      </a>

  </div>
  );
}
export default ErrorPage
