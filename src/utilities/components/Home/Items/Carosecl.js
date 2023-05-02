import React from "react";
import Carousel from "react-bootstrap/Carousel";
import s1 from "../../slider/s1.jpg";
import s2 from "../../slider/s2.jpg";
import s3 from "../../slider/s3.jpeg";

const Carosecl = () => {
  return (
    <div className="mt-4 container">
      <Carousel>
        <Carousel.Item>
          <img
            className="img-fluid d-block h-60 lg:h-auto w-100"
            src={s1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block h-60 lg:h-auto w-100"
            src={s2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block h-60 lg:h-auto w-100"
            src={s3}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carosecl;
