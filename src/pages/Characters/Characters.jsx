import React from 'react';

import { Layout, QueryResult } from '../../components/Layout';
import CharacterCard from './components/CharactersCard';
import { useFetchCharacters } from '../../hooks/index';

export default function Characters() {
  const { characters, error, isLoaded } = useFetchCharacters();
  console.log(characters);
  return (
    <Layout grid>
      <QueryResult error={error} loading={isLoaded} data={characters}>
        {characters?.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </QueryResult>
    </Layout>
  );
}
