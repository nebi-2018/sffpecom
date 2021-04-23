import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
//import { useAuth } from "../hooks/AuthContext";
import { Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const history = useHistory();

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign In</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Sign In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgetpassword">Forgot Password?</Link>
            </div>
          </Card.Body>
        </Card>
        {/* <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div> */}
      </div>
    </Container>
  );
};

export default Login;