import React, { Component } from "react";

import style from "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { toggleSidebar, searchMovie } = this.props;
    return (
      <div className={style.headerContainer}>
        <button onClick={() => toggleSidebar()}>☰</button>
        <div>MyMovieList</div>
        <input
          // className="searchInput"
          onKeyUp={e => this.props.handleSearchInput(e)}
          placeholder={"Search The Movie Database"}
          required="true"
        />
        <button onClick={searchMovie}>Search</button>
      </div>
    );
  }
}
