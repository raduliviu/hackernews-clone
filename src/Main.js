import React from "react";
import Result from "./Result";

function Main(props) {
  console.log(props);
  return (
    <main>
      <ol className="content">
        {props.searchResults.hits.map((result) => {
          return <Result result={result} key={result.objectID} />;
        })}
        <a className="btnMore" href="#">
          More
        </a>
      </ol>
    </main>
  );
}

export default Main;
