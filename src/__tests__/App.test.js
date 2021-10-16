import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from "../mock-data";
import { extractLocations, getEvents } from "../api";

describe("<App /> component", () => {
  let AppWrapper;

  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test("render NumberOfEvents", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe("<App /> integration", () => {
  test('App passes "events" state as a prop to EventList', () => {
    let AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state("events");
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    let AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state("locations");
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    );
    AppWrapper.unmount();
  });

  test("get list of events matching the city selected by the user", async () => {
    let AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state("suggestions");
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(
      (event) => event.location === selectedCity
    );
    expect(AppWrapper.state("events")).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    let AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find(".suggestions li");
    await suggestionItems.at(suggestionItems.length - 1).simulate("click");
    const allEvents = await getEvents();
    expect(AppWrapper.state("events")).toEqual(allEvents);
    AppWrapper.unmount();
  });

  test("change numberOfEvents state when NumberOfEvents changes", () => {
    let AppWrapper = mount(<App />);
    AppWrapper.setState({ numberOfEvents: 32 });
    const numEventsInputWpapper = AppWrapper.find(NumberOfEvents);
    const eventObject = { target: { value: 10 } };
    numEventsInputWpapper.find(".num-events").simulate("change", eventObject);
    expect(AppWrapper.state("numberOfEvents")).toEqual(10);
    AppWrapper.unmount();
  });

  test("the state numberOfEvents is passed properly to the component NumberOfEvents", async () => {
    let AppWrapper = mount(<App />);
    const allEvents = await getEvents();
    const number = 20;
    AppWrapper.setState({
      events: allEvents.slice(0, number),
      numberOfEvents: number,
    });
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);

    expect(NumberOfEventsWrapper.prop("numberOfEvents")).toEqual(number);

    AppWrapper.unmount();
  });

  test("render mockdata correctly", async () => {
    let AppWrapper = mount(<App />);
    const allEvents = await getEvents();
    const number = 10;
    AppWrapper.setState({
      events: allEvents.slice(0, number),
      numberOfEvents: number,
    });
    const EventListWrapper = AppWrapper.find(EventList);
    const eventArray = EventListWrapper.prop("events");
    expect(eventArray.length).toEqual(number);
    AppWrapper.unmount();
  });
});
