import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { mockData } from "./mock-data";
import { extractLocations } from "./api";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents } from "./api";

class App extends Component {
  locations = extractLocations(mockData);
  constructor(props) {
    super(props);

    this.state = {
      events: mockData,
      locations: this.locations,
    };
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = events.filter(
        (event) => event.location === location
      );
      this.setState({
        events: locationEvents,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
