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
                   />
                })}
            </ol>
        </main>
    )
}

export default Main