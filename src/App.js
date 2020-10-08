import React from "react";
import logo from "./logo.svg";
import "./assets/index.scss";
import TitleBar from "./Components/TitleBar";

function App() {
  return (
    <div className="App">
      <TitleBar />
      <div className="wrapper fullscreen">
        <div className="row row-fix">
          <div className="col-sm-3 fullscreen">Navigation</div>
          <div className="col-sm-9 fullscreen">Main Content</div>
        </div>
      </div>
    </div>
  );
}

export default App;
