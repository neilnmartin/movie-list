import React, { Component } from "react";

import MovieListItem from "./MovieListItem";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    const { userId, movieData } = this.props;
  }
  addToList() {}
  render() {
    const { userId, movieData } = this.props;
    return (
      <div>
        {movieData.map((movie, index) => (
          <MovieListItem key={index} item={movie} />
        ))}
      </div>
    );
  }
}
