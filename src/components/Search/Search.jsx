import React, { useState } from 'react';
import './Search.scss';

export const Search = ({ handleSearch, setCurrentPage }) => {
  const [ query, setQuery ] = useState('');

  return(
    <input
      className="Search"
      type="text"
      value={query}
      autoComplete="off"
      placeholder="Enter the name..."
      onChange={event => {
        setCurrentPage(1);
        setQuery(event.target.value);
        handleSearch(event.target.value);
      }}
    />
  )
}
