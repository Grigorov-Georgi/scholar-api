import axios from "axios";

const API_URL = "http://localhost:1914/search_author?name=";

export type AuthorDataType = {
  affiliation: string;
  citedby: number;
  citesPerYear: { [key: string]: number };
  interests: string[];
  publicationsInfo: {
    title: string;
    citation: string;
    pubYear?: string;
  }[];
  urlPicture: string;
};

export const getAuthorInformation = async (
  authorName: string
): Promise<AuthorDataType | null> => {
  return axios
    .get(`${API_URL + authorName}`)
    .then((response) => response.data)
    .then((authorInformation) => {
      const {
        affiliation,
        citedby,
        cites_per_year,
        interests,
        publications,
        url_picture,
      } = authorInformation;

      const publicationsInfo = publications.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (publication: any) => publication.bib
      );

      const authorData: AuthorDataType = {
        affiliation,
        citedby,
        citesPerYear: cites_per_year,
        interests,
        publicationsInfo,
        urlPicture: url_picture,
      };

      return authorData;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
