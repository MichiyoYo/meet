import React from "react";
import { mount, shallow } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mockData } from "../helpers/mock-data";
import EventList from "../components/EventList";
import Event from "../components/Event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("a list of events is displayed on the page", () => {
      let EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find("ul.EventList")).toHaveLength(1);
    });

    when("a user looks at the list of events", () => {});

    then("the user should see that each event is collapsed by default", () => {
      let EventWrapper = shallow(<Event event={mockData[0]} />);
      let extraDetails = EventWrapper.find(".event .extra-details");
      expect(extraDetails.hasClass("hide")).toBe(true);
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let EventWrapper;
    given("a list of collapsed events on the page", () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      expect(EventWrapper.state("collapsed")).toEqual(true);
    });

    when(
      "the user clicks on the Show details button of an event element",
      () => {
        const showDetailsBtn = EventWrapper.find(".show-details-btn");
        showDetailsBtn.simulate("click");
      }
    );

    then("the event element expands, showing the event's details", () => {
      expect(EventWrapper.state("collapsed")).toEqual(false);
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let EventWrapper;
    given("an expanded event element", () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.setState({ collapsed: false });
    });

    when(
      "the user clicks on the Hide details button of the event element",
      () => {
        EventWrapper.find(".hide-details-btn").simulate("click");
      }
    );

    then("the event element collapses, hiding the details of the event", () => {
      expect(EventWrapper.state("collapsed")).toBe(true);
    });
  });
});
