import React from 'react';

const MovieItem = (image) => {
  return (
    <li>
      <img src={image.movie.url} />
    </li>
  )
};

export default MovieItem;