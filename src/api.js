import axios from 'axios';

const API_KEY = '9e767617a38274a8f935b2dad22c808e';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = () =>
  axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`);

export const fetchTopRated = () =>
  axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`);

export const fetchActionMovies = () =>
  axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`);

export const fetchComedyMovies = () =>
  axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`);

export const fetchHorrorMovies = () =>
  axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`);

export const fetchFamilyMovies = () =>
  axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10751`);

// Add more fetch functions as needed
