import React from "react";
import logo from "./logo.svg";
import "./assets/index.scss";
import TitleBar from "./Components/TitleBar";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <TitleBar />
      <div className="wrapper fullscreen">
        <Routes />
      </div>
    </div>
  );
}

export default App;
