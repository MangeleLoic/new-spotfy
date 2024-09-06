import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs, setCurrentSong } from '../redux/Slice/SongSlice';
import { Form, Button, InputGroup, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.list); 
  const loading = useSelector((state) => state.songs.loading); 
  const error = useSelector((state) => state.songs.error); 

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchSongs(query));
    }
  };

  const handlePlay = (song) => {
    dispatch(setCurrentSong(song));
  };

  return (
    <div className="search-container">
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca una canzone..."
          aria-label="Search"
        />
        <Button 
          variant="success" 
          onClick={handleSearch} 
          disabled={!query.trim()}
        >
          Cerca
        </Button>
      </InputGroup>

     
      {loading && <p>Caricamento...</p>}

     
      {error && <p>Errore: {error}</p>}
      
      <Row>
        {songs.map((song) => (
          <Col md={4} key={song.id} className="mb-4">
            <Card className="bg-dark text-white rounded-0 shadow">
              <Card.Img variant="top" src={song.album.cover_medium} alt="Album cover" />
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <Card.Text>
                  {song.artist.name} - {song.album.title}
                </Card.Text>
                <Button 
                  variant="success" 
                  onClick={() => handlePlay(song)}
                >
                  Play
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Search;

