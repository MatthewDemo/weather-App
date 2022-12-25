import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  weather: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers : {
    
  }
});

export const { increment } = weatherSlice.actions;

export default weatherSlice.reducer;
