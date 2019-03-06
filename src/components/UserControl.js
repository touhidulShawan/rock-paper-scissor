import React, { Component } from "react";
import "../assets/css/UserControl.min.css";
import Score from "./Score";

class UserControl extends Component {
  state = {
    playerChoice: null,
    computerChoice: null,
    winner: ""
  };

  makeMove = event => {
    const playerChoice = parseInt(
      event.target.getAttribute("game-option-index")
    );

    const computerChoice = Math.floor(Math.random() * 3 + 1);

    this.setState({ playerChoice, computerChoice });

    const com = this.state.computerChoice;
    const user = this.state.playerChoice;
    let winner;
    if (com === user) {
      winner = "Tie";
    } else if (com === 1 && user === 2) {
      winner = "Congrates !! You win";
    } else if (com === 2 && user === 3) {
      winner = "Congrates !! You win";
    } else if (com === 3 && user === 1) {
      winner = "Congrates !! You win";
    } else {
      winner = "Sorry!! Computer win";
    }

    this.setState({ winner });
  };

  render() {
    return (
      <React.Fragment>
        <div className="UserControl">
          <div className="d-flex game-options">
            >
            <i
              className="fas fa-hand-rock"
              game-option-index="1"
              onClick={this.makeMove}
            />
          </div>
          <div className="d-flex game-options">
            <i
              className="fas fa-hand-paper"
              game-option-index="2"
              onClick={this.makeMove}
            />
          </div>
          <div className="d-flex game-options">
            <i
              className="fas fa-hand-scissors"
              game-option-index="3"
              onClick={this.makeMove}
            />
          </div>
        </div>
        <Score winner={this.state.winner} />
      </React.Fragment>
    );
  }
}

export default UserControl;
