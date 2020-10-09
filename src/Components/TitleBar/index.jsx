import React from "react";
import { remote } from "electron";
import { ExitIcon, MinusIcon, PlusIcon } from "../../assets/Icons";

const win = (function () {
  try {
    return remote.BrowserWindow.getFocusedWindow();
  } catch (e) {
    return {};
  }
})();
export default function TitleBar() {
  return (
    <div id="title-bar">
      <div className="window-icons">
        <button
          onClick={() => win.minimize()}
          className="window-icon window-icon__minimize"
        >
          <MinusIcon />
        </button>
        <button
          onClick={() => win.setFullScreen(!win.isFullScreen())}
          className="window-icon window-icon__maximize"
        >
          <PlusIcon />
        </button>
        <button
          onClick={() => win.close()}
          className="window-icon window-icon__exit"
        >
          <ExitIcon />
        </button>
      </div>
    </div>
  );
}
