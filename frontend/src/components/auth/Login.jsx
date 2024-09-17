import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

function Login() {

  const initialValues = {
    email: "",
    password: ""
  }

  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleFormSubmission = (e) => {
    e.preventDefault();

    const errors = validateInput();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      alert("form has errors");
      return;
    }

    alert("Form submitted successfully");
    setFormErrors({});
    setFormValues(initialValues);
  }

  const validateInput = () => {
    let errors = {};

    if (formValues.email.trim() === "") {
      errors.email = "Email is required"
    }

    if (formValues.password.trim() === "") {
      errors.password = "Password is required"
    }

    return errors;
  }

  return (
    <Container fluid style={{ paddingTop: "150px" }}>
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone image"
          />
        </Col>

        <Col xs={12} md={6} className="d-flex flex-column align-items-center">
          <Form onSubmit={handleFormSubmission} className="w-75">
            <Form.Group className="mb-4">
              <Form.Control
                size="lg"
                name='email'
                type="email"
                value={formValues.email}
                placeholder="Enter email"
                isInvalid={formErrors.email}
                onChange={handleInputChange}
              />

              <Form.Control.Feedback type='invalid'>
                {formErrors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Control
                size="lg"
                type="password"
                name='password'
                value={formValues.password}
                placeholder="Enter Password"
                onChange={handleInputChange}
                isInvalid={formErrors.password}
              />

              <Form.Control.Feedback type='invalid'>
                {formErrors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <Form.Check type="checkbox" label="Remember me" />
              <a href="#!">Forgot password?</a>
            </div>

            <Button className="w-100" size="lg" type='submit' variant="primary">Sign in</Button>

            <Row className="my-3 align-items-center">
              <Col xs={5}>
                <hr />
              </Col>
              <Col xs={2} className="text-center">
                <span>OR</span>
              </Col>
              <Col xs={5}>
                <hr />
              </Col>
            </Row>

            <Button
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: '#3b5998', color: 'white' }}
            >
              <FaFacebookF className="mx-2" />
              Continue with Facebook
            </Button>

            <Button
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: '#55acee', color: 'white' }}
            >
              <FaTwitter className="mx-2" />
              Continue with Twitter
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login