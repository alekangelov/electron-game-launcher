import React from "react";
import { Link } from "react-router-dom";
import { useTransition, a } from "react-spring";
import { Chevron } from "../../assets/Icons";
import { makeClasses } from "../../lib/helpers";
import useActiveIndex from "../../lib/hooks/useActiveIndex";
const data = [
  {
    image: require("../../assets/images/starwars.jpg"),
    title: "Star Wars: Jedi - Fallen order",
    description:
      "You play as Cal, a Jedi Padawan who managed to escape the Empire and is now living a quiet, solitary life as a scrapper, shut off from the Force.",
  },
  {
    image: require("../../assets/images/tekken7.jpg"),
    title: "Tekken 7",
    description:
      "Set shortly after the events of Tekken 6, the plot focuses on the events leading up to the final battle between martial artist Heihachi Mishima and his son, Kazuya.",
  },
  {
    image: require("../../assets/images/darksouls.jpg"),
    title: "Dark Souls 3",
    description:
      "Set in the Kingdom of Lothric, a bell has rung to signal that the First Flame, responsible for maintaining the Age of Fire, is dying out.",
  },
];

export default function GameSlider() {
  const { index, next, previous, setIndex } = useActiveIndex({
    maxIndex: data.length - 1,
  });
  const transition = useTransition(index, (i) => i, {
    initial: null,
    from: {
      opacity: 1,
      transform: `translate(100%,0%)`,
    },

    enter: {
      opacity: 1,
      transform: `translate(0%,0%)`,
    },
    leave: {
      opacity: 1,
      transform: `translate(-100%,0%)`,

      position: "absolute",
    },
  });
  return (
    <div className="gslider d-flex m-t-3">
      <div className="col-md-7 p-l-0 p-r-0 gslider-image pos-relative">
        {transition.map(({ item, key, props }) => {
          return <a.img style={props} key={key} src={data[item].image} />;
        })}
      </div>
      <div className="col-md-5">
        <div className="gslider-content pos-relative row">
          <div className="row m-b-4 align-center">
            <div className="col-md-6">
              <button onClick={previous} className="btn btn-arrow m-r-3">
                <Chevron direction="left" />
              </button>
              <button onClick={next} className="btn btn-arrow">
                <Chevron direction="right" />
              </button>
            </div>
            <div className="col-md-6">
              <ul className="gslider-index align-center">
                {data.map((e, i) => (
                  <li
                    className={makeClasses(
                      "gslider-index__item",
                      i === index && "active"
                    )}
                    onClick={() => setIndex(i)}
                    key={i + "dataIndex"}
                  ></li>
                ))}
              </ul>
            </div>
            <div className="gslide-inner pos-relative m-t-4">
              {transition.map(({ item, key, props }) => (
                <a.div
                  key={key}
                  style={props}
                  className="gslider-content__inner"
                >
                  <div className="col-md-12">
                    <h6>AVAILABLE NOW</h6>
                  </div>
                  <div className="col-md-12 m-t-2">
                    <h1>{data[item].title}</h1>
                  </div>
                  <div className="col-md-12 m-t-2">
                    <p>{data[item].description}</p>
                  </div>
                </a.div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Link>
                <span className="d-flex align-center">
                  Learn More
                  <span className="m-l-3">
                    <Chevron direction="right" />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
