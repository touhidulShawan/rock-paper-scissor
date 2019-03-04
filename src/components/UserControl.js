import React, { Component } from "react";
import "../assets/css/UserControl.min.css";

class UserControl extends Component {
  render() {
    return (
      <div className="UserControl">
        <div className="d-flex game-options">
          <i className="fas fa-hand-rock" />
        </div>
        <div className="d-flex game-options">
          <i className="fas fa-hand-paper" />
        </div>
        <div className="d-flex game-options">
          <i className="fas fa-hand-scissors" />
        </div>
        <h5>Rock Paper Scissor</h5>
      </div>
    );
  }
}

export default UserControl;
