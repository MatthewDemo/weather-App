import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "8c76bc5561dc57f5228e5cd8bdbd4147";

const makeIconURL = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const data = await fetch(URL)
      .then((res) => res.json())
      .then((data) => data);

    const {
      weather,
      main: { feels_like, temp_min, temp_max, pressure, humidity, temp },
      wind: { speed },
      sys: { country },
      name,
    } = data;

    const { description, icon } = weather[0];

    return {
      description,
      iconURL: makeIconURL(icon),
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
      speed,
      country,
      name,
    };
  }
);

const initialState = {
  items: [],
  inputValue: null,
  status: null,
  error: null,
  index: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setIndex: (state, action) => {
      state.index = action.payload;
    },
  },
  extraReducers: {
    [fetchWeather.pending]: (state) => {
      state.status = "loading";
    },
    [fetchWeather.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = [...state.items, action.payload];
    },
    [fetchWeather.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export const { setItems, setInputValue, setIndex } = weatherSlice.actions;

export default weatherSlice.reducer;
