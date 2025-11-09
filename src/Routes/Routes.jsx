import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home"; 
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import AllApps from "../Pages/AllApps";
import Installation from "../Pages/Installation";
import AppsDetails from "../Pages/AppsDetails";

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
      loader: ()=> fetch('./appData.json')
      },
      {
      path: '/allapps',
      element : <AllApps/>,
      loader: ()=> fetch('./appData.json')
      },
      {
        path: '/installation',
        element : <Installation/>,
        loader: ()=> fetch('./appData.json')
      },
      {
        path: '/allapps/:id',
        element : <AppsDetails/>,
        loader: ()=> fetch('./appData.json')
        
        
      },
   ],
  },
  {
    path: '*',
    element : <ErrorPage/>
  }
   
])

export default router;