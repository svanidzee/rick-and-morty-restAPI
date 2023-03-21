import React from 'react';
import { useParams } from 'react-router-dom';

import { Layout, QueryResult } from '../../components';
import { CharacterDetail } from './components';
import { useFetchCharacter } from '../../hooks';

export default function Character() {
  let { id } = useParams();

  const { character, error, isLoaded } = useFetchCharacter(id);

  return (
    <Layout grid>
      <QueryResult error={error} loading={isLoaded} data={character}>
        <CharacterDetail character={character} />
      </QueryResult>
    </Layout>
  );
}
