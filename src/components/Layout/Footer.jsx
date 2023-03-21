import React from 'react';
import styled from '@emotion/styled';

export default function Footer({ page, nextPage, prevPage }) {
  return (
    <div>
      {page > 1 && (
        <PaginationButton onClick={prevPage}>Previous Page</PaginationButton>
      )}
      <PaginationButton onClick={nextPage}>Next Page</PaginationButton>
    </div>
  );
}

const PaginationButton = styled.button((props) => ({
  borderRadius: '5px',
  backgroundColor: '#a1cdf1',
  color: '#000',
  padding: '10px 15px',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
}));
