import React from 'react';

export default function Footer({ page, nextPage, prevPage }) {
  return (
    <div>
      {page > 1 && <button onClick={prevPage}>Previous Page</button>}

      <button onClick={nextPage}>Next Page</button>
    </div>
  );
}
