import axios from "axios";

const API_URL = "http://localhost:1914/search_author?name=";

export const getAuthorInformation = async (authorName: string) => {
  await axios
    .get(`${API_URL + authorName}`)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};
