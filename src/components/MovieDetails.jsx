import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import { Container, Typography, Card, CardMedia, CardContent, Box } from '@mui/material';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovieDetails = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
    };
    loadMovieDetails();
  }, [id]);

  if (!movie) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 5 }}>
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, backgroundColor: '#f1f1f1', p: 3 }}>
        <CardMedia
          component="img"
          image={movie.Poster !== 'N/A' ? movie.Poster : '/no-image.png'}
          alt={movie.Title}
          sx={{
            height: 300,
            width: 200,
            objectFit: 'cover',
            borderRadius: '5px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            mr: { md: 3 },
          }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ color: '#1A535C', fontWeight: 'bold' }}>
            {movie.Title} ({movie.Year})
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {movie.Plot}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ color: '#FF6B6B' }}>Genre: {movie.Genre}</Typography>
            <Typography variant="h6" sx={{ color: '#FF6B6B' }}>Director: {movie.Director}</Typography>
            <Typography variant="h6" sx={{ color: '#FF6B6B' }}>Cast: {movie.Actors}</Typography>
            <Typography variant="h6" sx={{ color: '#FF6B6B' }}>Rating: {movie.imdbRating}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MovieDetails;
