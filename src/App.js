import React, { Component } from 'react';
import './App.css';
import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';
import Search from './Search.jsx';

class App extends Component {

  apiKEY: '86381d33f1a2b61021d5b6fe42800d6e'

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
        </header>
      </div>
    );
  }
}

export default App;
