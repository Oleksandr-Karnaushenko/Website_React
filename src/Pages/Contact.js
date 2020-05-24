import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Phone from "../Img//Contacts/Phone.png";
import Email from "../Img//Contacts/e-mail.png";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      companyName: "",
      message: "",
      validated: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      this.setState({ validated: true });
    }else{
      this.setState({ validated: false });
    } 
    //alert('Ім\'я, що було надіслано: ');
  };
  enterName = (e) => {
    this.setState({ name: e.target.value });
  };
  enterEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  enterSubject = (e) => {
    this.setState({ subject: e.target.value });
  };
  enterCompanyName = (e) => {
    this.setState({ companyName: e.target.value });
  };
  enterMessage = (e) => {
    this.setState({ message: e.target.value });
  };
  render() {
    return (
      <Container className="contacts padding mt-4" id="Contact">
        <Row className="justify-content-center">
          <Col>
            <h3>Contacts</h3>
            <Row className="justify-content-center m-4">
              <Col className="line" md="auto"></Col>
            </Row>
            <p>
              We offer ipsum dolor sit amet, consetetur sadipscing elitr amet
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={4} className="date">
            <Row>
              <Col xs={1}>
                <img alt="" src={require('../Img//Contacts/Address.png')} />
              </Col>
              <Col xs={9}>
                <p className="uppercase bold">Address</p>
                <p>
                  312, 7th&#8194;Ave, New&#8194;York NY&#8194;101200,
                  United&#8194;States&#8194;of&#8194;America{" "}
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <img alt="" src={Phone} />
              </Col>
              <Col xs={9}>
                <p className="uppercase bold">Hotline (24x7)</p>
                <p>
                  +65&nbsp;0052&nbsp;300, +65&nbsp;88251&nbsp;210
                  +88&nbsp;01723&nbsp;511&nbsp;340{" "}
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <img alt="" src={Email} />
              </Col>
              <Col xs={9}>
                <p className="uppercase bold">E-mail</p>
                <p>shapedtheme@gmail.com khalilkode@gmail.com</p>
              </Col>
            </Row>
          </Col>
          <Col md={8}>
            <Form
              className="form"
              onSubmit={this.handleSubmit}
              noValidate
              validated={this.state.validated}
            >
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Control
                    placeholder="Enter name"
                    value={this.state.name}
                    onChange={this.enterName}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control
                    placeholder="Your E-mail"
                    type="email"
                    value={this.state.email}
                    onChange={this.enterEmail}
                    required
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridSubject">
                  <Form.Control
                    placeholder="Your subject"
                    value={this.state.subject}
                    onChange={this.enterSubject}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCompanyName">
                  <Form.Control
                    placeholder="Company name"
                    value={this.state.companyName}
                    onChange={this.enterCompanyName}
                    required
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formGridMessage">
                <Form.Control
                  as="textarea"
                  rows="4"
                  placeholder="Write your message"
                  value={this.state.message}
                  onChange={this.enterMessage}
                  required
                />
              </Form.Group>
              <Button variant="" type="submit" className="btn">
                Submit
              </Button>
              <span style={{ color: "#c0301c" }} className="margin">
                *{" "}
              </span>
              <span>
                We’ll contact you as as possible. We don’t reply on Monday.
              </span>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
