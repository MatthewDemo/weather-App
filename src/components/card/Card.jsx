import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setItems,
  setIndex,
  fetchWeather,
} from "../../redux/slices/weatherSlice";

const Card = ({ item, i }) => {
  const { items } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const deleteItem = (e) => {
    dispatch(setItems(items.filter((city) => city.name !== item.name)));
    if (e.target.className === "deleteBtn") {
      e.preventDefault();
    }
  };
  const reloadItem = (e) => {
    if (e.target.className === "reloadBtn") {
      e.preventDefault();
    }
    dispatch(fetchWeather(items[i].name));
  };

  return (
    <div className="card" onClick={() => dispatch(setIndex(i))}>
      {<h1 className="currentTemp"> {Math.round(item.temp)} °C</h1>}
      {
        <p className="currentCity">
          {item.name} , {item.country}
        </p>
      }

      <img
        className="reloadBtn"
        src="https://cdn3.iconfinder.com/data/icons/watchify-v1-0-32px/32/reload-64.png"
        alt="reload"
        onClick={(e) => reloadItem(e)}
      />
      <img
        className="deleteBtn"
        src="https://cdn2.iconfinder.com/data/icons/e-commerce-line-10-1/1024/close10-64.png"
        alt="delete"
        onClick={(e) => deleteItem(e)}
      />
    </div>
  );
};

export default Card;
