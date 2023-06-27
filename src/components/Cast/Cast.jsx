import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/movies-api';
import {
  Wrapper,
  List,
  Item,
  ProfileImage,
  Name,
  Character,
  NoCast,
} from './Cast.styled';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchMovieCast(movieId).then(setCast);
    setLoader(false);
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      <Wrapper>
        {cast && cast.length > 0 ? (
          <List>
            {cast
              .filter(({ profile_path }) => profile_path)
              .map(({ id, name, character, profile_path }) => (
                <Item key={id}>
                  <ProfileImage
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                  />
                  <Name>{name}</Name>
                  <Character>{character}</Character>
                </Item>
              ))}
          </List>
        ) : (
          <NoCast>We don't have any cast for this movie</NoCast>
        )}
      </Wrapper>
    </>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};

export default Cast;
