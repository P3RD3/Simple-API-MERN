import './RegisterPage.css';




const RegisterPage = () => {
    return(
        <div className='wrapper'>
            <form onSubmit=''>
                <h1>Register</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Email' required>
                    </input>
                </div>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required>
                    </input>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required>
                    </input>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Confirm Password' required>
                    </input>
                </div>
                <div className='acceptTosEula'>
                    <label><input type='checkbox' required /> <a href="#"> Agree to EULA and TOS </a> </label>
                </div>
                <button type='submit'>Sumbit</button>
            </form>
        </div>
    );
};

export default RegisterPage;
