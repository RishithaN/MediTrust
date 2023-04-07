import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { Navbar } from "react-bootstrap";


const StaticNavBar = () => {
  return (
    <>
      <Navbar
        sticky="top"
        expand="lg"
        style={{ backgroundColor: "rgb(93, 7, 173)" }}
      >
        <Navbar.Brand>
          <Link to="/" className="mr-lg-4" style={{ color: "black" }}>
            MediTrust
          </Link>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // handle login
    };
    
  return (
    <>
      <StaticNavBar />
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={"handleSubmit"}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required></Form.Control>
            </Form.Group> 
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
              ></Form.Control>
            </Form.Group>
            <Button
              className="w-100"
              type="submit"
              style={{
                width: "15rem",
                maxWidth: "15rem",
                backgroundColor: "blueviolet",
                color: "white",
              }}
            >
              Login
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password ?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 text-danger">
        Need an account ? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
  };
  
  export default Login;