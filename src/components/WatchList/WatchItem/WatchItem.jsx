import React from 'react';
import './WatchItem.scss';

export const WatchItem = ({ movie, index, toggleMovie, removeMovie }) => {

  return (
    <tr key={movie.id}>
      <td>{index + 1}.</td>
      <td>
        <input
          type="checkbox"
          checked={movie.completed}
          onChange={() => toggleMovie(movie.id)}
        />
      </td>
      <td>{movie.title}</td>
      <td>
        <button
          className="WatchItem__button"
          onClick={() => removeMovie(movie.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}
