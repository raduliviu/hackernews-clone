import './App.css';
// import { hackernewsData } from './hackernews.js'
import React, { useEffect, useState } from 'react';
import Header from './Header'
import Main from './Main'
import Loader from './Loader'
import Error from './Error'


function App() {
  const [loading, setLoading] = useState(true)

  // const [errorMessage, setErrorMessage] = useState('')

  const [errorState, setErrorState] = useState(false)

  const [searchResults, setSearchResults] = useState("");

  useEffect(
    () => {
      getData('news')
    }, []
  )

  const url = 'https://hn.algolia.com/api/v1/search?query='

  const getData = async (searchQuery) => {
    setLoading(true)
    try {
      const response = await fetch(url + encodeURI(searchQuery), { cache: 'no-cache' })
      if (response.ok) {
        setErrorState(false)
        const jsonResponse = await response.json()
        setSearchResults(jsonResponse)
      }
    } catch (error) {
      console.log(error)
      setErrorState(true)
    }
    setLoading(false);
  }

  let mainSection;
  if (loading) {
    mainSection = <Loader />
  } else if (errorState) {
    mainSection = <Error />
  } else {
    mainSection = <Main searchResults={searchResults} />
  }

  return (
    <div className="App">
      <Header
        getData={getData}
      />
      {mainSection}
    </div>
  );
}

export default App;
