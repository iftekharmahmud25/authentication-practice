import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './Componants/MainLayout/MainLayout';
import Home from './Componants/MainLayout/Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import AuthProvider from './Componants/MainLayout/Navbar/Porvider/AuthProvider';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children : [
       {
           path : "/",
           element : <Home></Home>
       },
       {
          path : "/login",
          element: <Login></Login>
       },
       {
         path : "/register",
         element : <Register></Register>
       }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
