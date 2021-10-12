import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
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
