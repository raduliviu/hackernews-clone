import React, { useState } from 'react';
import Result from "./Result";
import Loader from './Loader'
import MoreButton from './MoreButton';

function Main(props) {
  console.log(props);


  const [loadingMore, setLoadingMore] = useState(false)

  if(!props.searchResults) {
    return <div>Loading...</div>
  }

  if (props.searchResults.hits.length === 0) {
  return   <div className="noResultsMessage"><strong>No results found. Please try again.</strong></div>
}

  const loadMore = () => {
    setLoadingMore(true);
    props.moreData(props.searchResults.query);
    setTimeout(() => setLoadingMore(false), 500);
  }

  let moreButton
  if (loadingMore) {
    moreButton = <Loader />
  } else {
    moreButton = <MoreButton loadMore={loadMore}/>
  }

  return (
    <main>
      <ol className="content">
        {props.searchResults.hits.map((result) => {
          return <Result result={result} key={result.objectID} query={props.searchResults.query} />;
        })}
        {moreButton}
      </ol>
    </main>
  );
}

export default Main;
