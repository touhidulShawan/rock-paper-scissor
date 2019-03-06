import React, { Component } from "react";
import "../assets/css/UserControl.min.css";
class UserControl extends Component {
  state = {
    playerChoice: null,
    computerChoice: null
  };

  makeMove = event => {
    const playerChoice = parseInt(
      event.target.getAttribute("game-option-index")
    );

    const computerChoice = Math.floor(Math.random() * 3 + 1);

    this.setState({ playerChoice, computerChoice });
  };

  render() {
    console.log(`Computer choice: ${this.state.computerChoice}`);
    console.log(`Player choice: ${this.state.playerChoice}`);

    return (
      <div className="UserControl">
        <div
          className="d-flex game-options"
          onClick={this.makeMove}
          game-option-index="1"
        >
          <i className="fas fa-hand-rock" game-option-index="1" />
        </div>
        <div
          className="d-flex game-options"
          onClick={this.makeMove}
          game-option-index="2"
        >
          <i className="fas fa-hand-paper" game-option-index="2" />
        </div>
        <div
          className="d-flex game-options"
          onClick={this.makeMove}
          game-option-index="3"
        >
          <i className="fas fa-hand-scissors" game-option-index="3" />
        </div>
      </div>
    );
  }
}

export default UserControl;
