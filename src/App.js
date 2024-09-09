import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Notesate from './context/notestate';
import Login from './components/Login';
import Singup from './components/Singup';
// import Alert from './components/Alert';
function App() {
  return (
    <>
    <Notesate>
       
        <Router>
        <Navbar />
        {/* <Alert/> */}
        <div className="container">

       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/singup" element={<Singup/>} />
        </Routes>

      </div>
      </Router>
      </Notesate>


    </>
  );
}

export default App;
