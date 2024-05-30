import './welcome.css';
import WelcomePage from '../../Components/WelcomePage/WelcomePage.jsx';
import videoBg from "../../Components/Assets/Ekko.mp4";

function Welcome() {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video" >
        <source src={videoBg} type="video/mp4" />
      </video>
    <div className="content">
      <WelcomePage />
    </div>
  </div>
);
}

export default Welcome;
