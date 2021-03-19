import React from "react";
import { Link } from "react-router-dom";

const SignUpFrom = () => {
  return (
    <form className="container p-5">
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>name</label>
        <input type="text" className="form-control" placeholder="name" />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <Link to="/login">log in?</Link>
      </p>
    </form>
  );
};

export default SignUpFrom;
