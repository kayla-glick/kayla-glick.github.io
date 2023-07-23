import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { ReactComponent as Logo } from '../assets/img/logo.svg';

function Header() {
  return (
    <header className="fixed-top" id="site-header">
      <Navbar variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#greeting">
            <Logo width="2.5rem" height="2.5rem"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="site-navbar-collapse"/>
          <Navbar.Collapse id="site-navbar-collapse">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Item>
                <Button href="/Kayla Glick Resume.pdf" target="_blank" variant="outline-primary" className="ms-3">Resume</Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
