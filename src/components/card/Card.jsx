import "./Card.css";


const Card = ({ item, weather, setWeather, idx }) => {
  const deleteItem = (e) => {
    setWeather(weather.filter((city) => city.name !== item.name));
    if (e.target.className === "deleteBtn") {
      e.preventDefault();
    }
  };
  const reloadItem = (e) => {
    if (e.target.className === "reloadBtn") {
      e.preventDefault();
    }
  };

  return (
    <div onClick={() => console.log(idx)} className="card">
      <h1 className="currentTemp">{Math.round(item.temp)} °C</h1>
      <p className="currentCity">
        {item.name}, {item.country}
      </p>

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
