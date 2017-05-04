import React, { Component } from 'react';
import './App.css';
import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';
import Search from './Search.jsx';
// import MovieList from './MovieList.jsx';
import MovieRow from './MovieRow.jsx';
import request from 'superagent';

class App extends Component {

// 86381d33f1a2b61021d5b6fe42800d6e

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
        </header>
          <MovieRow title="Popular now" url='discover/movie?sort_by=popularity.desc&page=1'/>
          <MovieRow title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1'/>
          <MovieRow title="Most watched in Comedy" url='genre/35/movies?sort_by=popularity.desc&page=1'/>
          <MovieRow title="Most watched in Science Fiction" url='genre/878/movies?sort_by=popularity.desc&page=1'/>
      </div>
    );
  }
}

export default App;
