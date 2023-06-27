import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../services/movies-api';
import { SearchContext } from '../../context/SearchContext';
import MoviesList from 'components/MoviesList/MoviesList';
import { Button, FormSearch, Input } from './Movies.styled';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const [initialQuery, setInitialQuery] = useState('');
  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    if (query !== initialQuery) {
      setInitialQuery(query);
      setShowNotFoundMessage(false);
      setLoader(true);

      if (query === '') {
        setSearchQuery([]);
        setLoader(false);
      } else {
        fetchMoviesByQuery(query)
          .then(data => {
            setSearchQuery(data);
            if (data.length === 0) {
              setShowNotFoundMessage(true);
            }
          })
          .catch(error => {
            if (error.response && error.response.status === 404) {
              setSearchQuery([]);
              setShowNotFoundMessage(true);
            }
          })
          .finally(() => setLoader(false));
      }
    }
  }, [searchParams, setSearchQuery, initialQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.search.value.trim().toLowerCase();
    setShowNotFoundMessage(value === '');
    setSearchParams({ query: value });

    if (value === '') {
      setSearchQuery([]);
    }
  };

  const handleInputChange = e => {
    setInitialQuery(e.target.value);
  };

  return (
    <>
      <div>
        <FormSearch onSubmit={handleSubmit}>
          <Input
            type="text"
            name="search"
            onChange={handleInputChange}
            placeholder="Enter a search query"
          />
          <Button type="submit">Search</Button>
        </FormSearch>
        {showNotFoundMessage && <p>We apologize, the movies were not found.</p>}
        {loader ? (
          <Loader />
        ) : (
          searchQuery &&
          searchQuery.length > 0 && <MoviesList movies={searchQuery} />
        )}
      </div>
    </>
  );
};

Movies.propTypes = {
  searchQuery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Movies;
