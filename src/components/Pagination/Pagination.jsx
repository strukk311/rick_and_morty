import React from 'react';
import './Pagination.scss';

export const Pagination = ({ currentPage, setCurrentPage, pagesAmount }) => {

  return (
    <div className="Pagination">
      {currentPage > 1 &&
        <button
          type="button"
          className="Pagination__page-button"
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          1
        </button>
      }

      {currentPage > 3 && "..."}

      {currentPage > 2 &&
        <button
          type="button"
          className="Pagination__page-button"
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          {currentPage - 1}
        </button>
      }

      <button
        disabled
        type="button"
        className="Pagination__page-button Pagination__page-button--active"
      >
        {currentPage}
      </button>

      {(currentPage < pagesAmount - 1) &&
        <button
          type="button"
          className="Pagination__page-button"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          {currentPage + 1}
        </button>
      }

      {(currentPage < pagesAmount - 2) && "..."}

      {currentPage < pagesAmount &&
        <button
          type="button"
          className="Pagination__page-button"
          onClick={() => {
            setCurrentPage(pagesAmount);
          }}
        >
          {pagesAmount}
        </button>
      }
    </div>
  )
}
