import React from "react";
import { Component } from "react";
import "../Styles/Addition.css";

class Addition_Old extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 1,
      num2: 1,
      problemSet: [0, 1],
      response: "",
      incorrect: false,
      score: 0,
    };
  }

  render() {
    if (this.state.score === 10) {
      return this.renderWin();
    } else {
      return this.renderProblem();
    }
  }

  renderProblem() {
    return (
      <div>
        <div id="problem" className={this.state.incorrect ? "incorrect" : ""}>
          {this.state.num1} + {this.state.num2}
        </div>
        <input
          onKeyPress={this.inputKeyPress}
          onChange={this.updateResponse}
          value={this.state.response}
        />
        <div className="Score">Score: {this.state.score}</div>
        <button onClick={this.resetGame}>Reset</button>
      </div>
    );
  }

  renderWin() {
    const name = "the addition game";
    return <div>You Win!</div>;
  }

  updateResponse = (event) => {
    this.setState({ response: event.target.value });
  };

  inputKeyPress = (event) => {
    if (event.key === "Enter") {
      const answer = parseInt(this.state.response);
      if (answer === this.state.num1 + this.state.num2) {
        this.setState((state) => ({
          num1: Math.ceil(Math.random() * 10) + state.score,
          num2: Math.ceil(Math.random() * 10) + state.score,
          response: "",
          incorrect: false,
          score: state.score + 1,
        }));
      } else {
        this.setState({
          response: "",
          incorrect: true,
        });
      }
    }
  };

  resetGame = (event) => {
    this.setState({
      num1: 1,
      num2: 1,
      response: "",
      incorrect: false,
      score: 0,
    });
  };
}
export default Addition_Old;
