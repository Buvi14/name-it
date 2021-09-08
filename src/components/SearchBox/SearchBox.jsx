import React from 'react';
import './SearchBox.css';

const SearchBox = ({ handleChange }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => handleChange(event.target.value)}
                type="text" placeholder="Enter the Keywords"
                className="input-text"
            />
        </div>
    )
}

export default SearchBox;