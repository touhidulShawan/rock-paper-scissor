import React from "react";
import "../assets/css/Score.min.css";

const Score = props => {
  return (
    <div className="Score">
      <div className="winner">
        <h1>{props.winner}</h1>
      </div>
    </div>
  );
};

export default Score;
