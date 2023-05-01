import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";
export const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      return state.filter((song) => song !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(reset, () => {
      return [];
    });
  }
});
export const { addSong, removeSong } = songsSlice.actions;
