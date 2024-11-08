import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Navbar from './components/Navbar'
import Login from './components/Login'
import NewMovies from './components/NewMovies';

const App = () => (
  <Router>
     <Navbar />
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newmovies" element={<NewMovies />} />
    </Routes>
  </Router>
);

export default App;
