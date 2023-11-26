import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Layout/Pages/Home/Home";
import AllProperties from "../Layout/Pages/AllProperties/AllProperties";




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
        }
      ]
    },
  ]);