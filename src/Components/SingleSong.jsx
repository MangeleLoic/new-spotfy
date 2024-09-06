import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLikeSong } from './redux/songSlice';

const SingleSong = ({ song }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector(state => state.songs.likedSongs);
  const isLiked = likedSongs.includes(song);

  return (
    <div className="song">
      <h4>{song.title}</h4>
      <button onClick={() => dispatch(toggleLikeSong(song))}>
        {isLiked ? '❤' : '♡'}
      </button>
    </div>
  );
};

export default SingleSong;