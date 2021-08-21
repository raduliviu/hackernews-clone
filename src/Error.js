import React from 'react';
import errorIcon from './assets/errorIcon.png'

function Error (props) {
    return(
        <div id="error">
            <p>Oops, something went wrong! Try again later!</p>
            <img src={errorIcon} alt="Error Icon"></img>
        </div>
    )
}

export default Error