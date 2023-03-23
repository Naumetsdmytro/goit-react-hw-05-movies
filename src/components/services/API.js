//1d32ff7478bc0343f9347491f3fce9be (key)
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '1d32ff7478bc0343f9347491f3fce9be';

export const fetchPopularFilms = async abortController => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`, {
    signal: abortController.signal,
  });
  return results;
};

export const fetchMoviedetails = async (id, abortController) => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`, {
    signal: abortController.signal,
  });
  return data;
};

export const fetchMovieByName = async (query, abortController) => {
  const {
    data: { results },
  } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`, {
    signal: abortController.signal,
  });
  return results;
};

export const fetchCast = async (id, abortController) => {
  const {
    data: { cast },
  } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`, {
    signal: abortController.signal,
  });
  return cast;
};

export const fetchReviews = async (id, abortController) => {
  const {
    data: { results },
  } = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`, {
    signal: abortController.signal,
  });
  return results;
};
