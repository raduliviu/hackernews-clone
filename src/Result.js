import React from 'react';

function Result ({result}) {
    return(
            <li key={result.objectID}>{result.title}</li>
    )
}

export default Result