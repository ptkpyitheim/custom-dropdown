import React, { Component } from "react";
import "./option.css";

class Option extends Component {
  render() {
    const { text, selected, onSelect } = this.props;
    return (
      <div
        onClick={onSelect}
        className={selected ? "option optionSelected" : "option"}
      >
        <div className="optionText"> {text}</div>
      </div>
    );
  }
}

export default Option;
