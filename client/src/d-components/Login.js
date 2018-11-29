import React, { Component } from "react";
import axios from "axios";

import LoginView from "./LoginView";
import SignupView from "./SignupView";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginview: true,
      username: "",
      password: "",
      verifypassword: ""
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
        console.log(this.state);
      }
    );
  }

  handleLoginSubmit() {}

  render() {
    const { loginview } = this.state;
    if (loginview) {
      return (
        <LoginView
          handleInput={this.handleInput}
          toggleLoginView={this.toggleLoginView}
        />
      );
    } else {
      return (
        <SignupView
          handleInput={this.handleInput}
          toggleLoginView={this.toggleLoginView}
        />
      );
    }
  }
}
