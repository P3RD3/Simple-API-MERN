import './Register.css';
import RegisterPage from '../../Components/RegisterPage/RegisterPage.jsx';
import videoBg from "../../Components/Assets/Ekko.mp4";

function Register() {
  return (
    <div className="video-background">
    <video autoPlay muted loop className="video" >
      <source src={videoBg} type="video/mp4" />
    </video>
    <div className="content">
      <RegisterPage />
    </div>
  </div>
);
}

export default Register;
