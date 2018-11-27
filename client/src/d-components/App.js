import React, { Component } from "react";
import style from "../styles/App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div id={style.wrapper}>Hello from App</div>;
  }
}
