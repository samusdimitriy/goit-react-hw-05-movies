import React from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Wrapper,
  Poster,
  Button,
  WrapperInfo,
  StyledLink,
  WrapperLink,
} from './MovieDetails.styled';
import { fetchMovieDetails } from '../../services/movies-api';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchMovieDetails(movieId).then(setMovie);
    setLoader(false);
  }, [movieId]);

  if (!movie) return null;

  const { poster_path, title, vote_average, overview, genres } = movie;

  const handleBackClick = () => {
    navigate('/movies');
  };

  return (
    <main>
      {loader && <Loader />}
      <div>
        <Button onClick={handleBackClick}>Back</Button>
      </div>
      <Wrapper>
        <Poster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
          }
        />
        <WrapperInfo>
          <h2>{title}</h2>
          <p>Rating: {vote_average * 10}%</p>
          <p>
            <span>Description: </span>
            {overview}
          </p>
          <p>
            <span>Genre: </span>
            {genres?.map(({ name }) => name).join(', ')}
          </p>
        </WrapperInfo>
      </Wrapper>
      <WrapperLink>
        <StyledLink to={`/movies/${movieId}/cast`}>Cast</StyledLink>
        <StyledLink to={`/movies/${movieId}/reviews`}>Reviews</StyledLink>
      </WrapperLink>
      <Outlet />
    </main>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default MovieDetails;
