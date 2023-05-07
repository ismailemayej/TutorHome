import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className="d-flex flex-column">
      <Header></Header>
      <Outlet></Outlet>
      <div className="mt-40">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
