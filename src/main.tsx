import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css"
import { Outlet, RouterProvider } from 'react-router-dom';
import { router } from './components/routes/routes.tsx';
import { Navbar } from 'react-bootstrap';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Outlet />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
