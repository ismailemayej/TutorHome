import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Routes/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Aply = () => {
  const { user } = useContext(AuthContext);
  const deta = useLoaderData();
  const { subname, teacher } = deta;

  const sub = (event) => {
    event.preventDefault();
    toast.success("apply your teacher form submit successfully", {
      position: "top-center",
    });
  };

  return (
    <div className="p-4 bg-white h-full grid justify-items-center">
      <ToastContainer />
      <div className="lg:w-2/5 shadow-2xl w-11/12  border border-red  items-center rounded-lg bg-slate-50 p-5">
        <form>
          <h3 className="text- 2xl font-bold grid justify-items-center text-uppercase text-orange-600 mb-4">
            Apply for hire Teacher
          </h3>

          <h6 className="text-left mb-1 font-semibold text-green-600">
            your name
          </h6>
          <input
            className=" text-green-600 border-white border w-full rounded px-4 py-2 bg-green-100"
            type="text"
            name="name"
            placeholder={user?.displayName}
          />
          <h6 className="text-left mb-1 font-semibold text-green-600">
            Enter your mobile
          </h6>
          <input
            className=" text-green-600 border-white border w-full rounded px-4 py-2 bg-green-100"
            type="number"
            name="number"
            placeholder="your mobile number"
          />
          <h6 className="text-left mb-1 font-semibold text-green-600">Email</h6>
          <input
            className=" text-green-600 border-white border w-full rounded px-4 py-2 bg-green-100"
            type="email"
            name="email"
            disabled
            placeholder={user?.email}
          />

          <h6 className="mt-2 text-left  mb-1 font-semibold  text-green-600">
            Subject Name
          </h6>
          <input
            className="hover:bg-violet-60 text-green-600 border-white border w-full rounded px-4 py-2 bg-green-100"
            type="text"
            name="text"
            disabled
            placeholder={subname}
          />

          <h6 className="mt-2 text-left  mb-1 font-semibold  text-green-600">
            Teacher Name
          </h6>
          <input
            className="hover:bg-violet-60 text-green-600 border-white border w-full rounded px-4 py-2 bg-green-100"
            type="text"
            disabled
            placeholder={teacher}
          />

          <div className=" md:grid justify-items-center">
            <button
              onClick={sub}
              className="border-1 bg-orange-500 text-white py-2 text-xl font-semibold w-full rounded-lg mt-1"
            >
              Apply for Teacher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Aply;
