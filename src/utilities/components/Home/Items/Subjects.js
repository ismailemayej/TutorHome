import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Subjects = ({ sub }) => {
  const { id, subname, rating, teacher } = sub;

  return (
    <div className="shadow-sm">
      <Card border="info">
        <Card.Header className="bg-slate-400">
          <h3 className="text-uppercase"> {subname}</h3>
        </Card.Header>
        <Card.Body>
          <h6 className="text-uppercase">
            <span cl3ssName=" text-red-900"> Teacher: </span>
            {teacher}
          </h6>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <p>{rating}</p>
        </Card.Body>
        <Link to={`/hire/${id}`}>
          <button class="btn w-full btn-warning" type="button">
            Datails
          </button>
        </Link>
      </Card>
    </div>
  );
};

export default Subjects;
