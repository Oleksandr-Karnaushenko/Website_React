import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import services1 from "../Img/services1.png";
import services2 from "../Img/services2.png";
import services3 from "../Img/services3.png";

export default class Home extends Component {
  render() {
    return (
      <Container className="services padding mt-4" id="Services">
        <Row className="justify-content-center">
          <Col>
            <h3>Services</h3>
            <Row className="justify-content-center m-4">
              <Col className="line" md="auto"></Col>
            </Row>
            <p>
              We offer ipsum dolor sit amet, consetetur sadipscing elitr amet
            </p>
          </Col>
        </Row>
        <Row className="mt-4 justify-content-center">
          <Col md={6} lg={4}>
            <img src={services1} alt="" />
            <h5>Clean Typography</h5>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </Col>
          <Col md={6} lg={4}>
            <img src={services2} alt="" />
            <h5>Rock Solid Code</h5>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </Col>
          <Col md={6} lg={4}>
            <img src={services3} alt="" />
            <h5>Expert Support</h5>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
