import React from 'react';

function Search() {
    return (
        <div>
            <input type='text' placeholder='Enter search'/>
            <input type='submit' />

            <p>No Search Results Yet!, Please submit a search above!</p>
        </div>
    );
}

export default Search;