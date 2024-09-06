import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSongs = createAsyncThunk('songs/fetchSongs', async (query) => {
  const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
  const data = await response.json();
  return data.data;
});

const initialState = {
  list: [],
  currentSong: null,
  likedSongs: [],
  loading: false,
  error: null,
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    toggleLikeSong: (state, action) => {
      const song = action.payload;
      const isLiked = state.likedSongs.find((likedSong) => likedSong.id === song.id);
      if (isLiked) {
        state.likedSongs = state.likedSongs.filter((likedSong) => likedSong.id !== song.id);
      } else {
        state.likedSongs.push(song);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentSong, toggleLikeSong } = songSlice.actions;
export default songSlice.reducer;
