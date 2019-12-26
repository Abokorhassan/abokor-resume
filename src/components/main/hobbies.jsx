import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hobbies = () => {
  return (
    <div>
      <h3>HOBBIES</h3>
      <hr className="hr-headlines" />
      <Row>
        <Col>
          <h5>
            <FontAwesomeIcon
              icon="futbol"
              color="#008cff"
              size="lg"
              className="margin_btw_icon_and_label"
            />
            Football.
          </h5>
        </Col>
        <Col>
          <h5>
            <FontAwesomeIcon
              icon="gamepad"
              color="#008cff"
              size="lg"
              className="margin_btw_icon_and_label"
            />
            Video Games.
          </h5>
        </Col>
      </Row>
    </div>
  );
};

export default Hobbies;
