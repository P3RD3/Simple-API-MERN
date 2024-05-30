import './WelcomePage.css';

function WelcomePage(){
    return(
        <>
                <div className='welcomeWrapper'>
                    <h1>You are logged in!</h1>
                    <br />
                    <div className='welcomeText'>
                        <h2>
                            Welcome to my Home Page!
                        </h2>
                    </div>
                    <div className="homeLink">
                    <p>
                            <a href='/'> Back to Home</a>
                    </p>
                    </div>
                </div>
        </>

    )
}

export default WelcomePage;