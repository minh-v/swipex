import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Header extends Component {
  render() {
    return (
      <Container className="pb-5">
        {/*Navbar with name of app and search bar to the right, temp seperation method: className="justify-content-between" */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home" id="Navbar">
            SwipeX
          </Navbar.Brand>
          <Form inline className="ml-auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
