import React, { useRef, useEffect, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import './login.css'
// import StaticNavBar from "./StaticNavBar";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle signup logic
  };

  return (
    <div className="wrapper2">
      {/* <StaticNavBar /> */}
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name" className="formgroup">
              <Form.Label>Name: </Form.Label>
              <Form.Control type="text" className="input" required></Form.Control>
            </Form.Group>
            <Form.Group className="formgroup">
              <Form.Label>Address: </Form.Label>
              <Form.Control
                type="text"
                className="input"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="formgroup">
              <Form.Label>Role: </Form.Label>
              <Form.Control onChange={(e) => setRole(e.target.value)} as="select" value={role} className="input">
                <option value="">--Select--</option>
                <option value="Manufacturer">Manufacturer</option>
                <option value="Retailer">Retailer</option>
                <option value="Customer">Customer</option>
              </Form.Control>
            </Form.Group >
            <Form.Group id="email" className="formgroup">
              <Form.Label >Email: </Form.Label>
              <Form.Control type="email" className="input" required></Form.Control>
            </Form.Group>
            <Form.Group id="password" className="formgroup">
              <Form.Label>Password: </Form.Label>
              <Form.Control
                type="password"
                className="input"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm" className="formgroup">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                className="input"
                required
              ></Form.Control>
            </Form.Group>
            <Button
              className="button"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer>
          <div className="w-100 text-center mt-2 text-danger">
            Already have an account ? <Link to="/login">Log In</Link>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}
  
export default Signup