import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { mockData } from "./mock-data";
import { extractLocations } from "./api";
import NumberOfEvents from "./NumberOfEvents";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: mockData,
    };
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={extractLocations(mockData)} />
        <NumberOfEvents />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
