import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from './components/Nav';
import { Signin } from './components/Signin';
import { Signup } from './components/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
