import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul className="EventList">
        {events.map((event, index) => (
          <li className="event" key={event.id}>
            <p>{index}</p>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventList;
