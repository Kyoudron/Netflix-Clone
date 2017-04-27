import React, { Component } from 'react';
import './App.css';
import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import request from 'superagent';

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange = (term) => {
    const searchMovie = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    request.get(searchMovie, (err, res) => {
      this.setState({ movies: res.body.data })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <Logo />
          <Navigation />
          <Search onTermChange={term => this.handleTermChange(term)} />
          <MovieList movies={this.state.movies} />
        </header>
      </div>
    );
  }
}

export default App;
