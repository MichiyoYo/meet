import React from "react";
import { mount, shallow } from "enzyme";
import { mockData } from "../helpers/mock-data";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import NumberOfEvents from "../components/NumberOfEvents";
import EventList from "../components/EventList";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the user hasn't specified a number of events to display", () => {
      AppWrapper = mount(<App />);
      AppWrapper.setState({ showWelcomeScreen: false });
    });

    when("the search is executed", () => {
      AppWrapper.update();
    });

    then(
      "the search result will display 32 results, which is the default number",
      () => {
        expect(AppWrapper.find(".event")).toHaveLength(32);
      }
    );
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given(
      "the user decides to see a different number n!=32 of events in the search results",
      () => {
        AppWrapper = mount(<App />);
        AppWrapper.setState({ showWelcomeScreen: false });
      }
    );

    when("the user types a number n", () => {
      const numberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      numberOfEventsWrapper
        .find("input")
        .simulate("change", { target: { value: 20 } });
    });

    then("the search results will display n event elements", () => {
      expect(AppWrapper.state("numberOfEvents")).toEqual(20);
    });
  });
});
