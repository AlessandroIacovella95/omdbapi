import React, { useState } from "react";
export const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");
  const manageSearch = (evt) => {
    const s = evt.target.value;
    setSearch(s);
  };

  const searchMovies = (evt) => {
    evt.preventDefault();
    if (search.length > 3) {
      onSearchChange(search);
    }
  };
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name="search"
        value={search}
        onChange={manageSearch}
      />
      <button onClick={searchMovies} className="btn btn-success" type="submit">
        Ricerca
      </button>
      <button
        on
        onClick={() => {
          setSearch("");
        }}
        className="btn btn-info"
        type="reset"
      >
        Annulla
      </button>
    </form>
  );
};
