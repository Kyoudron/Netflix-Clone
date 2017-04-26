import React, { Component } from 'react';
import './App.css';
import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';

class App extends Component {

  apiKEY: '86381d33f1a2b61021d5b6fe42800d6e'

  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <Logo />
          <Navigation />
          <Search onTermChange={this.handleTermChange} />
          <MovieList movies={this.state.movies} />
        </header>
      </div>
    );
  }
}

export default App;
