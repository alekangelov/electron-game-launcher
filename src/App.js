import React from "react";
import "./assets/index.scss";
import TitleBar from "./Components/TitleBar";
import SettingsProvider from "./lib/global/contexts/SettingsProvider";
import Routes from "./Routes";

function App() {
  return (
    <SettingsProvider>
      <div className="App">
        <TitleBar />
        <div className="wrapper fullscreen">
          <Routes />
        </div>
      </div>
    </SettingsProvider>
  );
}

export default App;
