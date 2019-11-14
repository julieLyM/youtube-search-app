import React from "react";
import PropTypes from "prop-types";

function SearchBar({ onQueryChange }) {
  return (
    <div>
      <input onChange={onQueryChange}></input>
    </div>
  );
}

SearchBar.propTypes = {
  onQueryChange: PropTypes.func
};

export default SearchBar;
