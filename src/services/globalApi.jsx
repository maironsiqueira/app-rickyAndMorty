import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api/";
const character = `${baseURL}character`;
const details = `${baseURL}character/`;

const getCharacterByName = (name) => {
  return axios.get(`${baseURL}?name=${name}`);
}

const getCharacter = (page) => {
    return axios.get(`${character}?page=${page}`);
  };

export { getCharacter, details, getCharacterByName }