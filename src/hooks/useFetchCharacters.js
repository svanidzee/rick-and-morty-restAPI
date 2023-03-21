import { useState, useEffect } from 'react';
import { useApi } from './';

export default function useFetchCharacters() {
  const { getCharacters } = useApi();

  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await getCharacters(page);
        setIsLoaded(true);
        setCharacters(response.data.results);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchCharacters();
  }, [page, getCharacters]);

  return { characters, page, setPage, error, isLoaded };
}
