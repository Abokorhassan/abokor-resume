import React from "react";
import { Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <div>
      <h3>SKILLS</h3>
      <hr className="hr-headlines" />
      <div>
        <h5>Web Development - Frontend</h5>
        <div className="pl-sm-3">
          <Row className="mt-sm-3">
            <Col xs={6}>
              <span className="span-skills">HTMLS</span>
            </Col>
            <Col xs={6}>
              <span className="span-skills">CSS</span>
            </Col>
          </Row>
          <Row className="mt-sm-3">
            <Col xs={6}>
              <span className="span-skills">JavaScript</span>
            </Col>
            <Col xs={6}>
              <span className="span-skills">ReactJS</span>
            </Col>
          </Row>
        </div>
      </div>
      <div className="mt-sm-3">
        <h5>Web Development - Backend</h5>
        <div className="pl-sm-3">
          <Row>
            <Col xs={12}>
              <span className="span-skills">Laravel</span>
            </Col>
          </Row>
        </div>
      </div>
      <div className="mt-sm-3">
        <h5>Mobile Development</h5>
        <div className="pl-sm-3">
          <Row>
            <Col xs={6}>
              <span className="span-skills">Android</span>
            </Col>
            <Col xs={6}>
              <span className="span-skills">Xamarin</span>
            </Col>
          </Row>
        </div>
      </div>
      <div className="mt-sm-3">
        <h5>Programming Languages</h5>
        <div className="ml-sm-3">
          <Row className="mt-sm-3">
            <Col xs={6}>
              <span className="span-skills">Javascript</span>
            </Col>
            <Col xs={6}>
              <span className="span-skills">Java</span>
            </Col>
          </Row>
          <Row className="mt-sm-3">
            <Col xs={6}>
              <span className="span-skills">PHP</span>
            </Col>
            <Col xs={6}>
              <span className="span-skills">C#</span>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Skills;
