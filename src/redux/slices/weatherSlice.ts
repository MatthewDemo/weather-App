import { createSlice, createAsyncThunk, Action } from "@reduxjs/toolkit";
import ItemInterface from "../../interfaces/ItemInterface";
import StateInterface from "../../interfaces/StateInterface";

const API_KEY = "8c76bc5561dc57f5228e5cd8bdbd4147";

const makeIconURL = (iconId : string) : string =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

export const fetchWeather: any = createAsyncThunk(
  "weather/fetchWeather",
  async (city): Promise<ItemInterface>  => {
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
    } as ItemInterface;
  }
);

const itemsLS : ItemInterface[] =
  localStorage.getItem("allCities") !== null
    ? JSON.parse(localStorage.getItem("allCities"))
    : [];

const initialState : StateInterface = {
  items: itemsLS,
  inputValue: null,
  status: null,
  error: null,
  index: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setItems: (state: StateInterface, action: {payload: ItemInterface[], type: string}) : void => {
      state.items = action.payload;
      localStorage.setItem("allCities", JSON.stringify(state.items));
    },
    setInputValue: (state: StateInterface, action: {payload: string, type: string}): void => {
      state.inputValue = action.payload;
    },
    setIndex: (state: StateInterface, action: {payload: number, type: string}): void => {
      state.index = action.payload;
    },
  },
  extraReducers: {
    [fetchWeather.pending]: (state: StateInterface): void => {
      state.status = "loading";
    },
    [fetchWeather.fulfilled]: (state: StateInterface, action: {payload: ItemInterface, type: string}) => {
      state.status = "success";
      state.items = state.items.filter(
        (item) => item.name !== action.payload.name
      );
      state.items = [...state.items, action.payload];

      localStorage.setItem("allCities", JSON.stringify(state.items));
    },
    [fetchWeather.rejected]: (state: StateInterface) => {
      state.status = "error";
    },
  },
});

export const { setItems, setInputValue, setIndex } = weatherSlice.actions;

export default weatherSlice.reducer;
