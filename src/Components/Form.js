import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import FormImg from "../Img/form.jpg";
export function SendEmail() {
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setCheck(true);
    } else {
      handleClose();
    }
    //alert('Email entered');
  };

  return (
    <>
      <Button variant="" className="my_btn" onClick={handleShow}>
        Get Started
      </Button>

      <Modal show={show} onHide={handleClose} className="form">
        <Modal.Header
          className="BG"
          closeButton
          style={{ backgroundImage: `url(${FormImg})` }}
        >
          <Modal.Title>Startup</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit} validated={check} noValidate>
          <Modal.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I agree with the privacy policy"
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer
            className="justify-content-center BG"
            style={{ backgroundImage: `url(${FormImg})` }}
          >
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit">
              {" "}
              Go
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
