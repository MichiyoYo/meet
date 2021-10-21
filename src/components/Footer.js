import React from "react";
import { Col, Row } from "react-bootstrap";

function Footer(props) {
  return (
    <footer>
      <Row>
        <Col sm={12} md={4} className="footer-slot">
          <p className="left">
            Designed and Developed by{" "}
            <a href="https://cristinalester.rocks">Cristina Lester</a>
          </p>
        </Col>
        <Col sm={12} md={4} className="footer-slot">
          <p>
            <a href="https://michiyoyo.github.io/meet/privacy.html">
              Privacy Policy
            </a>
          </p>
        </Col>
        <Col sm={12} md={4} className="footer-slot">
          <p>2021 &copy; All Rights Reserved</p>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
