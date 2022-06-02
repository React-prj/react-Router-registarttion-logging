import './styles.css'
import {Button} from 'react-bootstrap'
import Footer from './Footer.js';
import { useNavigate } from "react-router-dom";


import  {useState} from 'react'
export default function RegisterComponent() {
  const navigate = useNavigate()

  const [input, setInput] = useState({})

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(`Hey my name is ${input.userEmail} and my password is ${input.password}`);
  }

  const  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    //tracking the values (name as key, and value as val to a object)
    //making values an object with destructuring ...values
    setInput(values =>  ({...values, [name]: value}))
  }

  
  return (
    <div className="register-component">
      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
          <label>Email
            <input type="email" name="userEmail" className="form-control" placeholder="Enter email" onChange = {handleChange} value={input.userEmail} />
          </label><br />
          <label>Username
            <input type="text" name="username" className="form-control" placeholder="Username"  onChange = {handleChange}  value={input.username} />
          </label><br />
          <label>Password
            <input type="password" name="password" className="form-control" placeholder="Password" onChange = {handleChange}  value={input.password} />
          </label><br />
          <button variant="primary">Submit</button>
          <span variant="primary">Already Registered
          <span className="register">
            <Button onClick={() => navigate("/login")}variant="primary" size="sm">Login</Button>{' '}
          </span>
        </span>
        <Footer />
      </form>
    </div>
  )
}