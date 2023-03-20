import React from 'react';
import axios from 'axios';
import { Layout, QueryResult } from '../components/Layout';

export default function Characters() {
  const [characters, setCharacters] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  console.log(characters);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'https://rickandmortyapi.com/api/character',
        );
        setIsLoaded(true);
        setCharacters(response.data.results);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Layout grid>
      <QueryResult error={error} loading={isLoaded} data={characters}>
        {characters?.map((char) => (
          <ul>
            <li>{char.name}</li>
          </ul>
        ))}
      </QueryResult>
    </Layout>
  );
}
