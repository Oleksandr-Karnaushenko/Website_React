import React, { Component } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import { SendEmail } from "./Form";

import bg from "../Img/headerBG.png";

export default class Header extends Component {
  render() {
    return (
      <header className="bg" style={{ backgroundImage: `url(${bg})` }}>
        <Container className="darkBG no-gutters" fluid id="Home">
          <Navbar
            bg=""
            variant="dark"
            expand="md"
            collapseOnSelect
            className="my_nav"
          >
            <Container>
              <Navbar.Brand href="/" className="logo">
                Startup
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                className="wrap"
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto align-items-md-center">
                  <Link
                    to="Home"
                    className="link"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    type="button"
                    offset={-70}
                  >
                    Home
                  </Link>
                  <Link
                    to="Services"
                    className="link"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    type="button"
                    offset={-70}
                  >
                    Services
                  </Link>
                  <Link
                    to="About"
                    className="link"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    type="button"
                    offset={-70}
                  >
                    About
                  </Link>
                  <Link
                    to="Works"
                    className="link"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    type="button"
                    offset={-70}
                  >
                    Works
                  </Link>
                  <Link
                    to="Blog"
                    className="link"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    type="button"
                    offset={-70}
                  >
                    Blog
                  </Link>
                  <Link
                    to="Clients"
                    className="link"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    type="button"
                    offset={-70}
                  >
                    Clients
                  </Link>
                  <Link
                    to="Contact"
                    className="link"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    type="button"
                    offset={-70}
                  >
                    Contact
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container className="caption mt-md-5">
            <Row className="justify-content-center">
              <Col>
                <h1 className="uppercase">Welcome to STARTUP</h1>
                <p>Your Favourite Creative Agency Template</p>
                <SendEmail />
              </Col>
            </Row>
          </Container>
        </Container>
      </header>
    );
  }
}
