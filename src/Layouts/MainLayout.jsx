
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'
import Banner from '../Components/Banner'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 flex-1'>
         <Outlet />   
        </div> 
        <Footer />
           
    </div>
  )
}

export default MainLayout
