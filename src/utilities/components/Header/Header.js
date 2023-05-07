import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../tutor logo.png";
import Navi from "../../../Navi";
import { AuthContext } from "../Routes/Context";
import { toast } from "react-toastify";

const Header = () => {
  const { user, Logout } = useContext(AuthContext);

  const Signout = () => {
    Logout()
      .then((result) => {
        toast.success("Logout succesfull");
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex items-center relative logo lg:ps-10 lg:p-1 p3 bg-lime-300">
      <div>
        <Link to="/">
          <img
            className="w-20 md:w-32 lg:w-32 filter"
            src={logo}
            alt=""
            srcset=""
          />
        </Link>
      </div>
      <div className="ps-3 flex-1 w-22">
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white lg:w-full ml-2 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </div>

      <Navi></Navi>

      <div>
        {user?.uid ? (
          <button
            onClick={Signout}
            className="text-white bg-lime-600 rounded lg:px-5 px-3 py-1 "
            type="submit"
          >
            LogOut
          </button>
        ) : (
          <Link to="/login">
            <button
              className="text-white bg-lime-600 rounded lg:px-5 px-3 py-1 "
              type="submit"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
