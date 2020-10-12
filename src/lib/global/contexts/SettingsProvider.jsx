import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
const modelsDir = path.resolve(process.cwd(), "config/settings.json");
console.log(modelsDir);

const SettingsContext = React.createContext({
  user: {},
  setSettings: (settings) => {},
});

export function useSettings() {
  return React.useContext(SettingsContext);
}

export default function SettingsProvider({ children }) {
  const [settings, setSettingsInner] = useState({});
  useEffect(() => {
    fs.readFile(modelsDir, "utf8", (err, data) => {
      setSettingsInner(JSON.parse(data));
    });
  }, []);
  const setSettings = (settings) => {
    setSettingsInner(settings);
    fs.writeFile(modelsDir, JSON.stringify(settings));
  };
  return (
    <SettingsContext.Provider value={{ ...settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
