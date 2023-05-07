import React, { useContext, useState } from "react";
import Toast from "react-bootstrap/Toast";
import google from "../../../../image/google.png";
import facebook from "../../../../image/fb.png";
import { Link } from "react-router-dom";
import "../usercss.css";
import { AuthContext } from "../../Routes/Context";
const Register = () => {
  const [smessege, setSmessege] = useState();
  const [passwordError, setPasswordError] = useState();
  const [tost, setTost] = useState();
  const { googleLogin, ClickRegister, emailVarfication } =
    useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const mobile = form.number.value;
    const email = form.email.value;

    const password = form.password.value;
    const confirmPassword = form.confirmpassword.value;
    console.log(email, password);
    ClickRegister(email, password)
      .then((result) => {
        console.log(result);
        setSmessege("Register is successfull");
        emailVarfication().then(() => {
          setTost("varfication email send please check email");
        });
      })
      .catch((error) => console.error(error));

    if (!(password === confirmPassword)) {
      setPasswordError("Password is dont matched");
    }
  };

  const GoogleRegister = () => {
    return googleLogin().then((result) => {
      console.log(result).catch((error) => console.error(error));
    });
  };

  return (
    <div>
      {/* ---------------- */}

      {/* ---------------- */}
      <div className="p-4 bg-white h-full grid justify-items-center">
        <Toast>{tost}</Toast>
        <div className="lg:w-2/5 shadow-2xl w-11/12  border border-red  items-center rounded-lg bg-slate-50 p-5">
          <form onSubmit={handleRegister} action="">
            <h3 className="text-4xl font-bold grid justify-items-center text-orange-600 mb-4">
              Registration
            </h3>
            <h6 className="mb-1 font-semibold text-green-600">{smessege}</h6>
            <h6 className="text-left mb-1 font-semibold text-green-600">
              Enter your full name
            </h6>
            <input
              className=" text-green-600 border-white border w-full rounded px-4 py-2 bg-green-100"
              type="text"
              name="name"
              placeholder="your full name"
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
            <h6 className="text-left mb-1 font-semibold text-green-600">
              Enter your email
            </h6>
            <input
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
            <h6 className="mb-1 font-semibold text-green-600">
              {passwordError}
            </h6>
            <h6 className="mt-2 text-left  mb-1 font-semibold  text-green-600">
              Enter your confirm Password
            </h6>
            <input
              className="hover:bg-violet-60 text-green-600 border-white border w-full rounded px-4 py-2 bg-green-100"
              type="password"
              name="confirmpassword"
              placeholder="Type your confirm password"
            />

            <p className=" text-green-600 text-left">
              <input
                className=" text-green-600 me-2 mt-3 mb-3"
                type="checkbox"
                name="agreement"
                // onChange={handle}
              />
              Accept terms and condition
            </p>

            <div className=" md:grid justify-items-center">
              <button
                className="border-1 bg-orange-500 text-white py-2 text-xl font-semibold w-full rounded-lg mt-1"
                // disabled={!agreement}
              >
                Register
              </button>
            </div>
          </form>
          <p className="flex justify-center">
            Have An Account ?
            <Link
              className="text-decoration-none text-uppercase ms-2 mb-4 text-green-500"
              to="/login"
            >
              LogIn
            </Link>
          </p>

          <div className="flex justify-between">
            <p className="">-------------------------</p>
            <p>OR</p>
            <p className="">--------------------------</p>
          </div>

          <button className="border flex justify-between file:text-black py-1 w-full rounded-3xl mt-1  bg-green-50">
            <img src={facebook} className="me-12 ms-0 w-5" alt="" srcset="" />
            <p className="me-8">SignUp with Facebook</p>
            <p> </p>
          </button>
          <button
            onClick={GoogleRegister}
            className="border flex justify-between file:text-black py-1 w-full rounded-3xl mt-1  bg-green-50 bg-white-"
          >
            <img src={google} className="me-12 ms-0 w-5" alt="" srcset="" />
            <p className="me-8">SignUp with Google</p>
            <p> </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
