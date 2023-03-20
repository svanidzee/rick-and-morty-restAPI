import { useState, useEffect } from 'react';
import { useApi } from './index';
import axios from 'axios';

export default function useFetchCharacters() {
  const { getCharacters } = useApi();

  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getCharacters();
        setIsLoaded(true);
        setCharacters(response.data.results);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchUsers();
  }, []);

  return { characters, error, isLoaded };
}
