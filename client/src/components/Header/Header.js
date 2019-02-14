import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { toggleSidebar, searchMovie } = this.props;
    return (
      <div>
        <button onClick={() => toggleSidebar()}>TOGGLESIDEBAR</button>
        <div>MyMovieList</div>
        <input
          // className="searchInput"
          onKeyUp={e => this.props.handleSearchInput(e)}
          required
          placeholder={"Search The Movie Database"}
        />
        <button onClick={searchMovie}>Search</button>
      </div>
    );
  }
}
