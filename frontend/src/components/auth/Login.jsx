import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

function Login() {
  return (
    <Container fluid style={{paddingTop:"150px"}}>
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone image"
          />
        </Col>

        <Col xs={12} md={6} className="d-flex flex-column align-items-center">
          <Form className="w-75">
            <Form.Group className="mb-4">
              <Form.Control type="email" placeholder="Enter email" size="lg" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Control type="password" placeholder="Password" size="lg" />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <Form.Check type="checkbox" label="Remember me" />
              <a href="#!">Forgot password?</a>
            </div>

            <Button className="w-100" size="lg" variant="primary">Sign in</Button>

            <Row className="align-items-center">
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