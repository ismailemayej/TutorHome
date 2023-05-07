import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext } from "react";
import app from "../user/firebase";

const Auth = getAuth(app);
const googlePovider = new GoogleAuthProvider();
export const AuthContext = createContext();

const Context = ({ children }) => {
  //------ email and password login-----------
  const clickLogin = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };
  // -----------google login -------------------------
  const googleLogin = () => {
    return signInWithPopup(Auth, googlePovider);
  };

  // ----------Register-------------
  const ClickRegister = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  // send email varification --------------------
  const emailVarfication = () => {
    return sendEmailVerification(Auth.currentUser);
  };
  // ------------- LogOut ---------------------
  const Logout = () => {
    return signOut(Auth);
  };
  // -------------- current user ----------------

  const info = {
    clickLogin,
    googleLogin,
    ClickRegister,
    emailVarfication,
    Logout,
  };

  return (
    <div>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Context;
