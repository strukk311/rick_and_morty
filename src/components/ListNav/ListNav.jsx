import React from 'react';
import classNames from 'classnames';
import './ListNav.scss';

export const ListNav = ({ currentPage, pagesAmount, setCurrentPage }) => {
  
  return (
    <div className="ListNav">
      <button
        type="button"
        className={classNames("ListNav__nav-toggler", {
          "ListNav__nav-toggler--disabled": (currentPage < 2),
        })}
        onClick={(event) => {
          event.preventDefault();
          setCurrentPage(currentPage => currentPage - 1);
        }}
      >
        back
      </button>

      <button
        type="button"
        className={classNames("ListNav__nav-toggler", {
          "ListNav__nav-toggler--disabled": (pagesAmount <= currentPage),
        })}
        onClick={(event) => {
          event.preventDefault();
          setCurrentPage(currentPage => currentPage + 1);
        }}
      >
        forward
      </button>
    </div>
  )
}
