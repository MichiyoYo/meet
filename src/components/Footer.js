import React from "react";
import { Col, Row } from "react-bootstrap";

function Footer(props) {
  return (
    <footer>
      <Row>
        <Col sm={12} md={6}>
          <p className="left">
            Designed and Developed by{" "}
            <a href="https://cristinalester.rocks">Cristina Lester</a>
          </p>
        </Col>

        <Col sm={12} md={6}>
          <p>2021 &copy; All Rights Reserved</p>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
