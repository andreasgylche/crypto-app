import React from "react";

export default function Search({ setSearch }) {
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          placeholder="Search for a cryptocurrency"
          className="search-input"
          onChange={updateSearch}
        />
      </form>
    </div>
  );
}
