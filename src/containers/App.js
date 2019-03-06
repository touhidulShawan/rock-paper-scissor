import React from "react";
import "../assets/css/App.min.css";
import UserControl from "../components/UserControl";

const App = () => {
  return (
    <div className="RPS">
      <div className="App">
        <h1>Rock Paper Scissor By React</h1>
      </div>
      <div className="row">
        <div className="col">
          <UserControl />
        </div>
      </div>
    </div>
  );
};

export default App;
