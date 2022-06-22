import './styles.css'
// or less ideally
import { Button } from 'react-bootstrap';
import { GoogleButton } from 'react-google-button'
import { useNavigate } from "react-router-dom";
import { UserAuth } from './Context/AuthContext';



// components 
import Footer from './Footer.js';

import { useState, useEffect } from 'react'
export default function LoginComponent() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate()
  const [input, setInput] = useState({})

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(`Hey my name is ${input.userEmail} and my password is ${input.password}`);
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    //tracking the values (name as key, and value as val to a object)
    //making values an object with destructuring ...values
    setInput(values => ({ ...values, [name]: value }))
  }

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user])


  return (
    <div className="register-component">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Email
          <input type="email" name="userEmail" className="form-control" placeholder="Enter email" onChange={handleChange} value={input.userEmail} />
        </label><br />
        <label>Password
          <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} value={input.password} />
        </label><br />
        <button variant="primary">Submit</button>
        <span variant="primary">Not yet a user
          <span className="register">
            <Button onClick={() => navigate("/register")} variant="primary" size="sm">Register</Button>{' '}
          </span>
        </span>
        <Footer />
        <GoogleButton
          onClick= { handleGoogleSignIn }
        />
      </form>
    </div>
  )
}