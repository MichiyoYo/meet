import React, { Component } from "react";

class NumberOfEvents extends Component {
  render() {
    return (
      <div className="NumberOfEvents">
        <p>Number of Events</p>
        <input
          type="number"
          min="1"
          max="50"
          className="num-events"
          value={this.props.numberOfEvents}
          onChange={(e) => this.props.updateNumberOfEvents(e)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
