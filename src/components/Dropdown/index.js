import React, { Component } from "react";
import Arrow from "../Arrow";
import Option from "../Option";
import "./dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      selectedOptions: [],
    };
  }

  onDropdownClicked = () => {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  };

  onSelectAnOption = (id, text, selected) => {
    const { selectedOptions } = this.state;

    this.setState({
      selectedOptions: !selected
        ? [...selectedOptions, text]
        : selectedOptions.filter((options) => {
            console.log(options);
            return options === text;
          }),
    });

    this.props.onSelectAnOption(id);
  };

  render() {
    const { opened, selectedOptions } = this.state;
    const { onSelectAnOption, programmingLanguagesOptions } = this.props;

    return (
      <div>
        <p>Please select a programming language: </p>
        <div className="dropdown">
          <div onClick={this.onDropdownClicked} className="content">
            <div className="selectedOption">
              {selectedOptions.length === 0
                ? "Please select an option"
                : selectedOptions[selectedOptions.length - 1]}
            </div>
            <Arrow opened={opened} />
          </div>
          {opened && (
            <div className="allOptions">
              {Object.keys(programmingLanguagesOptions).map((language) => {
                const entry = programmingLanguagesOptions[language];
                return (
                  <Option
                    key={entry.id}
                    text={entry.text}
                    selected={entry.selected}
                    onSelect={() =>
                      this.onSelectAnOption(
                        entry.id,
                        entry.text,
                        entry.selected
                      )
                    }
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Dropdown;

/*
Sources:

For dropdown triangle - https://css-tricks.com/snippets/css/css-triangle/
Flexbox - https://css-tricks.com/snippets/css/a-guide-to-flexbox/

*/
