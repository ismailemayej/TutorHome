import { useContext } from "react";
import { Subcontex } from "../../Routes/Context";
import { useLoaderData } from "react-router-dom";

const SubDatails = () => {
  const data = useLoaderData();
  const { name } = data;

  return <div>{name}</div>;
};

export default SubDatails;
