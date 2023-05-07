import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./utilities/components/Home/Home.css";

const Navi = () => {
  return (
    <div className="hidden ms-32 lg:block flex-1 w-32 text" bg="light">
      <Nav variant="pills" defaultActiveKey>
        <Nav.Item>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white bg-lime-600 rounded text-decoration-none text-uppercase ms-2 lg:px-5 px-3 py-1"
                : "rounded text-decoration-none text-uppercase ms-2 lg:px-5 px-3 py-1 border  bg-lime-400 text-black"
            }
            to="/"
          >
            Home
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white bg-lime-600 rounded text-decoration-none text-uppercase ms-2 lg:px-5 px-3 py-1"
                : "rounded text-decoration-none text-uppercase ms-2 lg:px-5 px-3 py-1 border  bg-lime-400 text-black"
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white bg-lime-600 rounded text-decoration-none text-uppercase ms-2 lg:px-5 px-3 py-1"
                : "rounded text-decoration-none text-uppercase ms-2 lg:px-5 px-3 py-1 border  bg-lime-400 text-black"
            }
            to="/about"
          >
            About
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white bg-lime-600 rounded text-decoration-none text-uppercase ms-2 lg:px-5 px-3 py-1"
                : "rounded text-decoration-none text-uppercase ms-2 lg:px-5 px-3 py-1 border bg-lime-400 text-black"
            }
            to="contactus"
          >
            Contact us
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navi;
