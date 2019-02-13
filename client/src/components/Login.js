import React, { Component } from "react";
import axios from "axios";

import LoginView from "./LoginView";
import SignupView from "./SignupView";

import styles from "../styles/Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginview: true,
      username: "",
      password: "",
      verifypassword: "",
      matchpassword: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.toggleLoginView = this.toggleLoginView.bind(this);
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
        this.state.password === this.state.verifypassword &&
        this.state.password.length > 1
          ? this.setState({ matchpassword: true })
          : this.setState({ matchpassword: false });
      }
    );
  }

  handleLoginSubmit() {
    axios.post("", {
      username: this.state.username,
      password: this.state.password
    });
  }

  render() {
    const { loginview } = this.state;
    return loginview ? (
      <LoginView
        handleInput={this.handleInput}
        toggleLoginView={this.toggleLoginView}
      />
    ) : (
      <SignupView
        handleInput={this.handleInput}
        toggleLoginView={this.toggleLoginView}
        matchpassword={this.state.matchpassword}
      />
    );
  }
}
