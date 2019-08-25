import React from "react";

import { Navbar, Nav } from "react-bootstrap";

const Navigation = ({}) => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Nav className="mr-auto">
        <Navbar.Brand>Exam Web3 Janvier 2019 </Navbar.Brand>
      </Nav>
    </Navbar>
  );
};


export default Navigation;
