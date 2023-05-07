import { Link, useLoaderData } from "react-router-dom";

const SubDatails = () => {
  const subD = useLoaderData();
  const { subname, teacher, rating } = subD;

  return (
    <div className="container border mt-2 w-50">
      <h3 className="text-uppercase">Subject Name:{subname}</h3>
      <p>Teacher name:{teacher}</p>
      <p>Rating:{rating}</p>
      <Link to="/">
        <button class="btn w-full btn-warning" type="button">
          Hire
        </button>
      </Link>
    </div>
  );
};

export default SubDatails;
