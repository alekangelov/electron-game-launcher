import React from "react";
import { makeClasses } from "../../lib/helpers";
import { LogoIcon } from "../../assets/Icons";
import { Link, useLocation } from "react-router-dom";

function SingleLink({ link = "", icon, label, className }) {
  return (
    <Link to={link} className={makeClasses("row navigation-col", className)}>
      <div className="col-md-4 navigation-col__icon">
        <img src={icon} />
      </div>
      <div className="col-md-8 navigation-col__title">
        <h4>{label}</h4>
      </div>
    </Link>
  );
}

const Links = [
  {
    link: "/",
    label: "Home",
    icon: require("../../assets/Icons/images/home.svg"),
    top: true,
  },
  {
    link: "/store",
    label: "Store",
    icon: require("../../assets/Icons/images/store.svg"),
    top: true,
  },
  {
    link: "/library",
    label: "Library",
    icon: require("../../assets/Icons/images/library.svg"),
    top: true,
  },
  {
    link: "/friends",
    label: "Friends",
    icon: require("../../assets/Icons/images/friends.svg"),
    top: true,
  },
  {
    link: "/settings",
    label: "Settings",
    icon: require("../../assets/Icons/images/cog.svg"),
    top: false,
  },
];

export default function Navigation() {
  const location = useLocation();
  return (
    <div className="navigation">
      <div className="navigation-top">
        <div className="row navigation-col navigation-col__header">
          <div className="col-md-4 navigation-col__icon">
            <LogoIcon />
          </div>
          <div className="col-md-8 navigation-col__title">
            <h3>Game Launcher</h3>
          </div>
        </div>
        {Links.filter((e) => e.top).map((singleLink, i) => {
          return <SingleLink {...singleLink} key={i + "singleLinkTop"} />;
        })}
      </div>
      <div className="navigation-bottom">
        {Links.filter((e) => !e.top).map((singleLink, i) => {
          return <SingleLink {...singleLink} key={i + "singleLinkTop"} />;
        })}
        <SingleLink
          className="user"
          icon={"https://i.imgur.com/wo2XHAu.png"}
          label={"39strife"}
        />
      </div>
    </div>
  );
}
