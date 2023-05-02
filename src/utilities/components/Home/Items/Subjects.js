import React, { createContext } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Subjects = ({ sub }) => {
  const { id, name } = sub;

  return (
    <div className="shadow-sm">
      <Card border="info">
        <Card.Header>
          <h3 className="text-uppercase"> {name}</h3>
        </Card.Header>
        <Card.Body>
          <h6 className="text-uppercase">
            <span cl3ssName=" text-red-900"> Teacher: </span>
            {name}
          </h6>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Link to={`/user/${id}`}>
          <button class="btn w-full btn-warning" type="button">
            HIRE
          </button>
        </Link>
      </Card>
    </div>
  );
};

export default Subjects;
