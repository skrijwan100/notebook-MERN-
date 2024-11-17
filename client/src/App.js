import './App.css';
import About from './components/About';
import { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Notesate from './context/notestate';
import Login from './components/Login';
import Singup from './components/Singup';
import Alert from './components/Alert';
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      ty: type

    })
    setTimeout(() => {
      setAlert(null)
    }, 1600)
  }
  return (
    <>
    <Notesate>
       
        <Router>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">

       
        <Routes>
          <Route path="/" element={<Home showAlert={showAlert}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login showAlert={showAlert}/>} />
          <Route path="/singup" element={<Singup showAlert={showAlert}/>} />
        </Routes>

      </div>
      </Router>
      </Notesate>


    </>
  );
}

export default App;
