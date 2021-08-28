import './App.css';
// import { hackernewsData } from './hackernews.js'
import React, { useEffect, useState, useRef } from 'react';
import Header from './Header'
import Main from './Main'
import Loader from './Loader'
import Error from './Error'


function App() {
  const [loading, setLoading] = useState(true)

  const[currentPage, setCurrentPage] = useState( 1 );

  const [errorState, setErrorState] = useState(false);

  const [searchResults, setSearchResults] = useState(
    ""
    );

  useEffect(
    async () => {
      const currentSearch = await getData('news');
      console.log("currentSearch")
      console.log(currentSearch)
      setSearchResults(currentSearch)
      setLoading(false);
    }, []
  )

  const url = 'https://hn.algolia.com/api/v1/search?query='

  const getData = async (searchQuery) => {
    setLoading(true)
    let currentSearch;
    let jsonResponse = {error: "unknown"};
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
    currentSearch = jsonResponse
    setLoading(false)
    return currentSearch
  }

  // const GetPreviousValue = value => {
  //   const ref = useRef();
  //   useEffect(() => {
  //    ref.current = value ; 
  //   }, [value]); 
  //   return ref.current;
  // };

  const moreData = async (searchQuery) => {
    setCurrentPage(currentPage + 1)
    const newData = await getData(searchQuery);
    console.log("Test for newData");
    console.log(newData);
    setSearchResults((prevData) => {
      console.log("Test for prevData");
      console.log(prevData.hits);
      console.log("Test for newData");
      console.log(newData);
      const combinedHits = [...prevData.hits, ...newData.hits]; // property of hits is still undefined. Probably we have an issue with them here 
      console.log("Test for combinedHits");
      console.log(combinedHits);
      const combinedData = {...newData, hits: combinedHits};
      // console.log(combinedData);
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
