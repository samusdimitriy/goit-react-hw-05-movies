import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../services/movies-api';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    movies && (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
      </>
    )
  );
};

export default Home;
