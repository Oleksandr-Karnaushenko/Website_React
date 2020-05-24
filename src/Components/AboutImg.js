import React, { Component } from "react";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import worker1 from "../Img/AboutImg/worker1.png";
import worker2 from "../Img/AboutImg/worker2.png";
import worker3 from "../Img/AboutImg/worker3.png";
import worker4 from "../Img/AboutImg/worker4.png";
import worker5 from "../Img/AboutImg/worker5.png";
import worker6 from "../Img/AboutImg/worker6.png";
import worker7 from "../Img/AboutImg/worker7.png";
import worker8 from "../Img/AboutImg/worker8.png";

import Facebook from "../Img/Facebook.png";
import Instagram from "../Img/Instagram.png";
import YouTube from "../Img/YouTube.png";
import Twitter from "../Img/Twitter.png";

import Left from "../Img/left.png";
import Right from "../Img/right.png";

export default class AboutImg extends Component {
  constructor() {
    super();
    this.state = {
      team: [
        {
          id: 0,
          src: worker1,
          name: "Md. Khalil Uddin",
          post: "Head of Ideas",
          visible: false,
        },
        {
          id: 1,
          src: worker2,
          name: "Rubel Miah",
          post: "Lead WordPress Developer",
          visible: false,
        },
        {
          id: 2,
          src: worker3,
          name: "Shamim Mia",
          post: "Sr. Web Developer",
          visible: false,
        },
        {
          id: 3,
          src: worker4,
          name: "John Doe",
          post: "Front-end Developer",
          visible: false,
        },
        { id: 4, src: worker5, name: "Iron Man", post: "Hero", visible: false },
        { id: 5, src: worker6, name: "Hulk", post: "Hero", visible: false },
        {
          id: 6,
          src: worker7,
          name: "Scarlet Witch",
          post: "Hero",
          visible: false,
        },
        {
          id: 7,
          src: worker8,
          name: "Captain America",
          post: "Hero",
          visible: false,
        },
      ],
      ofset: 0,
    };
  }
  moveImg = (id) => {
    let state = this.state.team;
    state.forEach((element) => {
      if (element.id === id) {
        element.visible = true;
      }
    });
    this.setState({ team: state });
  };
  leaveImg = () => {
    let state = this.state.team;
    state.forEach((element) => {
      element.visible = false;
    });
    this.setState({ team: state });
  };
  leftBtn = () => {
    if (this.state.ofset > 0) {
      this.setState({ ofset: this.state.ofset - 1 });
    }
  };
  rightBtn = () => {
    if (this.state.ofset < this.state.team.length - 4) {
      this.setState({ ofset: this.state.ofset + 1 });
    }
  };
  render() {
    const workers = this.state.team
      .filter(
        (el, index) => index < this.state.ofset + 4 && index >= this.state.ofset
      )
      .map((element) => {
        return (
          <Col
            md={6}
            lg={3}
            key={element.id}
            className="p-1"
            onMouseMove={() => {
              this.moveImg(element.id);
            }}
            onMouseLeave={() => {
              this.leaveImg();
            }}
          >
            <Row className="justify-content-center">
              <Col
                className="image p-0"
                style={{ backgroundImage: `url(${element.src})` }}
              >
                {element.visible ? (
                  <div className="bg">
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
                  </div>
                ) : null}
              </Col>
            </Row>
            <h5 className="uppercase mt-3">{element.name}</h5>
            <p>{element.post}</p>
          </Col>
        );
      });
    return (
      <Row className="mt-4 justify-content-center btns">
        {workers}
        <Button
          className="btnControl L"
          variant=""
          style={{ backgroundImage: `url(${Left})` }}
          onClick={this.leftBtn}
        ></Button>
        <Button
          className="btnControl R"
          variant=""
          style={{ backgroundImage: `url(${Right})` }}
          onClick={this.rightBtn}
        ></Button>
      </Row>
    );
  }
}
