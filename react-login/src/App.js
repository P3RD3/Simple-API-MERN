import './App.css';
import LoginForm from './Components/LoginForm/LoginForm.jsx';
import videoBg from "../src/Components/Assets/Ekko.mp4";

function App() {
  return (
    <div className="video-background">
    <video autoPlay muted loop className="video" >
      <source src={videoBg} type="video/mp4" />
    </video>
    <div className="content">
      <LoginForm />
    </div>
  </div>
);
}

export default App;
