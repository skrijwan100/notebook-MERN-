import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
      <Navbar/>
    <Routes>
          <Route path="/" element={<Home/>}/>
            
          <Route path="/about" element={  <About />}/>
      </Routes>

          </Router>
    </>
  );
}

export default App;
