import React, { Component } from "react";
import "./pills.css";

class Pills extends Component {
  render() {
    const { programmingLanguagesOptions, onSelectAnOption } = this.props;

    return (
      <div className="pills">
        {Object.keys(programmingLanguagesOptions).map((language) => {
          const entry = programmingLanguagesOptions[language];
          return entry.selected ? (
            <div key={entry.id} className="pillsContainer">
              <div className="pillsText">{entry.text}</div>
              <div
                onClick={() => onSelectAnOption(entry.id)}
                className="delete"
              >
                x
              </div>
            </div>
          ) : null;
        })}
      </div>
    );
  }
}

export default Pills;
