import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from "../assets/Logo.png"

const CompNavbar = () => {
  return (
    <>
      <Navbar className='bg-primary' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="60"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default CompNavbar