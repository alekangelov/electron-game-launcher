import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Friends from "./Friends";
import Home from "./Home";
import Library from "./Library";

export default function Routes({ children }) {
  return (
    <BrowserRouter>
      <div className="row row-fix">
        <div className="col-sm-3 fullscreen">Navigation</div>
        <div className="col-sm-9 fullscreen">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/library" exact component={Library} />
            <Route path="/friends" exact component={Friends} />
          </Switch>
        </div>
      </div>{" "}
    </BrowserRouter>
  );
}
