import React from 'react';

function Header () {
    return(
        <header className="App-header">
            <p className="headTitle">Hacker News</p>
            <p className="search">Search: </p>
            <input type="text"/>
        </header>
    )
}

export default Header