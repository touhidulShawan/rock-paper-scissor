import React, { Component } from "react";
import "../assets/css/PlayerChoice.min.css";

class PlayerChoice extends Component {
  render() {
    return (
      <div className="PlayerChoice">
        <div className="choice">
          <h3>
            Computer Choose : <span>Rock</span>
          </h3>
          <h3>
            You Choose: <span>Scissor</span>
          </h3>
        </div>
      </div>
    );
  }
}

export default PlayerChoice;
