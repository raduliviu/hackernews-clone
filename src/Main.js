import React, { useState, useRef } from 'react';
import Result from "./Result";
import Loader from './Loader'
import MoreButton from './MoreButton';

function Main(props) {
  console.log(props);
  
  // Trying to load more using scroll position 


  // let listInnerRef = useRef(0);

  // const onScroll = () => {
  //   console.log(listInnerRef.current)
  //   if (listInnerRef.current) {
  //     const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
  //     console.log(scrollHeight)
  //     console.log(scrollTop)
  //     console.log(clientHeight)
  //     // console.log(isBottom(listInnerRef.current))
  //     if (scrollHeight - scrollTop === clientHeight) {
  //       props.moreData();
  //       console.log('Reached bottom')
  //     }
  //   }
  // };

  // const isBottom = (el) => {
  //   return el.getBoundingClientRect().bottom <= window.innerHeight
  // }

  // window.addEventListener('scroll', onScroll());

  // Trying to load more using scroll position


  const [loadingMore, setLoadingMore] = useState(false)

  if (props.searchResults.hits.length === 0) {
  return   <div className="noResultsMessage"><strong>No results found. Please try again.</strong></div>
}

  const loadMore = () => {
    setLoadingMore(true);
    props.moreData();
    setTimeout(() => setLoadingMore(false), 500);
  }


  let moreButton
  if (loadingMore) {
    moreButton = <Loader />
  } else {
    moreButton = <MoreButton loadMore={loadMore}/>
  }



  return (
    <main  >
      <ol className="content" >
        {props.searchResults.hits.map((result) => {
          return <Result result={result} key={result.objectID} />;
        })}
        {moreButton}
      </ol>
    </main>
  );
}

export default Main;
