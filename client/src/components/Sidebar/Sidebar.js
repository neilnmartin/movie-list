import React, { Component } from "react";

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
        {`show Sidebar setting: ${showSidebar}`}
        <div>{/* menu item */}</div>
      </div>
    );
  }
}
