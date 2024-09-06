import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSongs = createAsyncThunk(
  'songs/fetchSongs',
  async (query) => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
    const data = await response.json();
    return data.data;
  }
);

const songSlice = createSlice({
  name: 'songs',
  initialState: {
    currentSong: null,
    likedSongs: [],
    songs: [],
  },
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    toggleLikeSong: (state, action) => {
      const isLiked = state.likedSongs.includes(action.payload);
      if (isLiked) {
        state.likedSongs = state.likedSongs.filter(song => song !== action.payload);
      } else {
        state.likedSongs.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSongs.fulfilled, (state, action) => {
      state.songs = action.payload;
    });
  },
});

export const { setCurrentSong, toggleLikeSong } = songSlice.actions;

export default songSlice.reducer;
