import React from "react";
import Result from "./Result";

function Main(props) {
  console.log(props);

  if (props.searchResults.hits.length === 0) {
  return   <div>No results found. Please try again.</div>
}



  return (
    <main>
      <ol className="content">
        {props.searchResults.hits.map((result) => {
          return <Result result={result} key={result.objectID} />;
        })}
        <button className="btnMore" onClick={props.moreData}>
          More
        </button>
      </ol>
    </main>
  );
}

export default Main;
