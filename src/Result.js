import React from 'react';

function Result ({result, query}) {
    console.log(result.title || result.story_title)
    let title = result.title || result.story_title
    const toCappitalCase = function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    title = title.replaceAll(query.toLowerCase(), "<mark>"+query.toLowerCase()+"</mark>")
    title = title.replaceAll(query.toUpperCase(), "<mark>"+query.toUpperCase()+"</mark>")
    title = title.replaceAll(toCappitalCase(query), "<mark>"+toCappitalCase(query)+"</mark>")


    const modifiedTitle = {
        __html:title.replaceAll(query, "<mark>"+query+"</mark>")
    }
        
    return(
        <li className="contentRow">
            <a className="title"
                href={result.url || result.story_url}
                dangerouslySetInnerHTML={modifiedTitle}
            >
            </a>
        <p className="subtext">Points {result.points}, By {result.author}</p>
        </li>
    )
}

export default Result