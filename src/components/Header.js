import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";

class Header extends Component {
  render() {
    return (
      <Container className="pb-5">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home" id="Navbar">
            SwipeX
          </Navbar.Brand>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
