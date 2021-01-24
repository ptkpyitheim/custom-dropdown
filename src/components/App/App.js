import "./App.css";
import React, { Component } from "react";

import Dropdown from "../Dropdown";
import Pills from "../Pills";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programmingLanguagesOptions: {
        0: { id: 0, text: "Python", selected: false },
        1: { id: 1, text: "JavaScript", selected: false },
        2: { id: 2, text: "Java", selected: false },
        3: { id: 3, text: "Kotlin", selected: false },
        4: { id: 4, text: "PHP", selected: false },
        5: { id: 5, text: "Rust", selected: false },
        6: { id: 6, text: "Scala", selected: false },
        7: { id: 7, text: "Typescript", selected: false },
        8: { id: 8, text: "Dart", selected: false },
        9: { id: 9, text: "Swift", selected: false },
        10: { id: 10, text: "Elixir", selected: false },
        11: { id: 11, text: "Elm", selected: false },
        12: { id: 12, text: "OCaml", selected: false },
        13: { id: 13, text: "Julia", selected: false },
        14: { id: 14, text: "Ruby", selected: false },
        15: { id: 15, text: "Crystal", selected: false },
        16: { id: 16, text: "Perl", selected: false },
        17: { id: 17, text: "Reason", selected: false },
        18: { id: 18, text: "Nim", selected: false },
        19: { id: 19, text: "Clojure", selected: false },
        20: { id: 20, text: "Objective-C", selected: false },
      },
    };
  }

  onSelectAnOption = (id) => {
    let programmingLanguagesOptionsModified = this.state
      .programmingLanguagesOptions;
    programmingLanguagesOptionsModified[
      id
    ].selected = !programmingLanguagesOptionsModified[id].selected;

    this.setState({
      programmingLanguagesOptions: {
        ...programmingLanguagesOptionsModified,
      },
    });
  };

  render() {
    const { programmingLanguagesOptions } = this.state;
    return (
      <div className="App">
        <h1>Hello Hive! My name is Pyi Theim (PTK) Kyaw.</h1>
        <div className="content">
          <Dropdown
            programmingLanguagesOptions={programmingLanguagesOptions}
            onSelectAnOption={this.onSelectAnOption}
          />
          <Pills
            programmingLanguagesOptions={programmingLanguagesOptions}
            onSelectAnOption={this.onSelectAnOption}
          />
        </div>
      </div>
    );
  }
}

export default App;
