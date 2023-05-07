import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import SubDatails from "../Home/Items/SubDatails";
import Blog from "../Home/menu/Blog";
import Aboutus from "../Home/menu/Aboutus";
import Contact from "../Home/menu/Contact";
import Login from "../user/Login/Login";
import Register from "../user/Register/Register";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/hire"),
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
        path: "/hire/:id",
        element: <SubDatails></SubDatails>,
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
    ],
  },
]);
