import { useEffect } from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import "./Home.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../redux/slices/weatherSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { items, inputValue } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather(inputValue));
  }, [inputValue]);

  const cards = items.map((item, i) => (
    <Link key={i} to="/info">
      <Card item={item} i={i} />
    </Link>
  ));

  return (
    <div className="App">
      <Header />
      <div className="cards">{cards}</div>
    </div>
  );
};

export default Home;
