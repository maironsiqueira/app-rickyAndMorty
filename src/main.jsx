import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Details from './pages/details'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
   {
     path: "/details/:id",
     element: <Details />
   }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
