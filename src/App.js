import './App.css';
import { hackernewsData } from './hackernews.js'
import React, { useEffect, useState } from 'react';
import Header from './Header'
import Main from './Main'
import Loader from './Loader'


function App() {
  const[loading, setLoading] = useState( true )

  
  const [searchResults, setSearchResults] = useState(
    ""
    );

  useEffect(
    () => {
      getData('news');
      let timer = setTimeout(() => setLoading(false), 2000);
      return () => {
        clearTimeout(timer);
      }
    }, []
    )

  


  const url = 'https://hn.algolia.com/api/v1/search?query='

  const getData = async (searchQuery) => {

    try {
      const response = await fetch(url + encodeURI(searchQuery), { cache: 'no-cache' })
      if (response.ok) {
        const jsonResponse = await response.json()
        setSearchResults(jsonResponse)
      }
    } catch (error) {
      console.log(error)
    }
  }

  if(loading){
    return <Loader />
  }else return (
    
    <div className="App">
      <Header
        getData={getData}
      />
      <Main
        searchResults={searchResults}
      />
    </div>
  );
}

export default App;
