import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let eventWrapper;
  let event = mockData[0];
  beforeAll(() => {
    eventWrapper = shallow(<Event event={event} />);
  });

  test("the event element is collapsed", () => {
    expect(eventWrapper.hasClass("collapsed")).toEqual(true);
  });

  test("renders summary in the collapsed event element", () => {
    expect(eventWrapper.find(".summary")).toHaveLength(1);
  });

  test("renders date in the collapsed event element", () => {
    expect(eventWrapper.find(".start-date")).toHaveLength(1);
  });

  test("renders location in the collapsed event element", () => {
    expect(eventWrapper.find(".location")).toHaveLength(1);
  });

  test("renders a button to show details", () => {
    expect(eventWrapper.find(".details-btn")).toHaveLength(1);
  });
});
