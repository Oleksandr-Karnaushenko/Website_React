import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Blog1 from "../Img/Blog/Blog1.png";
import Blog2 from "../Img/Blog/Blog2.png";

export default class About extends Component {
  render() {
    return (
      <Container className="blog padding" id="Blog">
        <Row className="justify-content-center">
          <Col>
            <h3>Recent blog posts</h3>
            <Row className="justify-content-center m-4">
              <Col className="line" md="auto"></Col>
            </Row>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet</p>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center text">
          <Col lg={5}>
            <img src={Blog1} alt="" />
          </Col>
          <Col lg={7}>
            <Row className="mb-4">
              <Col xs={2}>
                {" "}
                <div className="date">
                  <p>
                    18 <br />
                    oct
                  </p>
                </div>
              </Col>
              <Col xs={9} className="dateText">
                {" "}
                <p className="uppercase bold">
                  Startup ideas needs to be funded{" "}
                </p>
                <p>
                  <i>By Khalil Uddin in Development</i>{" "}
                </p>
              </Col>
            </Row>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
            <Button variant="" className="btn bold">
              {" "}
              READ MORE
            </Button>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center text">
          <Col lg={5}>
            <img src={Blog2} alt="" />
          </Col>
          <Col lg={7}>
            <Row className="mb-4">
              <Col xs={2}>
                {" "}
                <div className="date">
                  <p>
                    18 <br />
                    oct
                  </p>
                </div>
              </Col>
              <Col xs={9} className="dateText">
                {" "}
                <p className="uppercase bold">
                  User Interface Designing Elements{" "}
                </p>
                <p>
                  <i>By Khalil Uddin in Development</i>{" "}
                </p>
              </Col>
            </Row>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
            <Button variant="" className="btn bold">
              {" "}
              READ MORE
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
