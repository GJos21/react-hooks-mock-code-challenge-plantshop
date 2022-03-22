import React from "react";

function Search({ onFilter, filterText }) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={filterText}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

export default Search;
