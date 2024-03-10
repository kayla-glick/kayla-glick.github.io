import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { ReactComponent as Logo } from '../assets/img/logo.svg';

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [])

  const nav = <Nav>
    <Nav.Link href="#about">About</Nav.Link>
    <Nav.Link href="#experience">Experience</Nav.Link>
    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
    <Nav.Link href="#contact">Contact</Nav.Link>
    <Nav.Item>
      <Button href="/Kayla Glick Resume.pdf" target="_blank" variant="outline-primary" id="resume">Resume</Button>
    </Nav.Item>
  </Nav>

  return (
    <header className="fixed-top" id="site-header">
      <Navbar variant="dark" expand="lg">
        <Container fluid className="p-0">
          <Navbar.Brand href="#greeting">
            <Logo width="2.5rem" height="2.5rem"/>
          </Navbar.Brand>
          {width >= breakpoint && nav}
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
