import React from "react";
import about from "../../../../image/about.jpg";

const Aboutus = () => {
  return (
    <div className="grid justify-items-center container">
      <img
        src={about}
        className="mt-2 border-amber-400 rounded-full shadow-md w-32 absolute z-20"
        alt=""
        srcset=""
      />
      <div className=" border bg-slate-200 rounded py-16 px-12 relative top-24">
        <h4>About us</h4>
        <p>
          {" "}
          hello,My Name is Md Ismaile Hossain.I learning programing in
          programming-hero.i am 28 years old. my aim is make a programer.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
