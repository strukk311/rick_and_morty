import React, { useState } from 'react';
import './CharactersFilter.scss';

export const CharactersFilter = ({ handleFilter }) => {
  const [ filter, setFilter ] = useState({ 
    status: '',
    species: '',
    gender: '',
   });

  return (
    <form className="CharactersFilter">
      <select
        className="CharactersFilter__select"
        value={filter.status}
        name="status"
        onChange={(event) => {
          setFilter({ ...filter, status: event.target.value });
          handleFilter({ ...filter, status: event.target.value });
        }}
      >
        <option value="">All</option>
        <option value="Dead">Dead</option>
        <option value="Alive">Alive</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        className="CharactersFilter__select"
        value={filter.gender}
        name="gender"
        onChange={(event) => {
          setFilter({ ...filter, gender: event.target.value });
          handleFilter({ ...filter, gender: event.target.value });
        }}
      >
        <option value="">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        className="CharactersFilter__select"
        value={filter.species}
        name="species"
        onChange={(event) => {
          setFilter({ ...filter, species: event.target.value });
          handleFilter({ ...filter, species: event.target.value });
        }}
      >
        <option value="">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Animal">Animal</option>
        <option value="Disease">Disease</option>
        <option value="Cronenberg">Cronenberg</option>
        <option value="Robot">Robot</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Poopybutthole">Poopybutthole</option>
        <option value="unknown">Unknown</option>
      </select>
    </form>
  )
}
