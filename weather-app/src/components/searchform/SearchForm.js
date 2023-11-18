import React from "react";

const SearchForm = ({ handleSearchChange }) => {
  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="Enter a city name..."
        onChange={handleSearchChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
