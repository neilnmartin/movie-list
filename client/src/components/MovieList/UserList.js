import React, { Component } from "react";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { movieData } = this.props;
    return (
      <div>
        <div>
          <div>
            {movieData.map((movie, index) => (
              <UserMovieListItem key={index} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
