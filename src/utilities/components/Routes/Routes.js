import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import SubDatails from "../Home/Items/SubDatails";
import Subjects from "../Home/Items/Subjects";
import Blog from "../Home/menu/Blog";
import Aboutus from "../Home/menu/Aboutus";
import Contact from "../Home/menu/Contact";
import Context from "./Context";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
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
        path: "/user/:subid",
        loader: async ({ params }) => {
          return fetch(`http://localhost:3000/user/${params.subid}`);
        },
        element: <SubDatails></SubDatails>,
      },
      {
        path: "home",
        loader: () => {
          return fetch("subject.json");
        },
        element: <Context></Context>,
      },
    ],
  },
]);
