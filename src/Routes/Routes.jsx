import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Layout/Pages/Home/Home";
import AllProperties from "../Layout/Pages/AllProperties/AllProperties";
import PropertyDetails from "../Layout/PropertyDetail/PropertyDetails";
import Login from "../Layout/Pages/Login/Login";
import SignUp from "../Layout/Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyProfile from "../Layout/Dashboard/MyProfile";
import Wish from "../Layout/Dashboard/Wish/Wish";




 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'allproperties',
            element:<PrivateRoutes><AllProperties></AllProperties></PrivateRoutes>
        },
        {
            path:'propertydetails/:id',
            element:<PrivateRoutes><PropertyDetails></PropertyDetails>,</PrivateRoutes>,
            loader:({params})=>fetch(`http://localhost:5000/properties/${params.id}`)
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<SignUp></SignUp>
        }
      ]
    },
    {
        path:'dashboard',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            {
                path:'myprofile',
                element:<MyProfile></MyProfile>

            },
            {
                path:'wish',
                element:<Wish></Wish>
            }
        ]
    }
  ]);