import React from 'react';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/movies-api';
import { Container, Description, Item, List, Title } from './Reviews.styled';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchReviews(movieId).then(setReviews);
    setLoader(false);
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      <Container>
        {reviews && reviews.length > 0 ? (
          <List>
            {reviews.map(({ id, author, content }) => (
              <Item key={id}>
                <Title>{author}</Title>
                <Description>{content}</Description>
              </Item>
            ))}
          </List>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </Container>
    </>
  );
};

export default Reviews;
