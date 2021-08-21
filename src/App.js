import './App.css';
import {hackernewsData} from './hackernews.js'
import React, { useState } from 'react';
import Header from './Header'
import Main from './Main'

function App() {
  const [searchResults, setSearchResults] = useState(
    hackernewsData
  );

  const url = 'http://hn.algolia.com/api/v1/search?query=';

  const searchData = async (searchInput) => {
    try {
      const response = await fetch(url + encodeURI(searchInput), { cache: 'no-cache' })
      if (response.ok) {
        const jsonResponse = await response.json();
        renderResponse(jsonResponse);
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  const renderResponse = (jsonResponse) => {
    setSearchResults(jsonResponse);
  }

  return (
    <div className="App">
      <Header
      searchData={searchData}
      />
      <Main 
        searchResults = {searchResults}
      />
    </div>
  );
}

export default App;
