import React from 'react';
import './Home.css'


function Home() {
    return (
        <div>
            <input type='text' placeholder='Enter search'/>
            <input type='submit' />

            <p>No Search Results Yet! Please submit a search above!</p>
        </div>
    );
}

export default Home;