import React from 'react';
import { useSelector } from 'react-redux';

const SongList = () => {

  const searchResults = useSelector(state => state.songs.searchResults);

  if (!Array.isArray(searchResults)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="song-list">
      {searchResults.length > 0 ? (
        searchResults.map(song => (
          <div key={song.id} className="song-item">
            <h4>{song.title}</h4>
            <p>{song.artist.name}</p>
          </div>
        ))
      ) : (
        <p>No songs found.</p>
      )}
    </div>
  );
};

export default SongList;
