import React, { Component } from 'react';
import './App.css';
import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import MovieRow from './MovieRow.jsx';
import request from 'superagent';

class App extends Component {

  apiKEY: '86381d33f1a2b61021d5b6fe42800d6'

  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange = (term) => {
    const searchMovie = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
//// https://api.themoviedb.org/3/movie/${term.replace(/\s/g, '+')}/images?api_key=86381d33f1a2b61021d5b6fe42800d6e&language=en-US
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
          <MovieRow title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1'/>
        </header>
      </div>
    );
  }
}

export default App;
