import React from 'react';
import { useSelector } from 'react-redux';

const Player = () => {
  const currentSong = useSelector(state => state.songs.currentSong);

  return (
    <div className="player">
      {currentSong ? (
        <>
          <h3>{currentSong.title}</h3>
          <p>{currentSong.artist}</p>
        </>
      ) : (
        <p>Seleziona una canzone per iniziare a riprodurre</p>
      )}
    </div>
  );
};

export default Player;