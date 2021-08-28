import React from 'react';

function Sort (props) {

    return(
        <div id="sortBar">
            <form>
                <label htmlFor="sort-select">Sort by: </label>
                <select onChange={(e)=>{props.sortingToggle(e.target.value)}} name="sorting" id="sort-select">
                    <option value="search">Popularity</option>
                    <option value="search_by_date">Date</option>
                </select>
            </form>
        </div>
    )
}

export default Sort