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
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
