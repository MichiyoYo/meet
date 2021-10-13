import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClickOnShowDetails = () => {
    this.setState({
      collapsed: false,
    });
  };

  handleClickOnHideDetails = () => {
    this.setState({
      collapsed: true,
    });
  };

  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="start-date">
          {event.start.dateTime} ({event.start.timeZone})
        </p>
        <p className="location">
          @{event.summary} | {event.location}
        </p>
        <button
          className={`show-details-btn ${
            this.state.collapsed ? "show" : "hide"
          }`}
          onClick={this.handleClickOnShowDetails}
        >
          Show Details
        </button>
        <div
          className={`extra-details ${this.state.collapsed ? "hide" : "show"}`}
        >
          <h3>About the event:</h3>
          <a href={event.htmlLink} role="noopener" target="_blank">
            See details on Google Calendar
          </a>
          <p className="event-description">{event.description}</p>
          <button
            className="hide-details-btn"
            onClick={this.handleClickOnHideDetails}
          >
            Hide Details
          </button>
        </div>
      </div>
    );
  }
}

export default Event;
