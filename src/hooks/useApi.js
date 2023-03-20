import { initCharacters, initCharacter } from '../api/index';

export default function useApi() {
  const baseURL = 'https://rickandmortyapi.com/api';

  return {
    getCharacters: initCharacters(baseURL),
    getCharacter: initCharacter(baseURL),
  };
}
