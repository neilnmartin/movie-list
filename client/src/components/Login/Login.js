import React, { Component } from "react";
import axios from "axios";

import LoginView from "./LoginView";
import SignupView from "./SignupView";

import style from "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginview: true,
      username: "",
      password: "",
      verifypassword: "",
      matchpassword: null
      // TODO: Implement token
    };
    this.handleInput = this.handleInput.bind(this);
    this.toggleLoginView = this.toggleLoginView.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
  }

  toggleLoginView() {
    this.setState({ loginview: !this.state.loginview });
  }

  handleInput(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log(this.state);
        this.state.password === this.state.verifypassword &&
        this.state.password.length > 1
          ? this.setState({ matchpassword: true })
          : this.setState({ matchpassword: false });
      }
    );
  }

  handleLoginSubmit() {
    let { setUser } = this.props;
    let { username, password } = this.state;
    axios
      .get("/api/users", {
        params: {
          username,
          pw: password
        }
      })
      .then(data => {
        if (data.data === "no such user, reroute to signup") {
          alert(
            "No user by that username exists. Please try again, or sign up :)"
          );
        } else {
          let { username, id } = data.data;
          setUser(username, id);
        }
      });
  }

  handleSignupSubmit() {
    let { setUser } = this.props;
    axios
      .post("/api/users", {
        username: this.state.username,
        pw: this.state.password
      })
      .then(data => {
        if (data.data === "User already exists, reroute to login") {
          this.toggleLoginView();
          alert("That user already exists! Please Log In :)");
        } else {
          let { username, id } = data.data;
          setUser(username, id);
        }
      });
  }

  render() {
    const { loginview } = this.state;
    return loginview ? (
      <LoginView
        handleInput={this.handleInput}
        toggleLoginView={this.toggleLoginView}
        handleLoginSubmit={this.handleLoginSubmit}
      />
    ) : (
      <SignupView
        handleInput={this.handleInput}
        toggleLoginView={this.toggleLoginView}
        matchpassword={this.state.matchpassword}
        handleSS={this.handleSignupSubmit}
      />
    );
  }
}
