import React, { Component } from 'react';
import './App.css';
import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Logo />
          <Navigation />
      </div>
    );
  }
}

export default App;
