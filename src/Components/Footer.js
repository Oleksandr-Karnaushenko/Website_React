import React, { Component } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import Facebook from "../Img/Facebook.png";
import Instagram from "../Img/Instagram.png";
import YouTube from "../Img/YouTube.png";
import Twitter from "../Img/Twitter.png";
import Up from "../Img/up.png";
import { Link } from "react-scroll";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row className="justify-content-center">
            <Link
              to="Home"
              className="link"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              type="button"
              style={{ backgroundImage: `url(${Up})` }}
            ></Link>
          </Row>
          <Row className="justify-content-center">
            <Col md={4} className="content">
              <Row className="justify-content-center">
                <Col className="icons" md="auto">
                  <ButtonGroup aria-label="">
                    <Button
                      href="https://www.facebook.com/"
                      variant=""
                      className="icon"
                      style={{ backgroundImage: `url(${Facebook})` }}
                    ></Button>
                    <Button
                      href="https://twitter.com/explore"
                      variant=""
                      className="icon"
                      style={{ backgroundImage: `url(${Twitter})` }}
                    ></Button>
                    <Button
                      href="https://www.instagram.com/?hl=uk"
                      variant=""
                      className="icon"
                      style={{ backgroundImage: `url(${Instagram})` }}
                    ></Button>
                    <Button
                      href="https://www.youtube.com"
                      variant=""
                      className="icon"
                      style={{ backgroundImage: `url(${YouTube})` }}
                    ></Button>
                  </ButtonGroup>
                </Col>
              </Row>
              <Row className="justify-content-center m-4">
                <Col className="line" md="auto"></Col>
              </Row>
              <p>© 2015 Startup, Designed by ShapedTheme</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
