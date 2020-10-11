import React from "react";
import GameSlider from "./GameSlider";

export default function Home() {
  return (
    <div className="wrapper-small">
      <div className="row align-center">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-3">
              <p>
                <b>Discover</b>
              </p>
            </div>
            <div className="col-md-6">
              <p>Browse</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <input
            type="search"
            className="m-l-auto form-control form-control__search"
            placeholder="Search..."
          />
        </div>
      </div>
      <GameSlider />
      <div className="row m-t-7">
        <div className="col-md-12">
          <h6>new releases</h6>
        </div>
        {Array(4)
          .fill(0)
          .map((e, i) => (
            <div className="col-md-3 m-t-4">
              <div className="card card__release"></div>
            </div>
          ))}
      </div>
    </div>
  );
}
