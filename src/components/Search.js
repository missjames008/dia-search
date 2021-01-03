import React, { useState } from "react";

const Search = (props) => {
  //set initial search value to empty
  const [searchValue, setSearchValue] = useState("");

  //set search value according to input
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  //reset search field to empty
  const resetInputField = () => {
    setSearchValue("");
  };

  //execute search & reset
  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        className="search-input"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Search by title, subject, keyword, etc"
      />
      <input
        onClick={callSearchFunction}
        type="submit"
        value="SEARCH"
        className="searchButton"
      />
    </form>
  );
};

export default Search;
