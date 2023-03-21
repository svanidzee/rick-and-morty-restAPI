import { useState, useEffect } from 'react';
import { useApi } from './index';

export default function useFetchCharacter(id) {
  const { getCharacter } = useApi();

  const [character, setCharacter] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await getCharacter(id);
        setIsLoaded(true);
        setCharacter(response.data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchCharacter();
  }, [id, getCharacter]);

  return { character, error, isLoaded };
}
