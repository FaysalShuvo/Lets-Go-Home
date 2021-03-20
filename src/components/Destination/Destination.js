import React from "react";
import { Form } from "react-bootstrap";
import map from "../../assets/images/Map.png";

const Destination = () => {
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
              <button className="btn btn-primary btn-block">Search</button>
            </Form>
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
