import React from 'react';
import Result from './Result'

function Main (props) {
    console.log(props)
    return (
        <main>
            <ol>
                {props.searchResults.hits.map(result => {
                   return <Result 
                       result={result}
                       key={result.objectID}
                   />
                })}
            </ol>
        </main>
    )
}

export default Main