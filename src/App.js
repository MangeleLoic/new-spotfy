import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar';
import Home from './Components/Home';
import Search from './Components/Search';
import Library from './Components/Library';


const App = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;