import React from 'react';
import { useSelector } from 'react-redux';

const SongList = () => {
  const songs = useSelector(state => state.songs.list);

  
  if (!songs || !Array.isArray(songs)) {
    return <p>Nessuna canzone trovata.</p>; 
  }

  return (
    <div>
      {songs.length > 0 ? (
        <ul>
          {songs.map(song => (
            <li key={song.id}>
              {song.title} - {song.artist.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nessuna canzone disponibile.</p>
      )}
    </div>
  );
};

export default SongList;
