import React, { Component } from 'react';
import Item from './Item.jsx';

class MovieRow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      mounted: false
    }
  }

  loadContent = () => {
    var movieURL = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=86381d33f1a2b61021d5b6fe42800d6e';
    fetch(movieURL).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({data: data});
    }).catch((err) => {
      console.log("Error");
    });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.url !== this.props.url && nextProps.url !== '') {
      this.setState({mounted: true, url: nextProps.url}, () => {
        this.loadContent();
      });
    }
  }

  componentDidMount() {
    if(this.props.url !== '') {
      this.loadContent();
      this.setState({mounted: true});
    }
  }

  render() {

    let titles = '';

    if(this.state.data.results) {
      titles = this.state.data.results.map(function (title, i) {
        if (i < 5) {
          let name = '';
          let backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
          if(!title.name) {
            name = title.original_title;
          } else {
            name  = title.name;
          }
          return (
            <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
          );
        } else {
          return (<div key={title.id}></div>)
        }
      });
    }

    return (
      <div ref="moviecategory" className="MovieRow" data-loaded={this.state.mounted}>
        <div className="Movie">
          <h1>{this.props.title}</h1>
          <div className="movies-wrapper">
            {titles}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieRow;