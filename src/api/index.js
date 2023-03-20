import axios from 'axios';

export const initCharacters = (baseUrl) => () =>
  axios.get(`${baseUrl}/character`);

export const initCharacter = (baseUrl) => (id) =>
  axios.get(`${baseUrl}/character/${id}`);
