import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../api';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import { Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import  Banner  from './Banner';

const NewMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("man");
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovies = async () => {
      const results = await fetchMovies(searchTerm);
      setMovies(results || []);
    };
    loadMovies();
  }, [searchTerm]);

  return (
    
    <Container sx={{ mt: 5, padding: 2 }}>
      
  <SearchBar onSearch={(term) => setSearchTerm(term)} />
  <Grid container spacing={3} justifyContent="center">
    {movies.map((movie) => (
      <Grid
        item
        key={movie.imdbID}
        xs={12}
        sm={6}
        md={4}
        lg={2.4}
        onClick={() => navigate(`/movie/${movie.imdbID}`)}
      >
        <MovieCard movie={movie} />
      </Grid>
    ))}
  </Grid>
</Container>

  );
};

export default NewMovies;
