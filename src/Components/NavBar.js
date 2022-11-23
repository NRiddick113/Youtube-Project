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
        <div>
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
                {
                    !loggedIn ?
                    <button id='login' onClick={() => setOpenModal(true)}>
                        <h2>Login</h2>
                    </button> :
                    <h2>{info.username}</h2>

                }
            </div>
            <div className='modal'>
                { openModal ? 
                <LoginModal 
                    info={info}
                    setInfo={setInfo}
                    setLoggedIn={setLoggedIn}
                    setOpenModal={setOpenModal}
                /> : 
                null }
            </div>
        </div>
    );
}

export default NavBar;