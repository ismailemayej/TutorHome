import React, { useContext, useState } from "react";
import facebook from "../../../../image/fb.png";
import google from "../../../../image/google.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../usercss.css";
import { AuthContext } from "../../Routes/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [reset, setReset] = useState();

  const { googleLogin, clickLogin, PasswordReset } = useContext(AuthContext);
  const handleLonin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    clickLogin(email, password)
      .then(() => {
        toast.success("login is successfully", { position: "top-center" });
      })
      .catch(() =>
        toast.warning("username or password wrong", { position: "top-center" })
      );
    navigate(from, { replce: true });
  };

  const GoogleLogin = () => {
    googleLogin()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  const handlepassword = () => {
    PasswordReset(reset).then(() => {
      toast
        .success("Password reset email send", { position: "top-center" })
        .catch((error) => alert(error));
    });
  };

  const handlereset = (event) => {
    event.preventDefault();
    setReset(event.target.value);
    if (!reset) {
      toast.warning("Please input Your email");
    }
  };
  return (
    <div className=" p-4 bg-white h-full grid justify-items-center">
      <ToastContainer />
      <div className="lg:w-2/5 shadow-2xl w-11/12  border border-red  items-center rounded-lg bg-slate-50 p-5">
        <form onSubmit={handleLonin} action="">
          <h6 className="text-4xl font-bold grid justify-items-center text-orange-600">
            LogIn
          </h6>

          <h6 className="text-left mb-1 font-semibold text-green-600">
            Enter your email
          </h6>
          <input
            onBlur={handlereset}
            className=" text-green-600 border-white border w-full rounded px-4 py-2 bg-green-100"
            type="email"
            name="email"
            placeholder="email or phone number"
          />
          <h6 className="mt-2 text-left  mb-1 font-semibold  text-green-600">
            Enter your Password
          </h6>
          <input
            className="hover:bg-violet-60 text-green-600 border-white border w-full rounded px-4 py-2 bg-green-100"
            type="password"
            name="password"
            placeholder="Type your password"
          />

          <div className="flex justify-between my-4">
            <p className=" text-green-600">
              <input
                className=" text-green-600 me-2 mt-2"
                type="checkbox"
                id=""
                name="vehicle1"
                value="Bike"
              />
              Remember me
            </p>
            <p className="text-green-600">
              <button onClick={handlepassword}> Forgot Password</button>
            </p>
          </div>

          <div className=" md:grid justify-items-center">
            <button
              className="border-1 bg-orange-500 text-white py-2 text-xl font-semibold w-full rounded-lg mt-1"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <p className="flex justify-center">
          Dont Have An Account ?
          <Link
            className="ms-2 mb-4 text-decoration-none text-green-500"
            to="/register"
          >
            Create An account
          </Link>
        </p>

        <div className="flex justify-between">
          <p className="">-------------------------</p>
          <p>OR</p>
          <p className="">--------------------------</p>
        </div>

        <button className="border flex justify-between file:text-black items-center py-1 w-full rounded-3xl mt-1  bg-green-50">
          <img src={facebook} className="me-12 ms-0 w-5" alt="" srcset="" />
          <p className="items-center me-8">Login with Facebook</p>
          <p> </p>
        </button>
        <button
          onClick={GoogleLogin}
          className="items-center border flex justify-between file:text-black py-1 w-full rounded-3xl mt-1  bg-green-50 bg-white-"
        >
          <img src={google} className="me-12 ms-0 w-5" alt="" srcset="" />
          <p className="me-8">Login with Google</p>
          <p> </p>
        </button>
      </div>
    </div>
  );
};

export default Login;
