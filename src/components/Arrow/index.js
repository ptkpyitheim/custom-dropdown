import React, { Component } from "react";
import "./arrow.css";

class Arrow extends Component {
  arrowClicked = () => {
    console.log("clicked...");
  };

  render() {
    const { opened } = this.props;

    return (
      <div
        className={opened ? "arrow-up" : "arrow-down"}
        onClick={this.props.onClick}
      ></div>
    );
  }
}

export default Arrow;
