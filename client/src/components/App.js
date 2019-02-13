import React, { Component } from "react";
import style from "../styles/App.css";
import Login from "./Login";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false
    };
  }
  render() {
    const { signedIn } = this.state;
    if (signedIn !== true) {
      return (
        <div id={style.wrapper}>
          <Login />
        </div>
      );
    } else {
      return (
        <div id={style.wrapper}>
          <div />
          Hello from App
        </div>
      );
    }
  }
}
