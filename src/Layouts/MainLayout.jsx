
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'
import { useNavigation } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import Banner from '../Components/Banner'

const MainLayout = () => {
  const navigation = useNavigation();
  return (
  <div className='flex flex-col min-h-screen bg-[#fbfbfb]'>
      <Navbar />
      <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 flex-1'>
        {navigation.state === 'loading' ? <Spinner /> :  <Outlet />}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
