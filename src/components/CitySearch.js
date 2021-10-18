import React, { Component } from "react";

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    showSuggestions: false,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className="city-search-wrapper">
        <h2>Search</h2>
        <div className="CitySearch">
          <input
            type="text"
            className="city"
            value={this.state.query}
            placeholder="Enter a city or country"
            onChange={this.handleInputChanged}
            onFocus={() => this.setState({ showSuggestions: true })}
          />
          <ul
            className="suggestions"
            className={`suggestions ${
              this.state.showSuggestions ? "show" : "hide"
            }`}
          >
            {this.state.suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="suggestion"
                onClick={() => {
                  return this.handleItemClicked(suggestion);
                }}
              >
                {suggestion}
              </li>
            ))}
            <li key="all" onClick={() => this.handleItemClicked("all")}>
              <b>See all cities</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;
