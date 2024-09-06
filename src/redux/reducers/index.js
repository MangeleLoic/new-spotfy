import { combineReducers } from 'redux';

const initialState = {
  currentSong: null,
  searchResults: [], 
  likedSongs: [],
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_SONG':
      return { ...state, currentSong: action.payload };
    case 'SET_SONGS':
      return { ...state, searchResults: action.payload };
    case 'TOGGLE_LIKE_SONG':
      const likedSongs = [...state.likedSongs];
      const index = likedSongs.indexOf(action.payload);
      if (index !== -1) {
        likedSongs.splice(index, 1);
      } else {
        likedSongs.push(action.payload);
      }
      return { ...state, likedSongs };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  songs: songReducer,
});

export default rootReducer;
