import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => (
  <TextField
    fullWidth
    label="Search for movies..."
    variant="outlined"
    onChange={(e) => onSearch(e.target.value)}
    sx={{ mb: 3 }}
  />
);

export default SearchBar;
