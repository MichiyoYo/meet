import React from "react";
import { Row } from "react-bootstrap";
import logo from "../images/logo2x.webp";

function Header(props) {
  return (
    <header>
      <Row>
        <h1 className="header-logo">
          <img src={logo} alt="Meet Logo" />
        </h1>
      </Row>
    </header>
  );
}

export default Header;
