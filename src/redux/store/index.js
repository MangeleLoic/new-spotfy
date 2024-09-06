import { configureStore } from '@reduxjs/toolkit';
import songReducer from '../Slice/SongSlice'; 

const store = configureStore({
  reducer: {
    songs: songReducer,
  },
});

export default store;