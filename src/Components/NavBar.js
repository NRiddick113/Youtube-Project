import React from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import './NavBar.css'


function NavBar({ setOpenModal, loggedIn, username}) {

    return (
        <div className='navBar'>
            <h1>
                <Link to="/">
                YouTube   
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
            <button onClick={() => setOpenModal(true)}>
                <h2>{loggedIn ? `Welcome back ${username.username}`: 'Login'}</h2>
            </button>
        </div>
    );
}

export default NavBar;