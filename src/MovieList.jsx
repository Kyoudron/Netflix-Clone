import React from 'react';
import MovieItem from './MovieItem.jsx';

const MovieList = (props) => {
  const movieItems = props.movies.map((image) => {
    return <MovieItem key={image.id} movie={image} />
  });

  return (
    <ul> {movieItems} </ul>
  );
};

export default MovieList;