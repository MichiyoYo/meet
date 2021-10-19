import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.background = null;
  }

  getStyle = () => {
    return {
      background: this.color,
    };
  };

  render() {
    return (
      <div className={`Alert ${this.props.text ? "show" : "hide"}`}>
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "#0d6efd";
  }
}

export { InfoAlert };
