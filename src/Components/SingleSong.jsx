import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLikeSong } from '../redux/Slice/SongSlice';

const SingleSong = ({ song }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.songs.likedSongs);

  const isLiked = likedSongs.some((likedSong) => likedSong.id === song.id);

  const handleLike = () => {
    dispatch(toggleLikeSong(song));
  };

  return (
    <div>
      <h3>{song.title}</h3>
      <p>{song.artist.name}</p>
      <button onClick={handleLike}>
        {isLiked ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
};

export default SingleSong;
