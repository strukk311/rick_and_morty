import React, { useState } from 'react';
import './EpisodesFilter.scss';

export const EpisodesFilter = ({ handleSearch, setCurrentPage }) => {
  const [ query, setQuery ] = useState('');

  return(
    <input
      className="EpisodesFilter"
      type="text"
      value={query}
      autoComplete="off"
      placeholder="Episode title"
      onChange={event => {
        setCurrentPage(1);
        setQuery(event.target.value);
        handleSearch(event.target.value);
      }}
    />
  )
}
