import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from '../redux/Slice/SongSlice'; 

const Search = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs.songs);

  const handleSearch = (query) => {
    dispatch(fetchSongs(query));
  };

  return (
    <div>
      <input type="text" placeholder="Search for a song..." onChange={(e) => handleSearch(e.target.value)} />
      <div>
        {songs.map(song => (
          <div key={song.id}>{song.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Search;