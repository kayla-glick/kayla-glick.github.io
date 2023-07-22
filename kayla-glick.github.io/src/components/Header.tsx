import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { ReactComponent as Logo } from '../assets/img/logo.svg';

function Header() {
  return (
    <header className="fixed-top" id="site-header">
      <Navbar variant="dark">
        <Container fluid>
          <Navbar.Brand href="#greeting">
            <Logo width="48" height="48"/>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Item>
                <Button href="/Kayla Glick Resume.pdf" variant="outline-primary" className="ms-3">Resume</Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
