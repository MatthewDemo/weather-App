import "./App.css";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Info from "./pages/info/Info";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/slices/weatherSlice";

function App() {
  const [weather, setWeather] = useState([]);
  const [inputValue, setInputValue] = useState("Kyiv");

  const weatherRed = useSelector((state) => state.weather.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(inputValue);
      setWeather((prev) => [...prev, data]);
    };
    fetchWeatherData();
    setInputValue("");
  }, [inputValue]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            weather={weather}
            setWeather={setWeather}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        }
      />
      <Route path="/info" element={<Info weather={weather} />} />
    </Routes>
  );
}

export default App;
