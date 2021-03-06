import React, { Component } from "react";
import "../scss/Autocomplete.scss";
import "../scss/Finder.scss";

class Finder extends Component {
  state = {
    inputValue: "",
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    options: [],
    words: [],
  };
  words = require("an-array-of-english-words");

  componentDidMount() {
    this.setState({
      words: this.words,
      activeOption: 0,
      showOptions: false,
      inputValue: "",
      filteredOptions: [],
    });
  }

  handleChange = (e) => {
    this.props.change(e);
    this.setState({
      activeOption: 0,
      showOptions: true,
      inputValue: e.currentTarget.value,
      filteredOptions: this.state.words.filter((option) =>
        this.state.inputValue.length === 3
          ? option.charAt(0) === this.state.inputValue.charAt(0) &&
            option.charAt(1) === this.state.inputValue.charAt(1) &&
            option.charAt(2) === this.state.inputValue.charAt(2)
            ? option
            : null
          : null
      ),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.results();
  };
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    (() => {
      switch (e.keyCode) {
        case 13:
          return this.setState({
            activeOption: 0,
            showOptions: false,
            inputValue: filteredOptions[activeOption],
          });

        case 38:
          if (activeOption === 0) {
            return;
          } else return this.setState({ activeOption: activeOption - 1 });
        case 40:
          if (activeOption - 1 === filteredOptions.length) {
            return;
          } else return this.setState({ activeOption: activeOption + 1 });
        case 27:
          return this.setState({
            activeOption: 0,
            showOptions: false,
          });

        default:
          return;
      }
    })();
  };
  render() {
    const {
      activeOption,
      filteredOptions,
      showOptions,
      inputValue,
    } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="searchInputWrapper">
            <i className="fas fa-search"></i>
            <input
              type="text"
              onChange={this.handleChange}
              onKeyDown={this.onKeyDown}
              value={inputValue}
              placeholder="Search free high resolution photos"
            />
          </div>
          {showOptions && inputValue ? (
            filteredOptions.length ? (
              <ul className="optionsWrapper">
                {filteredOptions.map((option, index) => {
                  return (
                    <li
                      className={index === activeOption ? "option-active" : ""}
                      key={option}
                    >
                      {option}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <ul className="optionsWrapper">
                {this.state.inputValue.length > 3 ? (
                  <li className="option-active">
                    None of your searches match the results. Please, try again.
                  </li>
                ) : null}
              </ul>
            )
          ) : null}
        </form>
      </>
    );
  }
}

export default Finder;
