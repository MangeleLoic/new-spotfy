import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSong } from '../redux/songSlice';
import SingleSong from './SingleSong';

const SongList = () => {
  const songs = useSelector(state => state.songs.songs);
  const dispatch = useDispatch();

  return (
    <div className="song-list">
      {songs.map(song => (
        <div key={song.id} className="song-item">
          <SingleSong song={song} />
          <button onClick={() => dispatch(setCurrentSong(song))}>Play</button>
        </div>
      ))}
    </div>
  );
};

export default SongList;