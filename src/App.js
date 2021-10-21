import React, { Component } from "react";
import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import NumberOfEvents from "./components/NumberOfEvents";
import Header from "./components/Header";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";
import {
  getEvents,
  extractLocations,
  checkToken,
  getAccessToken,
} from "./helpers/api";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import "./nprogress.css";
import "./scss/styles.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      locations: {},
      numberOfEvents: 32,
      currentLocation: "all",
      errorText: "",
      showWelcomeScreen: undefined,
    };
  }

  async componentDidMount() {
    this.mounted = true;

    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);

      const eventsToShow = locationEvents.slice(0, numberOfEvents);
      if (this.mounted) {
        this.setState({
          events: eventsToShow,
          currentLocation: location,
        });
      }
    });
  };

  updateNumberOfEvents = async (e) => {
    const newVal = e.target.value ? parseInt(e.target.value) : 32;

    if (newVal < 1 || newVal > 32) {
      await this.setState({
        errorText: "Please choose a number between 1 and 32",
      });
    } else {
      await this.setState({
        errorText: "",
        numberOfEvents: newVal,
      });
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    }
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) {
      return <div className="App" />;
    }

    return (
      <div className="App">
        <Header />
        <main>
          <Container fluid>
            <Row className="d-flex justify-content-center pt-0">
              <Col md={3} sm={10}>
                <CitySearch
                  locations={this.state.locations}
                  updateEvents={this.updateEvents}
                />
                <NumberOfEvents
                  numberOfEvents={this.state.numberOfEvents}
                  updateNumberOfEvents={this.updateNumberOfEvents}
                  errorText={this.state.errorText}
                />
              </Col>
            </Row>
            <EventList events={this.state.events} />
          </Container>
        </main>
        <Footer />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
