import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import SubDatails from "../Home/Items/SubDatails";
import Blog from "../Home/menu/Blog";
import Aboutus from "../Home/menu/Aboutus";
import Contact from "../Home/menu/Contact";
import Login from "../user/Login/Login";
import Register from "../user/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Aply from "../Home/Items/Aply";
import NotFound from "../NotFound";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://tutor-server-five.vercel.app/hire"),
        element: <Home></Home>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "about",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "contactus",
        element: <Contact></Contact>,
      },
      {
        path: "/hire/:id/:subname",
        element: <SubDatails></SubDatails>,
        loader: ({ params }) =>
          fetch(`https://tutor-server-five.vercel.app/hire/${params.id}`),
      },

      {
        path: "/hire/:id/:subname/aply",
        element: (
          <PrivateRoute>
            <Aply></Aply>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/hire/${params.id}`),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
