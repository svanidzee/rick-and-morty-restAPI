import { useState, useEffect } from 'react';
import { useApi } from './index';
import axios from 'axios';

export default function useFetchCharacters() {
  const { getCharacters } = useApi();

  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await getCharacters();
        setIsLoaded(true);
        setCharacters(response.data.results);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchCharacters();
  }, []);

  return { characters, error, isLoaded };
}
