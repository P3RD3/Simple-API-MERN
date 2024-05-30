import Login from './pages/Login-Page/Login.js';
import Register from './pages/Register-Page/Register.js';
import Forgot from './pages/Forgot-Page/Forgot.js';
import Welcome from './pages/Welcome-page/welcome.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot" element={<Forgot />} />
      <Route path="welcome" element={<Welcome />} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
