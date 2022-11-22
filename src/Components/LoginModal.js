import React from 'react';
import { useState } from 'react';
import './LoginModal.css'

function LoginModal({ setOpenModal, info, setInfo, setLoggedIn }) {
    const [showPassword, setShowPassword] = useState(false)

    const handleTextChange = (e) => {
        setInfo({...info,[e.target.id]:e.target.value})
        console.log(info.username)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(info.username.length && info.password.length){
            setLoggedIn(true)
            setOpenModal(false)
        } else {
            alert('Please enter a valid username and password')
        }
    }

    return (
        <div className='loginModal'>
            <button id='x' onClick={() => setOpenModal(false)}>X</button>
            <p>Please enter your login information</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>
                    Username    
                </label>
                <input type='text' id='username' onChange={handleTextChange} />
                <br/>
                <label htmlFor='password'>
                    Password
                </label>
                <input type={showPassword ? 'text' : 'password'} id='password' onChange={handleTextChange} /> 
                <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide Password' : 'Show Password'}</button> 
                <br/>
                <input type='submit' id='submit' />
            </form>
        </div>
    );
}

export default LoginModal;