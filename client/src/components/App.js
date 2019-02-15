import React, { Component } from "react";
import axios from "axios";
import style from "../styles/App.css";
import { tmdbkey } from "../../config";

import Login from "./Login/Login";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import MovieList from "./MovieList/MovieList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: true,
      userId: 1,
      username: "testuser",
      showSidebar: false,
      searchTerm: "",
      movieData: []
      // TODO: Implement token
    };
    this.setUser = this.setUser.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
  }

  setUser(username, id) {
    this.setState({ signedIn: true, username, userId: id }, () => {
      console.log("userinfo received and set. this.state = ", this.state);
    });
  }

  toggleSidebar() {
    this.setState({ showSidebar: !this.state.showSidebar }, () => {
      console.log(this.state.showSidebar);
    });
  }

  handleSearchInput(e) {
    this.setState({ searchTerm: e.target.value });
  }

  searchMovie() {
    const { searchTerm } = this.state;
    axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: tmdbkey,
          language: "en-US",
          page: 1,
          include_adult: false,
          region: "US",
          query: searchTerm
        }
      })
      .then(data => {
        console.log(data);
        this.setState({ movieData: data.data.results }, () =>
          console.log(this.state.movieData)
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    const { signedIn, userId, showSidebar, movieData } = this.state;
    if (signedIn !== true) {
      return (
        <div id={style.wrapper}>
          <Login setUser={this.setUser} />
        </div>
      );
    } else {
      return (
        <div id={style.wrapper}>
          <div />
          <Header
            toggleSidebar={this.toggleSidebar}
            handleSearchInput={this.handleSearchInput}
            searchMovie={this.searchMovie}
          />
          <Sidebar
            toggleSideBar={this.toggleSidebar}
            showSidebar={showSidebar}
          />
          <MovieList movieData={movieData} userId={userId} />
        </div>
      );
    }
  }
}
