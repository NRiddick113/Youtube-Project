import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginModal from './LoginModal';
import './NavBar.css'


function NavBar() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [logout, setLogout] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [info, setInfo] = useState({
      username: '',
      password: ''
    })

    const logoutOption = () => {

    }

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
                    <button className='username' onClick={logoutOption}>
                        <h2>{info.username}</h2>
                    </button>
                }
            </div>
            <div id='logout' className={logout ? 'show' : 'hidden'}>
                <button>
                    <h3>Log out</h3>
                </button>
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