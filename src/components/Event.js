import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { WarningAlert } from "./Alert";
import formatDate from "../helpers/formatter";

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

    const endDate = new Date(event.end.dateTime);
    var timeStamp = Math.round(new Date().getTime() / 1000);
    var timeStampYesterday = timeStamp - 24 * 3600;
    var endsSoon = endDate >= new Date(timeStampYesterday * 1000).getTime();

    console.log(
      "Event end date: " +
        formatDate(endDate) +
        ", today: " +
        formatDate(new Date())
    );
    return (
      <div className="event">
        {endsSoon ? <WarningAlert text="Ending soon!" /> : ""}

        <h2 className="summary">{event.summary}</h2>
        <p className="start-date">
          {formatDate(new Date(event.start.dateTime))} ({event.start.timeZone})
        </p>

        <p className="location">
          @{event.summary} | {event.location}
        </p>

        <Button
          variant="primary"
          className={`show-details-btn ${
            this.state.collapsed ? "show" : "hide"
          }`}
          onClick={this.handleClickOnShowDetails}
        >
          Show Details
        </Button>
        <div
          className={`extra-details ${this.state.collapsed ? "hide" : "show"}`}
        >
          <h3>About the event:</h3>
          <a href={event.htmlLink} role="noopener" target="_blank">
            See details on Google Calendar
          </a>
          <p className="event-description">{event.description}</p>

          <Button
            variant="primary"
            className="hide-details-btn"
            onClick={this.handleClickOnHideDetails}
          >
            Hide Details
          </Button>
        </div>
      </div>
    );
  }
}

export default Event;
