import React, { createContext, useEffect, useState } from "react";
export const Subcontex = createContext();
const Context = ({ children }) => {
  const [sub, setSub] = useState([]);

  useEffect(() => {
    fetch("subject.json")
      .then((res) => res.json())
      .then((data) => setSub(data));
  }, []);

  const subs = { sub };

  return (
    <div>
      <Subcontex.Provider value={subs}>{children}</Subcontex.Provider>
    </div>
  );
};

export default Context;
