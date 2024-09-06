import { configureStore } from '@reduxjs/toolkit';
import songReducer from '../slice/SongSlice'; 

const store = configureStore({
  reducer: {
    songs: songReducer, 
  },
});

export default store;

