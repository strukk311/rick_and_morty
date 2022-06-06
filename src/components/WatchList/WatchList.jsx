import React, { useEffect, useState } from 'react';
import './WatchList.scss';

import { WatchItem } from './WatchItem/WatchItem';

export const WatchList = () => {
  const [ movies, setMovies ] = useState([]);
  const [ newMovieTitle, setMovieTitle ] = useState('');

  useEffect(() => {
    const movies = localStorage.getItem('movies') || '[]';
    setMovies(JSON.parse(movies));
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = (event) => {
    event.preventDefault();

    if (!newMovieTitle.trim()) return;

    setMovies([
      ...movies,
      {
        id: Date.now(),
        title: newMovieTitle.trim(),
        completed: false,
      }
    ]);

    setMovieTitle('');
  }

  const toggleMovie = (id) => {
    setMovies(movies.map(movie => {
      if (movie.id === id) {
        movie.completed = !movie.completed;
      }

      return movie;
    }));
  }

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => {
      return movie.id !== id;
    }));
  }

  return (
    <div className="WatchList">
      <h1 className="WatchList__title">My watch list</h1>

      <form
        className="WatchList__form"
        action=""
        onSubmit={addMovie}
      >
        <input
          className="WatchList__input"
          placeholder="Episide"
          autoComplete="off"
          type="text"
          value={newMovieTitle}
          onChange={(event) => setMovieTitle(event.target.value)}
        />
        <button
          type="submit"
          className="WatchList__button"
        >
          Add
        </button>
      </form>

      <table className="WatchList__table">
        <thead>
          <tr className="WatchList__first-row">
            <td>№</td>
            <td>Watched</td>
            <td>Title</td>
            <td>Delete</td>
          </tr>
        </thead>

        <tbody>
          {
            movies.map((movie, index) => (
              <WatchItem
                index={index}
                key={movie.id}
                movie={movie}
                title={newMovieTitle}
                toggleMovie={toggleMovie}
                removeMovie={removeMovie}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
