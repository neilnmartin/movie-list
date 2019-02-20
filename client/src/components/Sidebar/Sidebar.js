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
    const { showSidebar, toggleSidebar } = this.props;
    return (
      <div>
        <div className={showSidebar ? style.visible : style.hidden}>
          <div className={style.sideBarContainer}>
            <div className={style.sideBarHead}>
              <button onClick={() => toggleSidebar()}>☰</button>
              <div>MyMovieList</div>
            </div>

            <div className={style.sideBarList}>
              <div className={style.sideBarItem}>Explore</div>
              <div>My List</div>
              <div>Account</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
