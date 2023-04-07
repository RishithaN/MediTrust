import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { Navbar } from "react-bootstrap";
import './login.css'


// const StaticNavBar = () => {
//   return (
//     <>
//       <Navbar
//         sticky="top"
//         expand="lg"
//         style={{ backgroundColor: "rgb(93, 7, 173)" }}
//       >
//         <Navbar.Brand>
//           <Link to="/" className="mr-lg-4" style={{ color: "black" }}>
//             MediTrust
//           </Link>
//         </Navbar.Brand>
//       </Navbar>
//     </>
//   );
// }

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // handle login
    };

  return (
    <div className="wrapper">
      {/* <StaticNavBar /> */}
      <div className="card">
        <Card.Body>
          <h1 className="text-center mb-4">Login</h1>
          <Form onSubmit={"handleSubmit"}>
            <Form.Group id="email" className="formgroup">
              <Form.Label>Email: </Form.Label>
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
        </Card.Body>
      </div>
      <div className="w-100 text-center mt-2 text-danger">
        Need an account ? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
  };
  
  export default Login;