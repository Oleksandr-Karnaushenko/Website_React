import React, { Component } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import WorksImg from "../Components/WorksImg";

export default class Works extends Component {
  constructor() {
    super();
    this.state = {
      selectNavKey: 0,
    };
  }
  selectNav = (eventKey) => {
    this.setState({ selectNavKey: eventKey });
  };
  render() {
    return (
      <Container className="padding works" id="Works">
        <Row className="justify-content-center">
          <Col>
            <h3>Latest Works</h3>
            <Row className="justify-content-center m-4">
              <Col className="line" md="auto"></Col>
            </Row>
            <Nav
              className="justify-content-center works-nav"
              defaultActiveKey="0"
              onSelect={this.selectNav}
            >
              <Nav.Item>
                <Nav.Link eventKey="0">All</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="1">Branding</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Design</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">Development</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4">Strategy</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <WorksImg id={this.state.selectNavKey} />
      </Container>
    );
  }
}
