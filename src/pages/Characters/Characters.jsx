import React from 'react';

import { Layout, QueryResult } from '../../components';
import { useFetchCharacters } from '../../hooks';
import CharacterCard from './components/CharactersCard';

const Characters = () => {
  const { characters, page, setPage, error, isLoaded } = useFetchCharacters();

  // const handleNextPage = () => {
  //   setPage(page + 1);
  // };
  // const handlePrevPage = () => {
  //   setPage(page - 1);
  // };

  return (
    <Layout grid>
      <QueryResult error={error} loading={isLoaded} data={characters}>
        {characters?.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Characters;
