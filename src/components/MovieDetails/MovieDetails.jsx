import React from 'react';
import { fetchMovieDetails } from '../../services/movies-api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper, Poster, Link } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <main>
      <Wrapper>
        <Poster
          src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`}
        />
        <p>{title}</p>
        <p>User score: {vote_average * 10}%</p>
        <p>
          <span>Overview</span>
          {overview}
        </p>
        <p>
          <span>Ganres</span>
          {genres?.map(({ name }) => name).join(', ')}
        </p>
      </Wrapper>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
