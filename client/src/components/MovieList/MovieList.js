import React, { Component } from "react";

import MovieListItem from "./MovieListItem";

import style from "./MovieList.css";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    const { userId, movieData } = this.props;
  }
  addToList() {}
  render() {
    const { userId, movieData } = this.props;
    // console.log(movieData[0]);
    return (
      <div>
        {movieData.map((movie, index) => (
          <MovieListItem key={index} item={movie} />
        ))}
      </div>
    );
  }
}
