import React from "react";
import "./Header.css";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/home">
        Let's Go Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav.Link as={Link} to="/home">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/destination">
          Destination
        </Nav.Link>
        <Nav.Link as={Link} to="/blog">
          Blog
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact
        </Nav.Link>
        <Button as={Link} to="/login" variant="warning">
          Log In
        </Button>
        <Button className="ml-3" as={Link} to="/signup" variant="info">
          Sign Up
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
