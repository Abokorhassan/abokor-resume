import React from "react";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <Container>
      <h1 id="name">Abokor Hassan Elmi</h1>
      <h3 id="title">Software Engineer</h3>
      <Row>
        <Col xs={4}>
          <FontAwesomeIcon
            icon="phone"
            color="#008cff"
            size="sm"
            className="margin_btw_icon_and_label"
          />
          0634253226
        </Col>
        <Col xs={8}>
          <FontAwesomeIcon
            icon="at"
            color="#008cff"
            size="sm"
            className="margin_btw_icon_and_label"
          />
          abokorhassan@gmail.com
        </Col>
      </Row>
      <Row id="row">
        <Col xs={4}>
          <FontAwesomeIcon
            icon="map-marker-alt"
            color="#008cff"
            size="sm"
            className="margin_btw_icon_and_label"
          />
          Hargeisa
        </Col>
        <Col xs={8}>
          <FontAwesomeIcon
            icon="link"
            color="#008cff"
            size="sm"
            className="margin_btw_icon_and_label"
          />
          <a id="url" href="http://abokorhassan.000webhostapp.com/">
            http://abokorhassan.000webhostapp.com/
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
