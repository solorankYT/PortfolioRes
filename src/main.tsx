import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css"
import { Outlet, RouterProvider } from 'react-router-dom';
import { router } from './components/routes/routes.tsx';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <Outlet />
    <RouterProvider router={router}/>
  </React.StrictMode>,
 
)
