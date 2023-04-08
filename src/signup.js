import React, { useRef, useEffect, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import './login.css'
import { useNavigate } from "react-router-dom";
// import StaticNavBar from "./StaticNavBar";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  //const [confirmpassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle signup logic

        fetch('http://localhost:3000/signup', {
          method: 'POST',
          // redirect: 'manual',
          body: JSON.stringify({email : email , password : password , mobile : mobile , role : role , name : name}),
          headers: {
            'Content-Type': 'application/json'
          }
      })
      .then((res) => res.json())
      .then((data) => {


        alert(data.sending)
        alert(data.role)

      if(data.sending === "success" && data.role === 3){
        navigate('/user')
      }

      else if(data.sending === "success" && data.role === 1){
        navigate('/manufacturer')
      }

      else if(data.sending === "success" && data.role === 2){
        navigate('/retailer')
      }

      else {
        navigate('/home')
      }

      });

}

  return (
    <div className="wrapper2">
      {/* <StaticNavBar /> */}
      <Card className="signup">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name" className="formgroup">
              <Form.Label className="label">Name: </Form.Label>
              <Form.Control type="text" className="input" required onChange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className="formgroup">
              <Form.Label className="label">Mobile Number: </Form.Label>
              <Form.Control
                type="number"
                className="input"
                required
                onChange={(e) => setMobile(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="formgroup">
              <Form.Label className="label">Role: </Form.Label>
              <Form.Control onChange={(e) => setRole(e.target.value)} as="select" value={role} className="input">
                <option value="">--Select--</option>
                <option value="1">Manufacturer</option>
                <option value="2">Retailer</option>
                <option value="3">Customer</option>
              </Form.Control>
            </Form.Group >
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
            <Form.Group id="password-confirm" className="formgroup">
              <Form.Label className="label">Confirm Password</Form.Label>
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