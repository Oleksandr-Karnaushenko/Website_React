import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import workImg1 from "../Img/WorksImg/work_1.png";
import workImg2 from "../Img/WorksImg/work_2.png";
import workImg3 from "../Img/WorksImg/work_3.png";
import workImg4 from "../Img/WorksImg/work_4.png";
import workImg5 from "../Img/WorksImg/work_5.png";
import workImg6 from "../Img/WorksImg/work_6.png";
import workImg7 from "../Img/WorksImg/work_7.png";
import workImg8 from "../Img/WorksImg/work_8.png";
import workImg9 from "../Img/WorksImg/work_9.png";

export default class WorksImg extends React.Component {
  constructor() {
    super();
    this.state = {
      img: [
        { id: 1, src: workImg1, type: ["Branding"], visible: false },
        { id: 2, src: workImg2, type: ["Design"], visible: false },
        { id: 3, src: workImg3, type: ["Development"], visible: false },
        { id: 4, src: workImg4, type: ["Branding"], visible: false },
        { id: 5, src: workImg5, type: ["Design"], visible: false },
        { id: 6, src: workImg6, type: ["Design", "Strategy"], visible: false },
        {
          id: 7,
          src: workImg7,
          type: ["Design", "Development"],
          visible: false,
        },
        { id: 8, src: workImg8, type: ["Strategy"], visible: false },
        { id: 9, src: workImg9, type: ["Design"], visible: false },
        { id: 10, src: workImg1, type: ["Branding"], visible: false },
        { id: 11, src: workImg2, type: ["Design"], visible: false },
        { id: 12, src: workImg3, type: ["Development"], visible: false },
        { id: 13, src: workImg4, type: ["Branding"], visible: false },
        { id: 14, src: workImg5, type: ["Design"], visible: false },
        { id: 15, src: workImg6, type: ["Design", "Strategy"], visible: false },
        {
          id: 16,
          src: workImg7,
          type: ["Design", "Development"],
          visible: false,
        },
        { id: 17, src: workImg8, type: ["Strategy"], visible: false },
        { id: 18, src: workImg9, type: ["Design"], visible: false },
        { id: 19, src: workImg1, type: ["Branding"], visible: false },
        { id: 20, src: workImg2, type: ["Design"], visible: false },
        { id: 21, src: workImg3, type: ["Development"], visible: false },
        { id: 22, src: workImg4, type: ["Branding"], visible: false },
        { id: 23, src: workImg5, type: ["Design"], visible: false },
        { id: 24, src: workImg6, type: ["Design", "Strategy"], visible: false },
        {
          id: 25,
          src: workImg7,
          type: ["Design", "Development"],
          visible: false,
        },
        { id: 26, src: workImg8, type: ["Strategy"], visible: false },
        { id: 27, src: workImg9, type: ["Design"], visible: false },
      ],
      filter: [
        { value: (element) => element },
        {
          value: (element) =>
            element.type.findIndex((type) => type === "Branding") >= 0,
        },
        {
          value: (element) =>
            element.type.findIndex((type) => type === "Design") >= 0,
        },
        {
          value: (element) =>
            element.type.findIndex((type) => type === "Development") >= 0,
        },
        {
          value: (element) =>
            element.type.findIndex((type) => type === "Strategy") >= 0,
        },
      ],
    };
  }

  moveImg = (id) => {
    let state = this.state.img;
    state.forEach((element) => {
      if (element.id === id) {
        element.visible = true;
      }
    });
    this.setState({ img: state });
  };
  leaveImg = () => {
    let state = this.state.img;
    state.forEach((element) => {
      element.visible = false;
    });
    this.setState({ img: state });
  };
  render() {
    const photo = this.state.img
      .filter(this.state.filter[this.props.id].value)
      .filter((element, amount) => amount < 9)
      .map((element) => {
        const type = element.type.map((el) => el + " ");
        return (
          <Col
            lg={4}
            md={6}
            key={element.id}
            style={{ backgroundImage: `url(${element.src})` }}
            className="image p-0"
            onMouseMove={() => {
              this.moveImg(element.id);
            }}
            onMouseLeave={() => {
              this.leaveImg();
            }}
          >
            {element.visible ? (
              <div className="bg">
                <h5>Hair Dresser</h5>
                <p>{type}</p>
                <Button className="uppercase boild" variant="">
                  View >
                </Button>
              </div>
            ) : null}
          </Col>
        );
      });
    return <Row className="mt-3 justify-content-center">{photo}</Row>;
  }
}
