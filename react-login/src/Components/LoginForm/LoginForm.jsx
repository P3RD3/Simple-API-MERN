import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";



const LoginForm = () => {
    fucntion 
    return(
        <div className='wrapper'>
            <form onSubmit=''>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required>
                    </input>
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required>
                    </input>
                    <FaLock className='icon' />
                </div>
                <div className='remember-forgot'>
                    <label><input type='checkbox' /> Remember me </label>
                    <a href='#'> Forgot password? </a>
                </div>
                <button type='submit'>Login</button>
                <div className='register-link'>
                    <p>Don't have an account? <a href='#'>Register</a> </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;