import { useContext } from "react";
import "./Home.css";
import Carosecl from "./Items/Carosecl";
import Subjects from "./Items/Subjects";
import { Subcontex } from "../Routes/Context";

const Home = () => {
  const { sub } = useContext(Subcontex);

  return (
    <div className="container">
      <Carosecl></Carosecl>
      <h2 className="mt-5 fs-1 font-bold text-yellow-400">SUBJECTS</h2>
      <div className="row row-cols-1 row-cols-lg-4 g-3 g-lg-4">
        {sub.map((subs) => (
          <Subjects key={subs.id} sub={subs}></Subjects>
        ))}
      </div>
    </div>
  );
};

export default Home;
