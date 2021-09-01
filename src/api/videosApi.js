import axios from "axios";

export const getTopMovies = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/videos/top_movies`);
};

export const getTopShows = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/videos/top_shows`);
};

export const getVideo = (id) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/videos/item/${id}`);
};
