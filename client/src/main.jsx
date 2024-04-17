import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import App from './App.jsx'
import 'semantic-ui-css/semantic.min.css'
import Home from './pages/Home'; 
// import SignUp_Login from './pages/SignUp_Login/SignUp_Login'


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
  // {
  //   path: '/SignUp_Login',
  //   element: <SignUp_Login />,
  //   errorElement: <h1>Wrong Page</h1>,

  // }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
