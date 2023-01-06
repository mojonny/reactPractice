import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

function BasicExample() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [emailError, setEmailError] = useState(" ");
  //const [passwordError, setPasswordError] = useState(" ");

  const handleSubmit = (event) => {
    event.preventDefault();
    var emailValid = false;
    if (email.length === 0) {
      setEmailError("Email is required!");
    } else if (email.length < 6) {
      setEmailError("Email should be a min of 6 chars!");
    } else if (email.indexOf(" ") >= 0) {
      setEmailError("Email cannot contain spaces!");
    } else {
      setEmailError("");
      emailValid = true;
    }
    if (emailValid) {
      alert("Email: " + email + "\nPassword: " + password);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      {emailError.length > 0 && <Alert variant="danger">{emailError}</Alert>}
      <Button variant="primary" type="submit">
        Submit
      </Button>
      Email entered: {email}
      <br />
      Password entered: {password}
      <br />
      Email error: {emailError}
    </Form>
  );
}

export default BasicExample;
