import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import React, { useRef, useState, useEffect } from 'react';
import { login } from "../API requests/login.js";

function LoginForm() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
    
        try {
            const result = await login(user, pwd);
    
            if (result.success) {
                if (result.redirectUrl) {
                    window.location.href = result.redirectUrl;
                } else {
                    setSuccess(true);
                }
            }
        } catch (error) {
            // Log the specific error message to the console
            console.log(error.message);
    
            // Optionally set a generic error message for the user
            if (error.message === 'Invalid credentials') {
                setErrMsg('Invalid credentials. Please check your username and password.');
            } else {
                setErrMsg('An unexpected error occurred. Please try again later.');
            }
        }
    };
    

    return (
        <>
            <section>
                <div className='wrapper'>
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        {/* Error message */}
                        {errMsg && (
                            <div ref={errRef} className="error-msg" aria-live="assertive">
                                {errMsg}
                            </div>
                        )}
                        <div className='input-box'>
                            <input 
                                type="text" 
                                placeholder='Username'
                                id='username'
                                required 
                                ref={userRef} 
                                autoComplete='off' 
                                autoCapitalize='off'
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                            />
                            <FaUser className='icon' />
                        </div>
                        <div className='input-box'>
                            <input 
                                type="password"
                                id='password'
                                placeholder='Password' 
                                required
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                            />
                            <FaLock className='icon' />
                        </div>
                        <div className='remember-forgot'>
                            <label><input type='checkbox' /> Remember me </label>
                            <a href='/forgot'> Forgot password? </a>
                        </div>
                        <button type='submit'>Login</button>
                        <div className='register-link'>
                            <p>Don't have an account? <a href='/register'>Register</a> </p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default LoginForm;
