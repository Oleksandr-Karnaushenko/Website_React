import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SendEmail } from "../Components/Form";
import git from "../Img/GetInTouch.png";

export default class GetInTouch extends Component {
  render() {
    return (
      <Container
        style={{
          backgroundImage: `url(${git})`,
        }}
        className="GetInTouch p-0"
        fluid
      >
        <Container fluid className="BG">
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6} className="margin">
                <h4>
                  Do you like OUR WORK so far?
                  <br /> Let's talk about YOUR PROJECT!
                </h4>
                <SendEmail />
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    );
  }
}
