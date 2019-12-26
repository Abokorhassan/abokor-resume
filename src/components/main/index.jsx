import React from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";
import MainProjects from "./main-projects";
import PersonalStatement from "./perseonal-statement";
import Hobbies from "./hobbies";
import Education from "./education";
import Skills from "./skills";

const Main = () => {
  return (
    <div className="main">
      <Row>
        <Col xs={7}>
          <PersonalStatement />
          <MainProjects />
          <Hobbies />
        </Col>
        <Col xs={5}>
          <Education />
          <Skills />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
