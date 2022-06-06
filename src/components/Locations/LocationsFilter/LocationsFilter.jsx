import React, { useState } from 'react';
import './LocationsFilter.scss';

export const LocationsFilter = ({ handleFilter }) => {
  const [ filter, setFilter ] = useState({ 
    name: '',
    type: '',
    dimension: '',
   })

  return (
    <form className="LocationsFilter">
      <input
        className="LocationsFilter__field"
        type="text"
        value={filter.name}
        name="name"
        placeholder="Location"
        autoComplete="off"
        onChange={(event) => {
          setFilter({ ...filter, name: event.target.value });
          handleFilter({ ...filter, name: event.target.value });
        }}
      />

      <select
        className="LocationsFilter__field"
        value={filter.type}
        name="gender"
        onChange={(event) => {
          setFilter({ ...filter, type: event.target.value });
          handleFilter({ ...filter, type: event.target.value });
        }}
      >
        <option value="">All</option>
        <option value="Planet">Planet</option>
        <option value="Cluster">Cluster</option>
        <option value="Space station">Space station</option>
        <option value="Microverse">Microverse</option>
        <option value="Resort">Resort</option>
        <option value="Fantasy town">Fantasy town</option>
        <option value="Space station">Space station</option>
        <option value="TV">TV</option>
        <option value="Dream">Dream</option>
      </select>

      <select
        className="LocationsFilter__field"
        value={filter.dimension}
        name="species"
        onChange={(event) => {
          setFilter({ ...filter, dimension: event.target.value });
          handleFilter({ ...filter, dimension: event.target.value });
        }}
      >
        <option value="">All</option>
        <option value="Dimension C-137">Dimension C-137</option>
        <option value="unknown">unknown</option>
        <option value="Replacement Dimension">Replacement Dimension</option>
        <option value="Cronenberg Dimension">Cronenberg Dimension</option>
        <option value="Fantasy Dimension">Fantasy Dimension</option>
        <option value="Dimension 5-126">Dimension 5-126</option>
        <option value="Post-Apocalyptic Dimension">Post-Apocalyptic Dimension</option>
      </select>
    </form>
  )
}
