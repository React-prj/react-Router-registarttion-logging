import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginComponent from './components/Login.js'
import RegisterComponent from './components/Registration.js' 
import Home from './components//Home.js'

import { BrowserRouter as Router,  Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </Router>
    
  );
}

export default App;
