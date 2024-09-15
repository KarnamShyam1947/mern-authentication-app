import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <Navbar expand="lg" className="custom-navbar sticky-top">
      <Container>
        <Navbar.Brand href="#home">Website-Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
            <Nav.Link as={NavLink} to={"/login"}>Login</Nav.Link>
            <Nav.Link as={NavLink} to={"/register"}>Register</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppHeader