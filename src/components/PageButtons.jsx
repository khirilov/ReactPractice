import React from "react";

const PageButtons = ({ totalPages, setPage }) => {
  const pageArray = [];
  for (let i = 1; i <= totalPages; i++) {
    pageArray.push(i);
  }

  const updatePages = (currentPage) => {
    setPage(currentPage);
  };

  return (
    <div className="pagesWrapper">
      {pageArray.map((p) => {
        return (
          <button
            className="btn"
            key={p}
            onClick={() => {
              updatePages(p);
            }}
          >
            {p}
          </button>
        );
      })}
    </div>
  );
};

export { PageButtons };
