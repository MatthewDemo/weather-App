import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = ({ weather, setWeather, inputValue, setInputValue }) => {
  return (
    <div className="App">
      <Header setInputValue={setInputValue} />
      <div className="cards">
        {weather.map((item, idx) => (
          <Link to="/info">
            <Card
              key={idx}
              idx={idx}
              item={item}
              weather={weather}
              setWeather={setWeather}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
