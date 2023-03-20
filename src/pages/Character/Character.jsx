import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Layout, QueryResult } from '../../components/Layout';
import CharacterDetail from './components/CharacterDetail';
import { useFetchCharacter } from '../../hooks/index';

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
