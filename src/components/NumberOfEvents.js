import React, { Component } from "react";
import RangeSlider from "react-bootstrap-range-slider";

class NumberOfEvents extends Component {
  render() {
    return (
      <div className="NumberOfEvents mt-40">
        <h3>How Many Events?</h3>
        <RangeSlider
          min={1}
          max={50}
          className="num-events"
          value={this.props.numberOfEvents}
          onChange={(e) => this.props.updateNumberOfEvents(e)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
