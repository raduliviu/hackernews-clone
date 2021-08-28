import React from "react";
import Result from "./Result";

function Main(props) {
  console.log(props);

  if (props.searchResults.hits.length === 0) {
  return   <div className="noResultsMessage"><strong>No results found. Please try again.</strong></div>
}



  return (
    <main>
      <ol className="content">
        {props.searchResults.hits.map((result) => {
          return <Result result={result} key={result.objectID} query={props.searchResults.query} />;
        })}
        <button className="btnMore" onClick={props.moreData}>
          More
        </button>
      </ol>
    </main>
  );
}

export default Main;
