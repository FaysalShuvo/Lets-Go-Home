import React from "react";
import { Button, Form } from "react-bootstrap";
import map from "../../assets/images/Map.png";

const Destination = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Form>
            <Form.Label>Where</Form.Label>
            <Form.Control type="email" placeholder="where" />{" "}
            <Form.Label>To</Form.Label>
            <Form.Control type="email" placeholder="to" />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-md-9">
          <img src={map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Destination;
