import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


function NavBar() {
    
    return (
        <div className='navBar'>
            <h1>
                <Link to="/">
                Youtube   
                </Link>
            </h1>
            <h2>
                <Link to='/'>
                Home
                </Link>
            </h2>
            <h2>
                <Link to="/about">
                About
                </Link>
            </h2>
        </div>
    );
}

export default NavBar;