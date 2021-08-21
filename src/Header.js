import React, { useState } from "react";

function Header (props) {

    const [searchInput, setSearchInput] = useState( "React" );

    const handleSearchInput = (event) => {
        setSearchInput( event.target.value )
      };


    const handleKeyInput = (event) => {
        if(event.key === "Enter"){
            props.searchData(searchInput)
        }
      }

    return(
        <header>
            <p>Hacker News</p>
            <input type="text" value={searchInput} onChange={handleSearchInput} onKeyPress={handleKeyInput} />
            <button onClick={() => props.searchData(searchInput)}>Search:</button>
        </header>
    )
}

export default Header