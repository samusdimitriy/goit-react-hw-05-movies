import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../services/movies-api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Button, FormSearch, Input } from './Movies.styled';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputQuery, setInputQuery] = useState('');
  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);
  const [loader, setLoader] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    setInputQuery(query);
    fetchMoviesByQuery(query).then(data => {
      if (!data.length) return setShowNotFoundMessage(true);
      setMovies(data);
    });
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.search.value.trim().toLowerCase();
    setShowNotFoundMessage(value === '');
    setSearchParams({ query: value });

    if (value === '') {
    } else {
      setLoader(true);

      fetchMoviesByQuery(value)
        .then(data => {
          if (data.length === 0) {
            setShowNotFoundMessage(true);
          }
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            setShowNotFoundMessage(true);
          }
        })
        .finally(() => setLoader(false));
    }
  };

  const handleInputChange = e => {
    setInputQuery(e.target.value);
  };

  return (
    <>
      <div>
        <FormSearch onSubmit={handleSubmit}>
          <Input
            type="text"
            name="search"
            value={inputQuery}
            onChange={handleInputChange}
            placeholder="Enter a search query"
          />

          <Button type="submit">Search</Button>
        </FormSearch>
        {showNotFoundMessage && <p>We apologize, the movies were not found.</p>}
        {loader ? (
          <Loader />
        ) : (
          movies && movies.length > 0 && <MoviesList movies={movies} />
        )}
      </div>
    </>
  );
};

export default Movies;
