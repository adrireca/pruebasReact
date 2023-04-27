import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from './components/Nav';
import { Signin } from './components/Signin';
import { Signup } from './components/signup';
import { NoPage } from './components/NoPage';
import { Home } from './components/Home';
import { Pistas } from './components/Pistas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
          <Route path='pistas' element={<Pistas />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
