import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSongs } from '../redux/actions';



const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchSongs(query));
  };

  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cerca una canzone..."
      />
      <button onClick={handleSearch}>Cerca</button>
    </div>
  );
};

export default Search;