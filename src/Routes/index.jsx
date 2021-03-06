import React from "react";
import { HashRouter, Route, Switch, useLocation } from "react-router-dom";
import { useTransition, a } from "react-spring";
import Navigation from "../Components/Navigation";
import Friends from "./Friends";
import Home from "./Home";
import Library from "./Library";
import Settings from "./Settings";

const AnimatedSwitch = () => {
  const location = useLocation();
  console.log(location);
  const transition = useTransition(location, (x) => location.pathname, {
    initial: null,
    from: {
      opacity: 0,
      transform: `translate(-100px, 0px)`,
    },
    enter: {
      opacity: 1,
      transform: `translate(0px, 0px)`,
    },
    leave: {
      opacity: 0,
      transform: `translate(100px, 0)`,
      position: "absolute",
      width: "100%",
      height: "max-content",
    },
  });
  return (
    <div className="page-container">
      <div className="transition-container pos-relative">
        {transition.map(({ item, key, props }, i) => {
          return (
            <a.div key={key} style={props}>
              <Switch location={item}>
                <Route path="/" exact component={Home} />
                <Route path="/library" exact component={Library} />
                <Route path="/friends" exact component={Friends} />
                <Route path="/settings" exact component={Settings} />
              </Switch>
            </a.div>
          );
        })}
      </div>
    </div>
  );
};

export default function Routes({ children }) {
  return (
    <HashRouter>
      <div className="row row-fix">
        <div className="col-sm-3 fullscreen">
          <Navigation />
        </div>
        <div className="col-sm-9 fullscreen">
          <AnimatedSwitch />
        </div>
      </div>
    </HashRouter>
  );
}
