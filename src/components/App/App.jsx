import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../../pages/Home/Home'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Cast = lazy(() => import('../Cast/Cast'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
