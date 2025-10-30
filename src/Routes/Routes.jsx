import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home"; 
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import AllApps from "../Pages/AllApps";
import Installation from "../Pages/Installation";
const router = createBrowserRouter([
  {
    path: '/',
    element : <MainLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        // index:true,
      path: '/', 
      element : <Home/>,
      },
      {
      path: '/allapps',
      element : <AllApps/>
      },
      {
        path: '/installation',
        element : <Installation/>
      }
   ],
  },
  // {
  //   path: '*',
  //   element : <ErrorPage/>
  // }
   
])

export default router;