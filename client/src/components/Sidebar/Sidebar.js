import React, { Component } from "react";

import style from "./Sidebar.css";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleShowSidebar: false
    };
  }

  render() {
    const { showSidebar } = this.props;
    return (
      <div>
        <div className={showSidebar ? style.visible : style.hidden} />
        {`show Sidebar setting: ${showSidebar}`}
        <div>Explore</div>
        <div>My List</div>
        <div>Account</div>
      </div>
    );
  }
}
