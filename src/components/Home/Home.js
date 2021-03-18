import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Home.css";
import bike from "../../assets/images/bike.png";
import car from "../../assets/images/car.png";
import bus from "../../assets/images/bus.png";
import train from "../../assets/images/train.png";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center home-bg">
      <div className="row container">
        <div className="col-md-3">
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              className="card-img-top py-1 mt-3"
              src={bike}
            />
            <Card.Body>
              <Card.Title className="text-center">BIKE</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              className="card-img-top py-1 mt-3"
              src={car}
            />
            <Card.Body>
              <Card.Title className="text-center">CAR</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              className="card-img-top py-1 mt-3"
              src={bus}
            />
            <Card.Body>
              <Card.Title className="text-center">BUS</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              className="card-img-top py-1 mt-3"
              src={train}
            />
            <Card.Body>
              <Card.Title className="text-center">TRAIN</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
