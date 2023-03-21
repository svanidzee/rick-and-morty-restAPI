import React from 'react';

import { Layout, QueryResult } from '../../components/Layout';
import CharacterCard from './components/CharactersCard';
import { useFetchCharacters } from '../../hooks/index';

export default function Characters() {
  const { characters, page, setPage, error, isLoaded } = useFetchCharacters();

  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <Layout
      grid
      nextPage={handleNextPage}
      prevPage={handlePrevPage}
      page={page}
    >
      <QueryResult error={error} loading={isLoaded} data={characters}>
        {characters?.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </QueryResult>
    </Layout>
  );
}
