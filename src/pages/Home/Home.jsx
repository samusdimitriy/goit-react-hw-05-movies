import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/movies-api';
import MoviesList from 'components/MoviesList/MoviesList';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchTrendingMovies().then(setMovies);
    setLoader(false);
  }, []);

  return (
    movies && (
      <>
        {loader && <Loader />}
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
      </>
    )
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Home;
