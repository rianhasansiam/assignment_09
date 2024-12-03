import {createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home/Home";

import Tutorial from "./Tutorials/Tutorial";
import StartLearing from "./StartLearing/StartLearing";

import PrivateRout from "./PrivateRoute/PrivateRout";
import Leason from "./Leasson/Leason";
import SignUp from "./Authentication/SignUp";
import Login from "./Authentication/Login";
import MyProfile from "./MyProfile/MyProfile";
import ErrorPage from "./ErrorPage";
import Forget from "./Authentication/Forget";
import UpdateProfile from "./MyProfile/UpdateProfile";
import AboutUs from "./Home/AboutUs";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>,

          
        },
        {
          path:"/tutorial",
          element:<PrivateRout><Tutorial/></PrivateRout> 
        },
        {
          path:"/startlearning",
          element:<StartLearing/>
        },
         {
            path:"/about",
            element:<AboutUs/>

          },
          {
            path:"/signup",
            element:<SignUp/>
          },
          {
            path:"/login",
            element:<Login/>
          },
          {
            path:'/forgetpassword',
            element:<Forget/>
          },
          {
            path:"/myprofile",
            element:<MyProfile/>
          },
          {
            path:"/updateprofile",
            element:<UpdateProfile/>
          }

          
       
      ]
    },
    {
      path:"/learn-leasson/:id",
      element:<PrivateRout><Leason/></PrivateRout> 
    },
    
  ]);


  export default router