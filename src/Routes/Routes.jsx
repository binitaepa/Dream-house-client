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
import MakeOffer from "../Layout/Dashboard/MakeOffer/MakeOffer";
import PropertyBought from "../Layout/Dashboard/PropertyBought/PropertyBought";
import ReviewRate from "../Layout/Dashboard/ReviewRate/ReviewRate";
import AllUsers from "../Layout/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import PageNotFound from "../PageNotFound/PageNotFound";




 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<PageNotFound></PageNotFound>,
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
            loader:({params})=>fetch(`https://dream-house-project-server.vercel.app/properties/${params.id}`)
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
        errorElement:<PageNotFound></PageNotFound>,
        children:[
            {
                path:'myprofile',
                element:<MyProfile></MyProfile>

            },
            {
                path:'wish',
                element:<Wish></Wish>
            },
            {
                path:'makeoffer',
                element:<MakeOffer></MakeOffer>
            },
            {
                path:'propertybought',
                element:<PropertyBought></PropertyBought>
            },
            {
                path:'reviewrate',
                element:<ReviewRate></ReviewRate>
            },
            // admin routes
            {
                path:'users',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
  ]);