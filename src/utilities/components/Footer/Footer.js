import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="position-absolute bottom-0 start-0 end-0 bg-slate-900 py-5 text-white">
      <div className="text-center row row-cols-1 row-cols-lg-2 g-3">
        <h5>Blog preview</h5>

        <h5>Copyright 2023</h5>
      </div>
      <small>Copyright 2023</small>
    </div>
  );
};

export default Footer;
