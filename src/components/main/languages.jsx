import React from "react";
import { Row, Col } from "react-bootstrap";

const Languages = () => {
  return (
    <div className="mt-sm-3">
      <h3>Languages</h3>
      <hr className="hr-headlines" />
      <Row>
        <Col xs={4}>
          <h5>
            <span className="span-languages"> Somali.</span>
          </h5>
        </Col>
        <Col xs={4}>
          <h5>
            <span className="span-languages"> English.</span>
          </h5>
        </Col>
        <Col xs={4}>
          <h5>
            <span className="span-languages"> Arabic.</span>.
          </h5>
        </Col>
      </Row>
    </div>
  );
};

export default Languages;
