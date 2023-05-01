import { configureStore } from "@reduxjs/toolkit";
import { songsSlice, addSong, removeSong } from "./slices/songsSlice";
import { moviesSlice, addMovie, removeMovie } from "./slices/moviesSlice";

export const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer
  }
});
export { addSong, removeSong, addMovie, removeMovie };
