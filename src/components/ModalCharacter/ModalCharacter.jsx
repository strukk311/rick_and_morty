import React from 'react';
import './ModalCharacter.scss';

export const ModalCharacter = ({
  image,
  name,
  species,
  gender,
  status,
  location,
  episode,
  created,
  origin,
  modalReset
}) => {

  return (
    <div className="ModalCharacter">
      <button
        className="ModalCharacter__close"
        type="button"
        onClick={modalReset}
      >
        x
      </button>
      <div className="ModalCharacter__picture">
        <img
          className="ModalCharacter__image"
          src={image}
          alt={name}
        />
      </div>
      <ul className="ModalCharacter__list">
        <li>
          <b>Name: </b>
          {name}
        </li>
        <li>
          <b>Species: </b>
          {species}
        </li>
        <li>
          <b>Gender: </b>
          {gender}
        </li>
        <li>
          <b>Location: </b>
          {location.name}
        </li>
        <li>
          <b>Episodes: </b>
          {episode.map(e => {
            let splittedEpisode = e.split('/');
            if (episode.indexOf(e) === episode.length - 1) {
              return splittedEpisode[splittedEpisode.length - 1] + ' ';
            }

            return splittedEpisode[splittedEpisode.length - 1] + ', ';
          })}
        </li>
        <li>
          <b>Status: </b>
          {status}
        </li>
        <li>
          <b>Created: </b>
          {created}
        </li>
        <li>
          <b>Origin: </b>
          {origin.name}
        </li>
      </ul>
    </div>
  )
}
