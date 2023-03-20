import { useState, useEffect } from 'react';
import { useApi } from './index';
import axios from 'axios';

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
        // console.log(response);
        setCharacters(response.data.results);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchCharacters();
  }, [page]);

  return { characters, page, setPage, error, isLoaded };
}
