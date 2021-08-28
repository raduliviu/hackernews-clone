import React from 'react';

function MoreButton (props) {
    return(
        <div>
            <button className="btnMore" onClick={props.loadMore}>More</button>
        </div>
    )
}

export default MoreButton