import React from 'react';
import styled from '@emotion/styled';

const Pagination = ({ nextPage, prevPage, page }) => {
  return (
    <div>
      {page > 1 && (
        <PaginationButton onClick={prevPage}>Previous Page</PaginationButton>
      )}
      <PaginationButton onClick={nextPage}>Next Page</PaginationButton>
    </div>
  );
};

export default Pagination;

const PaginationButton = styled.button((props) => ({
  borderRadius: '5px',
  backgroundColor: '#a1cdf1',
  color: '#000',
  padding: '10px 15px',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
}));
