import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavigationStarwars(props) {
  console.log(props.children);
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Navbar.Brand href="#main">Navbar</Navbar.Brand>
      <Nav className="d-flex justify-content-around SW-nav">
        {props.children}
      </Nav>
    </Navbar>
  );
}
export default NavigationStarwars;
