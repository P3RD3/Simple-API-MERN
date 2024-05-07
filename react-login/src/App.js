import LoginForm from './pages/Login-Page/Login.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<LoginForm />} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
