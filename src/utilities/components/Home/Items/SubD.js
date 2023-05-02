import React, { useContext } from "react";
import { Subcontex } from "../../Routes/Context";
import SubDatails from "./SubDatails";

const SubD = () => {
  const { sub } = useContext(Subcontex);
  return (
    <div>
      {sub.map((s) => (
        <SubDatails key={s.id} sub={s}></SubDatails>
      ))}
    </div>
  );
};

export default SubD;
