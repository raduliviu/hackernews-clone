import React from 'react';

function Result ({result}) {
    return(
        <li className="contentRow"><a className="title" href={result.url}>{result.title}</a>
        <p className="subtext">Points {result.points}, By {result.author}</p>
        </li>
    )
}

export default Result