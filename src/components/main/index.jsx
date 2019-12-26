import React from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";
import MainProjects from "./main-projects";
import PersonalStatement from "./perseonal-statement";

const Main = () => {
  return (
    <div className="main">
      <Row>
        <Col xs={7}>
          <PersonalStatement />
          <MainProjects />
        </Col>
        <Col xs={5}></Col>
      </Row>
    </div>
  );
};

export default Main;
