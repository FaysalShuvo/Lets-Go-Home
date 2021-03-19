import React from "react";
import "./Header.css";
import { Button, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/home">Let's Go Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#destination">Destination</Nav.Link>
        <Nav.Link href="#blog">Blog</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        <Button variant="warning">Log In</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
