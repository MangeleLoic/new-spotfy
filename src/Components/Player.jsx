import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import './Player.css'; 

const Player = () => {
  const [audio, setAudio] = useState(null);
  const currentSong = useSelector(state => state.songs.currentSong);

  useEffect(() => {
    if (currentSong) {
      if (audio) {
        audio.pause();
        audio.src = '';
      }

      const newAudio = new Audio(currentSong.preview);
      setAudio(newAudio);
      newAudio.play(); 
    }
  }, [currentSong]);

  const handlePlay = () => {
    if (audio) {
      audio.play();
    }
  };

  const handlePause = () => {
    if (audio) {
      audio.pause();
    }
  };

  return (
    <div className="player-container">
      <Card className="bg-dark text-white">
        <Card.Body>
          {currentSong ? (
            <>
              <Card.Title>{currentSong.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{currentSong.artist.name}</Card.Subtitle>
              <Card.Text>
                <Button variant="success" onClick={handlePlay}>Play</Button>
                <Button variant="secondary" onClick={handlePause} className="ml-2">Pause</Button>
              </Card.Text>
            </>
          ) : (
            <Card.Text>Seleziona una canzone per iniziare a riprodurre</Card.Text>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;

