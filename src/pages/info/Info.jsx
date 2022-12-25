import React from "react";
import { Link } from "react-router-dom";

import "./Info.css";

const Info = ({ weather }) => {
  console.log(weather);
  return (
    <div className="mainInfopage">
      <div className="lightSpace">
        <h1>
          {weather[0].name}, {weather[0].country}
        </h1>
        <p>Temperature: {Math.round(weather[0].temp)} ℃</p>
        <p>Feels like: {Math.round(weather[0].feels_like)} ℃</p>
        <p>
          Temp min: {Math.round(weather[0].temp_min)} ℃/ temp max {Math.round(weather[0].temp_max)} ℃
        </p>
        <p>Humidity: {weather[0].humidity} %</p>
        <p>Pressure: {weather[0].pressure} mmHg</p>
        <p>Wind: {weather[0].speed} m/sec</p>

        <Link to="/">
          <img
            className="goToMainBtn"
            src="https://cdn2.iconfinder.com/data/icons/e-commerce-line-10-1/1024/close10-64.png"
            alt="delete"
          />
        </Link>
      </div>
    </div>
  );
};

export default Info;
