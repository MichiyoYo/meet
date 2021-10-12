import React from "react";

function CitySearch(props) {
  return (
    <div className="CitySearch">
      <form onSubmit={() => console.log("searching")}>
        <input type="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default CitySearch;
