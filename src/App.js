import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Components/Search';
import SongList from './Components/SongList';
import Player from './Components/Player';
import MyNavbar from './Components/MyNavbar';

const App = () => {
  return (
    <Router>
      <div className="app">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/songs" element={<SongList />} />
          <Route path="/player" element={<Player />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
