import axios from 'axios';

export const initCharacters = (baseUrl) => (page) =>
  axios.get(`${baseUrl}/character?page=${page}`);

export const initCharacter = (baseUrl) => (id) =>
  axios.get(`${baseUrl}/character/${id}`);
