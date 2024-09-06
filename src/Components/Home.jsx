import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';
import './Home.css'; 

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const query = 'top hits';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [query]); 

  return (
    <Container fluid className="home-bg">
      <Container>
        <Row className="text-center text-white mb-4">
          <Col>
            <h2 className="display-4">Home Page</h2>
            <p className="lead">Benvenuto nella Home Page di Spotify!</p>
          </Col>
        </Row>
        {loading && (
          <Row className="text-center">
            <Col>
              <Spinner animation="border" variant="light" />
            </Col>
          </Row>
        )}
        {error && (
          <Row className="text-center">
            <Col>
              <Alert variant="danger">
                <Alert.Heading>Something went wrong!</Alert.Heading>
                <p>{error}</p>
              </Alert>
            </Col>
          </Row>
        )}
        {!loading && !error && (
          <Row>
            {data.map((item) => (
              <Col md={4} key={item.id}>
                <Card className="bg-dark text-white mb-4">
                  <Card.Img variant="top" src={item.album.cover_medium} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.artist.name} - {item.album.title}
                    </Card.Text>
                    <Button variant="success" href={item.link} target="_blank">Play</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Container>
  );
};

export default Home;
