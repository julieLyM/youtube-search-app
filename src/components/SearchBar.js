import React from "react";

function SearchBar({ onQueryChange }) {
  return (
    <div>
      <input onChange={onQueryChange}></input>
    </div>
  );
}

export default SearchBar;
