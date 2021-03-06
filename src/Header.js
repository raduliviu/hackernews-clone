import React, {useState} from 'react';
import closeImage from './assets/close_s.png';

function Header (props) {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleEnterSubmit = (event) => {
        if(event.key === "Enter"){
            props.getData(searchTerm)
        }

    }

    // const clearSearch = () => {
    //     setSearchTerm('')
    // }

    return(
        <header className="App-header">
            <div>
            <p className="headTitle">Hacker News</p>
            </div>
            <div>
            <input className="inputField" 
                onChange={handleChange} 
                onKeyPress={handleEnterSubmit} 
                id="searchField" 
                type="search"
                value={searchTerm}
                />
            {/* {searchTerm ? <img alt="clear" src={closeImage} id="clearSearch" onClick={() => clearSearch()}></img> : ''} */}
            <button onClick={() => props.getData(searchTerm)}>Search</button>
            </div>
        </header>
    )
}

export default Header