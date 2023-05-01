import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";
export const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      return state.filter((movie) => movie !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});
export const { addMovie, removeMovie } = moviesSlice.actions;
