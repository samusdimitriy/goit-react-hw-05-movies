import React from 'react';
import { Link } from 'react-router-dom';
import { Item, List, Poster, Wrapper } from './MovieList.styled';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const filteredMovies = movies?.filter(movie => movie.poster_path); 

  return (
    <Wrapper>
      <List>
        {filteredMovies?.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <Item key={movie.id}>
              <Poster
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </Item>
          </Link>
        ))}
      </List>
    </Wrapper>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
