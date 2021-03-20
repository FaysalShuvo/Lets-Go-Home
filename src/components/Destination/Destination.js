import React, { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { useParams } from "react-router";
import "./Destination.css";
import map from "../../assets/images/Map.png";
import fakedata from "../../fakedata/Fakedata";

const Destination = () => {
  const { name } = useParams();
  const vehicles = fakedata;

  const [state, setState] = useState(false);
  const handleSearch = () => {
    return setState(true);
  };
  console.log(state);
  const found = vehicles.find((v) => v.name === name);

  return (
    <div style={{ height: "100vh", backgroundColor: "#3aafa9" }}>
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
            <img src={map} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
