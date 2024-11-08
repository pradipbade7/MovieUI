
import axios from 'axios';

const API_KEY = '736f2707';
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;
// Fetch movies based on a search query
export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}&s=${query}`);
    return response.data.Search;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

// Fetch detailed information for a specific movie by ID
export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}&i=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
