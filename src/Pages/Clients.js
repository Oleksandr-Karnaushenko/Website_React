import React, { Component } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Client1 from "../Img/Clients/Client1.png";
import Client2 from "../Img/Clients/Client2.png";
import Client3 from "../Img/Clients/Client3.png";
import Client4 from "../Img/Clients/Client4.png";
import Client5 from "../Img/Clients/Client5.png";

const pages = [
  {
    clients: [Client1, Client2, Client3, Client4, Client5],
    p:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    h: "John Doe, Google Inc.",
  },
  {
    clients: [Client3, Client4, Client5, Client1, Client2],
    p:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    h: "Google Inc.",
  },
  {
    clients: [Client5, Client1, Client4, Client2, Client3],
    p:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    h: "John Doe",
  },
];

export default class About extends Component {
  render() {
    const items = pages.map((element, index) => {
      const image = element.clients.map((client, index) => {
        return (
          <Col lg={2} md={4} xs={6} key={index}>
            <img alt="" src={client}></img>
          </Col>
        );
      });
      return (
        <Carousel.Item key={index}>
          <Carousel.Caption>
            <Container className="clients">
              <Row className="justify-content-center">{image}</Row>
              <Row className="justify-content-center">
                <Col md={8}>
                  <p>{element.p}</p>
                  <h5>{element.h}</h5>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

    return (
      <Container fluid style={{ backgroundColor: "#f8f8f8" }} id="Clients">
        <Carousel controls={false} className="my-carousel" interval="5000">
          {items}
        </Carousel>
      </Container>
    );
  }
}
