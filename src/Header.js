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

    const clearSearch = () => {
        setSearchTerm('')
    }

    return(
        <header className="App-header">
            <p className="headTitle">Hacker News</p>
            <input 
                onChange={handleChange} 
                onKeyPress={handleEnterSubmit} 
                id="searchField" 
                type="text"
                value={searchTerm}
                />
            {searchTerm ? <img src={closeImage} id="clearSearch" onClick={() => clearSearch()}></img> : ''}
            <button onClick={() => props.getData(searchTerm)}>Search</button>
        </header>
    )
}

export default Header