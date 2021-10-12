import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { mockData } from "./mock-data";

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
        <CitySearch />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
