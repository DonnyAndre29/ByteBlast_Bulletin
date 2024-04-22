import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './App.jsx'
import Home from './pages/Home'; 
import SignUp_Login from './pages/SignUp_Login.jsx'
import UserProfile from './pages/UserProfile.jsx';
import BlogWebsite from './pages/Blog_Website.jsx'

// import About from './components/MainContent/MainContent.jsx'
// import Contact from './components/Header/Header.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    errorElement: <h1>Wrong Page</h1>,

    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/signup_login',
        element: <SignUp_Login />,
      },     

      {
        path: '/blog',
        element: <BlogWebsite />,

      },

      {
        path: '/users/userId',
        element: <UserProfile />,
      },

      {
        path: '/me',
        element: <UserProfile />,
      },

          

    ]
  },
 
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
