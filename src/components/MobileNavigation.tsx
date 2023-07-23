import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas';

function MobileNavigation() {
  const [show, setShow] = useState(false);
  const togglerRef = useRef<HTMLButtonElement>(null);

  const toggleOpen = () => {
    togglerRef.current?.classList.toggle('collapsed');
    setShow(!show);
  }
  const handleClose = () => {
    togglerRef.current?.classList.add('collapsed');
    setShow(false)
  }

  return (
    <>
      <Navbar.Toggle
        className="d-flex d-lg-none"
        aria-controls="site-navbar-collapse"
        onClick={toggleOpen}
        ref={togglerRef}
      >
        <span className="toggler-bar"></span>
        <span className="toggler-bar"></span>
        <span className="toggler-bar"></span>
      </Navbar.Toggle>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Body>
          <Navbar variant="dark">
            <Nav>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Item>
                <Button href="/Kayla Glick Resume.pdf" target="_blank" variant="outline-primary" id="resume">Resume</Button>
              </Nav.Item>
            </Nav>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default MobileNavigation;
