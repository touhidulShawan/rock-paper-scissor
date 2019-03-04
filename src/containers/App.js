import React from "react";
import "../assets/css/App.min.css";
import UserControl from "../components/UserControl";
import PlayerChoice from "../components/PlayerChoice";
import Winner from "../components/Winner";

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Rock Paper Scissor By React</h1>
      </div>
      <div className="row">
        <div className="col-md-3">
          <UserControl />
        </div>
        <div className="col-md-4">
          <PlayerChoice />
        </div>
        <div className="col-md-5">
          <Winner />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
