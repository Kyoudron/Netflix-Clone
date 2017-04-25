import React, {Component} from 'react';

class Navigation extends Component {
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

export default Navigation;