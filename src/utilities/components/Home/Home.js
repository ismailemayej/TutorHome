import { useLoaderData } from "react-router-dom";
import "./Home.css";
import Carosecl from "./Items/Carosecl";
import Subjects from "./Items/Subjects";

const Home = () => {
  const sub = useLoaderData();
  return (
    <div className="container">
      <Carosecl></Carosecl>
      <h2 className="mt-5 fs-1 font-bold text-yellow-400">SUBJECTS</h2>
      <div className="lg:mb-0 mb-16 row row-cols-1 row-cols-lg-4 g-3 g-lg-4">
        {sub.map((subs) => (
          <Subjects key={subs.id} sub={subs}></Subjects>
        ))}
      </div>
    </div>
  );
};

export default Home;
