import React from 'react';
import { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    props.changeQuery(query);
  }


  return (
  <div>
     <input onChange = { (e) => setQuery(e.target.value) }
          type="text"
          className="search-input"
          placeholder="Search..."
      />
      <button className="search-button" onClick = { handleSearch }>Search</button>
  </div>
  );
};

export default SearchBar;