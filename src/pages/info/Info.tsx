import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StateInterface from "../../interfaces/StateInterface";
import "./Info.css";

const Info = () => {
  const { index, items } = useSelector(
    (state: any): StateInterface => state.weather
  );

  return (
    <div className="mainInfopage">
      <div className="lightSpace">
        <h1>
          {items[index].name}, {items[index].country}
        </h1>
        <p>Temperature: {Math.round(items[index].temp)} ℃</p>
        <p>Feels like: {Math.round(items[index].feels_like)} ℃</p>
        <p>
          Temp min: {Math.round(items[index].temp_min)} ℃/ temp max{" "}
          {Math.round(items[index].temp_max)} ℃
        </p>
        <p>Humidity: {items[index].humidity} %</p>
        <p>Pressure: {items[index].pressure} mmHg</p>
        <p>Wind: {items[index].speed} m/sec</p>

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
