import './Forgot.css';
import ForgotPassword from '../../Components/ForgotPassword/ForgotPassword.jsx';
import videoBg from "../../Components/Assets/Ekko.mp4";

function Forgot() {
  return (
    <div className="video-background">
    <video autoPlay muted loop className="video" >
      <source src={videoBg} type="video/mp4" />
    </video>
    <div className="content">
      <ForgotPassword />
    </div>
  </div>
);
}

export default Forgot;
