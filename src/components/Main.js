import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Main extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Link to="/anteatery">Anteatery</Link>
            </Col>
            <Col>
              <Link to="/pippins">Pippins</Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Main);
