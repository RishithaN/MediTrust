import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Navbar } from "react-bootstrap";
import './login.css'




function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // handle login

      alert(password);

      fetch('http://localhost:3000/login', {
            method: 'POST',
            // redirect: 'manual',
            body: JSON.stringify({e : email , pwd : password}),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
         

      if(data.sending === "success" && data.role === 3){
        navigate('/user')
      }

      else if(data.sending === "success" && (data.role === 1)){
        navigate('/manufacturer')
      }

      else if(data.sending === "success" && data.role === 2){
        navigate('/retailer')
      }

      else {
        navigate('/home')
      }
          

        })



    };

  return (
    <div className="wrapper">
      {/* <StaticNavBar /> */}
      <div className="card">
        <Card.Body>
          <h1 className="text-center mb-4">Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="formgroup">
              <Form.Label className="label">Email: </Form.Label>
              <Form.Control type="email" className="input" required onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group> 
            <Form.Group id="password" className="formgroup">
              <Form.Label className="label">Password: </Form.Label>
              <Form.Control
                type="password"
                className="input"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button
              className="button"
              type="submit"
            >
              Login
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password ?</Link>
          </div>
          <div className="w-100 text-center mt-2 text-danger">
            Need an account ? <Link to="/signup">Sign Up</Link>
          </div>
        </Card.Body>
      </div>
      
    </div>
  );
  };
  
  export default Login;