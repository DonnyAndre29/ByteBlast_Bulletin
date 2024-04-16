import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Wrong Page</h1>,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
