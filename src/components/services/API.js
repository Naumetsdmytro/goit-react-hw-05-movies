//1d32ff7478bc0343f9347491f3fce9be (key)
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '1d32ff7478bc0343f9347491f3fce9be';

export const fetchPopularFilms = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return results;
};

export const fetchMoviedetails = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieByName = async query => {
  const data = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data;
};
