import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageButton = (page) => {
    return (
      <li key={page}>
        <a
          href="#"
          className={`px-3 py-2 leading-tight ${
            currentPage === page
              ? 'border hover:bg-blue-100 hover:text-blue-700 border-gray-700 bg-gray-700 text-white'
              : 'border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </a>
      </li>
    );
  };

  const renderEllipsisButton = () => {
    return (
      <li key="ellipsis">
        <a
          href="#"
          className="px-3 py-2 leading-tight bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700"
        >
          ...
        </a>
      </li>
    );
  };

  const renderPaginationButtons = () => {
    const buttons = [];

    const maxVisibleButtons = 3; // Número máximo de botones visibles
    const totalVisibleButtons = Math.min(maxVisibleButtons, totalPages);

    if (totalVisibleButtons <= 3) {
      for (let page = 1; page <= totalVisibleButtons; page++) {
        buttons.push(renderPageButton(page));
      }
    } else {
      buttons.push(renderPageButton(1));
      buttons.push(renderPageButton(2));
      buttons.push(renderPageButton(3));

      if (currentPage >= 4 && currentPage <= totalPages - 3) {
        buttons.push(renderEllipsisButton());
      }

      if (currentPage <= totalPages - 3) {
        buttons.push(renderPageButton(totalPages));
      } else if (currentPage > totalPages - 3) {
        buttons.push(renderPageButton(totalPages - 1));
        buttons.push(renderPageButton(totalPages));
      }
    }

    return buttons;
  };

  return (
    <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
      <span className="text-sm font-normal text-gray-400">
        Mostrando{' '}
        <span className="font-semibold text-white">{currentPage}</span>-
        <span className="font-semibold text-white">{currentPage + 7}</span> de{' '}
        <span className="font-semibold text-white">{totalPages}</span>
      </span>
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <a
            href="#"
            className="block px-3 py-2 ml-0 leading-tight border rounded-l-lg  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </li>

        {renderPaginationButtons()}

        <li>
          <a
            href="#"
            className="block px-3 py-2 leading-tight  border rounded-r-lg  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;