import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { setCurrentSong, toggleLikeSong } from '../redux/Slice/SongSlice';
import 'bootstrap/dist/css/bootstrap.min.css';


const Library = () => {
  const likedSongs = useSelector(state => state.songs.likedSongs);
  const dispatch = useDispatch();

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2 className="display-4 text-dark">I tuoi Preferiti</h2>
          {likedSongs.length === 0 ? (
            <Alert variant="info" className="mt-4">
              nessuna canzone Nei preferiti.
            </Alert>
          ) : (
            <Row>
              {likedSongs.map((song) => (
                <Col md={4} key={song.id} className="mb-4">
                  <Card className="bg-dark text-dark rounded-0 shadow">
                    <Card.Img variant="top" src={song.album.cover_medium} />
                    <Card.Body>
                      <Card.Title>{song.title}</Card.Title>
                      <Card.Text>{song.artist.name} - {song.album.title}</Card.Text>
                      <Button
                        variant="success"
                        onClick={() => dispatch(setCurrentSong(song))}
                        className="mr-2"
                      >
                        Play
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => dispatch(toggleLikeSong(song))}
                      >
                        Rimuovi
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Library;
