import './ForgotPassword.css';



const ForgotPassword = () => {
    return(
        <div className='wrapper'>
            <form onSubmit=''>
                <h1>Passsword Recovery</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Email' required>
                    </input>
                </div>
                <div className='text1'>
                <text>
                    Please enter your email. 
                </text>
                </div>
                <div className='text2'>
                <text>
                If you have an account with us, you will receive an email to recover your password.
                </text>
                </div>
                <button type='submit'>Recover</button>
                <div className='register-link'>
                    <p>Don't have an account? <a href='/register'>Register</a> </p>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;