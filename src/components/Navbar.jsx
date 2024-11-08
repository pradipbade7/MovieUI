// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo and App Name */}
        <IconButton edge="start" color="inherit" onClick={() => navigate('/')} sx={{ mr: 2 }}>
         
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
          MovieApp
        </Typography>

        {/* New Movies Button */}
        <Button color="inherit" onClick={() => navigate('/newmovies')}>
          New Movies
        </Button>

        {/* Login Button */}
        <Button color="inherit" onClick={() => navigate('/login')}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
