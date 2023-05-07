import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../user/firebase";

const Auth = getAuth(app);
const googlePovider = new GoogleAuthProvider();
export const AuthContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  //------ email and password login-----------
  const clickLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };
  // -----------google login -------------------------
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(Auth, googlePovider);
  };

  // ----------Register-------------
  const ClickRegister = (email, password) => {
    setLoading(true);
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

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(Auth, (currentuser) => {
      console.log(currentuser);
      setUser(currentuser);
      setLoading(false);
    });
    return () => unsubcribe();
  }, []);

  const info = {
    clickLogin,
    googleLogin,
    ClickRegister,
    emailVarfication,
    Logout,
    user,
    loading,
  };

  return (
    <div>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Context;
