import React, {useState} from 'react';

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

    return(
        <header>
            <p>Hacker News</p>
            <input 
                onChange={handleChange} 
                onKeyPress={handleEnterSubmit} 
                id="searchField" 
                type="text"
                value={searchTerm}
                />
            <button onClick={() => props.getData(searchTerm)}>Search</button>
        </header>
    )
}

export default Header