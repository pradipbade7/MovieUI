import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const MovieCard = ({ movie }) => (
  <Card
    sx={{
      minWidth: 200,
      height: 400,
      m: 2, // Adding margin to create space around each card
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
      },
      backgroundColor: '#f9f9f9',
    }}
  >
    <CardMedia
      component="img"
      image={movie.Poster !== 'N/A' ? movie.Poster : '/no-image.png'}
      alt={movie.Title}
      sx={{
        height: 200,
        objectFit: 'cover',
      }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
    <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{
          color: '#FF6B6B',
          height: '3.6em', // Fixed height for 2 lines of text
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2, // Limit to 2 lines
          WebkitBoxOrient: 'vertical',
        }}
      >
        {movie.Title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {movie.Year} - {movie.Type}
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
      <Button size="small" sx={{ color: '#4ECDC4' }}>
        More Details
      </Button>
    </CardActions>
  </Card>
);

export default MovieCard;
