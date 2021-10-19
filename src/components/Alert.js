import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.background = null;
    this.type = null;
  }

  getStyle = () => {
    return {
      background: this.background,
    };
  };

  render() {
    return (
      <div
        className={`Alert ${this.props.text ? "visible" : "unvisible"} ${
          this.type
        }`}
      >
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.background = "#0d6efd";
    this.type = "info";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.background = "#e91e63";
    this.type = "error";
  }
}

export { InfoAlert, ErrorAlert };
