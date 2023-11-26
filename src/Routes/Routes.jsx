import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Layout/Pages/Home/Home";
import AllProperties from "../Layout/Pages/AllProperties/AllProperties";
import PropertyDetails from "../Layout/PropertyDetail/PropertyDetails";




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
            element:<AllProperties></AllProperties>
        },
        {
            path:'propertydetails/:id',
            element:<PropertyDetails></PropertyDetails>,
            loader:({params})=>fetch(`http://localhost:5000/properties/${params.id}`)
        }
      ]
    },
  ]);