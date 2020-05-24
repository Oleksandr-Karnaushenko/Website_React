import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutImg from "../Components/AboutImg";

export default class About extends Component {
  render() {
    return (
      <Container
        className="padding"
        fluid
        style={{ backgroundColor: "#f8f8f8" }}
        id="About"
      >
        <Container className="about">
          <Row className="justify-content-center">
            <Col>
              <h3>About us</h3>
              <Row className="justify-content-center m-4">
                <Col className="line" md="auto"></Col>
              </Row>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet
              </p>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-center">
            <Col lg={6}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </Col>
            <Col lg={6}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </Col>
          </Row>
          <AboutImg />
        </Container>
      </Container>
    );
  }
}
