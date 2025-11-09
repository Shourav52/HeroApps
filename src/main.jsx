import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter , Route, RouterProvider, Routes } from 'react-router'  
import router from './Routes/Routes.jsx'
import { ToastContainer, toast } from 'react-toastify';


 createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
   <ToastContainer></ToastContainer>
  </StrictMode>,
)
