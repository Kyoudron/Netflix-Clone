import React, { Component } from 'react';
import './App.css';
import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';

class App extends Component {

  apiKEY: '86381d33f1a2b61021d5b6fe42800d6e'
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchURL: ""
    };
  }

  handleKeyUp = (e) => {
    if (e.key === 'Enter' && this.state.searchTerm !== "") {
      var searchURL = "search/multi?query=" + this.state.searchTerm + "&api_key" + this.apiKey;
    }
  };

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <Logo />
        <Navigation />
        <div id="search" className="Search">
          <input
            onKeyUp={this.handleKeyUp}
            onChange={this.handleChange}
            type="search"
            placeholder="Search"
            value={this.state.searchTerm} />
        </div>
      </div>
    );
  }
}

export default App;
