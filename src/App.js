import './App.css';
import {hackernewsData} from './hackernews.js'
import React, { useState } from 'react';
import Header from './Header'
import Main from './Main'

function App() {
  const [searchResults, setSearchResults] = useState(
    hackernewsData
  );
  return (
    <div className="App">
      <Header />
      <Main 
        searchResults = {searchResults}
      />
    </div>
  );
}

export default App;
