import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ADDCOFFEE from './Component/ADDCOFFEE.jsx';
import UpdateCoffee from './Component/UpdateCoffee.jsx';
import Signup from './Component/Signup.jsx';
import Loginin from './Component/Loginin.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './Component/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader:()=>fetch('http://localhost:5000/coffee')
  },
  {
    path:"/addCoffee",
    element:<ADDCOFFEE/>
  },
  {
    path:'/updateCoffee/:id',
    element:<UpdateCoffee/>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/login',
    element:<Loginin/>
  },
  
  {
    path:'/user',
    element:<Users/>,
    loader:()=>fetch('http://localhost:5000/user')
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> 
      <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
