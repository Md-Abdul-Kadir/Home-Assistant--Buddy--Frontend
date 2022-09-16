import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouCompo.css";
import music1 from "../../images/m1.jpg";


const CarouCompo = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 mt-5" src={music1} alt="First slide" />
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default CarouCompo;
