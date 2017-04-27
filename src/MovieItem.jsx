import React from 'react';

const MovieItem = (image) => {
  return (
    <li>
      <img alt="movie" src={image.movie.images.downsized.url} />
    </li>
  )
};

export default MovieItem;