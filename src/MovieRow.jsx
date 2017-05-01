import React, { Component } from 'react';

class MovieRow extends Component {

  apiKEY: '86381d33f1a2b61021d5b6fe42800d6'

  render() {
    return (
      <div className="navigation" >
        <ul>
          <li>Browse</li>
          <li>My list</li>
          <li>Top picks</li>
          <li>Recent</li>
        </ul>
      </div>
    );
  }
}

export default MovieRow;