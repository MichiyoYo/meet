import React from "react";

class CitySearch extends React.Component {
  state = {
    query: "",
  };

  render() {
    return (
      <div className="CitySearch">
        <input type="text" className="city" value={this.state.query} />
        <ul className="suggestions"></ul>
      </div>
    );
  }
}

export default CitySearch;
