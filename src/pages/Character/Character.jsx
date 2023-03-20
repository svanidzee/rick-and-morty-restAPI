import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Layout, QueryResult } from '../../components/Layout';
import CharacterDetail from './components/CharacterDetail';

export default function Character() {
  const [character, setCharacter] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  let { id } = useParams();
  console.log(character);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`,
        );
        setIsLoaded(true);
        setCharacter(response.data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Layout grid>
      <QueryResult error={error} loading={isLoaded} data={character}>
        <CharacterDetail character={character} />
      </QueryResult>
    </Layout>
  );
}
