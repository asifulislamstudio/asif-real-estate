import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import Property from "../Page/Property/Property";
import Blog from "../Page/Blog/Blog";
import Login from "../Features/Login/Login";
import Register from "../Features/Register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
            {
               path: "/",
               element: <Home></Home>,
               loader:() => fetch('properties.json')
            },
            {
              path: "/about",
              element: <About></About>
            },
            {
              path: "/property",
              element: <Property></Property>
            },
            {
              path: "/blog",
              element: <Blog></Blog>
            },
            {
              path: "login",
              element: <Login></Login>
            },
            {
              path: "/register",
              element: <Register></Register>
            }

      ]
    },
  ]);


  export default router ;