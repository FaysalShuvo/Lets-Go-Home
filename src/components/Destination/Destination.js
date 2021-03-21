import React, { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { useParams } from "react-router";
import "./Destination.css";
import fakedata from "../../fakedata/Fakedata";

import Map from "../Map/Map";

const Destination = () => {
  const { name } = useParams();
  const vehicles = fakedata;

  const [state, setState] = useState(false);
  const handleSearch = () => {
    return setState(true);
  };

  const found = vehicles.find((v) => v.name === name);
  console.log(found);
  return (
    <div style={{ height: "100vh", backgroundColor: "#3aafa9" }}>
      {found === undefined && (
        <div className="text-center error-txt">
          <h1>
            Hey!! There is a bug here that needs to fix.until than do this:
          </h1>
          <h4>
            The problem is you did not select any transport ! so if you put any
            destination and click search the whole website gonna crash so{" "}
            <span>
              got to home page and click any transport you want than put your
              destination and Click Search!
            </span>
          </h4>
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-3 p-5">
            <Form>
              <div className="form-group">
                <label>Where</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="where"
                  required
                />
              </div>
              <div className="form-group">
                <label>To</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="to"
                  required
                />
              </div>
            </Form>
            <button
              onClick={handleSearch}
              className="btn btn-primary btn-block"
            >
              Search
            </button>
            {state && (
              <ListGroup className=" py-3">
                <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                  <img className="img mr-3" src={found.img} alt="" />{" "}
                  <h3 className="mr-2">{found.name}</h3> <h3>200tk</h3>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                  <img className="img mr-3" src={found.img} alt="" />{" "}
                  <h3 className="mr-2">{found.name}</h3> <h3>250tk</h3>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                  <img className="img mr-3" src={found.img} alt="" />{" "}
                  <h3 className="mr-2">{found.name}</h3> <h3>300tk</h3>
                </ListGroup.Item>
              </ListGroup>
            )}
          </div>
          <div className="col-md-9 py-5">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
