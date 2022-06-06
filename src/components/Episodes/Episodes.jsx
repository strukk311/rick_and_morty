import React, { useEffect, useState } from 'react';
import './Episodes.scss';

import { getData } from '../../api/api';
import { EpisodesFilter } from './EpisodesFilter/EpisodesFilter';
import { Pagination } from '../Pagination/Pagination';
import { ListNav } from '../ListNav/ListNav';

export const Episodes = () => {
  const [ episodesFromServer, setEpisodes ] = useState([]);
  const [ episodesAmount, setEpisodesAmount ] = useState(0);
  const [ pagesAmount, setPagesAmount ] = useState(0);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ query, setQuery ] = useState('');

  useEffect(() => {
    const getNewEpisodes = async () => {
      const newEpisodes = await getData(
        `episode?page=${currentPage}&name=${query}`
      );
    

    if (newEpisodes.error) {
      return;
    }

    setEpisodesAmount(newEpisodes.info.count);
    setPagesAmount(newEpisodes.info.pages);
    setEpisodes(newEpisodes.results);
    };

    getNewEpisodes();
  }, [currentPage, query]);

  const handleSearch = (titleRequest) => {
    setQuery(titleRequest);
  }

  return (
    <div className="Episodes">
      <h1 className="Episodes__title">Episodes</h1>
      <div className="Episodes__info">
        <p>Found series: {episodesAmount || "0"}</p>
        <p>Pages: {pagesAmount || "0"}</p>
      </div>

      <EpisodesFilter
        handleSearch={handleSearch}
        setCurrentPage={setCurrentPage}
      />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagesAmount={pagesAmount}
      />

      <ListNav
        currentPage={currentPage}
        pagesAmount={pagesAmount}
        setCurrentPage={setCurrentPage}
      />

      <table className="Episodes__table">
        <thead>
          <tr>
            <td>№</td>
            <td>Episodes</td>
            <td>Title</td>
            <td>Air date</td>
          </tr>
        </thead>

        <tbody>
          {episodesFromServer.map(episode => (
            <tr key={episode.id}>
              <td>{episode.id}.</td>
              <td>{episode.episode}</td>
              <td>{episode.name}</td>
              <td>{episode.air_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}