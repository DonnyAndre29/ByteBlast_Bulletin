import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import './index.css'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/semantic.min.css'
import App from './App.jsx'
import Home from './pages/Home'; 
// import SignUp_Login from './pages/SignUp_Login.jsx'
import UserProfile from './pages/UserProfile.jsx';
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Post from './pages/Post.jsx'
// import About from './components/MainContent/MainContent.jsx'
// import Contact from './components/MainContent/MainContent.jsx'


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
        path: '/login',
        element: <Login />,
      },

      {
        path: '/signup',
        element: <Signup />,
      },

      {
        path: '/user',
        element: <UserProfile />,
      },

      {
        path: '/post',
        element: <Post />,
      }
     
    ]
  },
 
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
