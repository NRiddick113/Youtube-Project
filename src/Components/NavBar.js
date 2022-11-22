import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginModal from './LoginModal';
import './NavBar.css'


function NavBar() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [info, setInfo] = useState({
      username: '',
      password: ''
    })

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
                <h2>{loggedIn ? `Welcome back ${info.username}`: 'Login'}</h2>
            </button>
            { openModal ? 
            <LoginModal 
                info={info}
                setInfo={setInfo}
                setLoggedIn={setLoggedIn}
                setOpenModal={setOpenModal}
            /> : 
            null }
        </div>
    );
}

export default NavBar;