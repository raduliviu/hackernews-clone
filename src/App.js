import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Header'
import Main from './Main'
import Loader from './Loader'
import Error from './Error'
import Sort from './Sort'

function App() {
  const [loading, setLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1);

  const [errorState, setErrorState] = useState(false);

  const [searchResults, setSearchResults] = useState(
    ""
  );

  const [sorting, setSorting] = useState('search')

  useEffect(
    () => initialSearch(searchResults.query || ''), [sorting]
  )

  const sortingToggle = (param) => {
    setSorting(param)
    console.log(param)
  }

  const getData = async (searchQuery) => {
    let jsonResponse = { error: "unknown" };
    let url = `https://hn.algolia.com/api/v1/${sorting}?query=`
    try {
      const response = await fetch(url + encodeURI(searchQuery) + '&page=' + currentPage, { cache: 'no-cache' })
      if (response.ok) {
        setErrorState(false)
        jsonResponse = await response.json()
      }
    } catch (error) {
      console.log(error);
      setErrorState(true)
      jsonResponse.error = error.message
    }
    return jsonResponse
  }

  const initialSearch = async (searchQuery) => {
    setLoading(true)
    const currentSearch = await getData(searchQuery);
    setSearchResults(currentSearch)
    setLoading(false);
  }

  const moreData = async (searchQuery) => {
    setLoading(true)
    setCurrentPage(currentPage + 1)
    const newData = await getData(searchQuery);
    setSearchResults((prevData) => {
      const combinedHits = [...prevData.hits, ...newData.hits];
      const combinedData = { ...newData, hits: combinedHits };
      return combinedData
    })
    setLoading(false);
  }

  let mainSection;
  if (loading) {
    mainSection = <Loader />
  } else if (errorState) {
    mainSection = <Error />
  } else {
    mainSection = <Main searchResults={searchResults} moreData={moreData} />
  }

  return (
    <div className="App">
      <Header
        getData={initialSearch}
      />
      <Sort sortingToggle={sortingToggle} />

      {mainSection}

    </div>
  );
}

export default App;
