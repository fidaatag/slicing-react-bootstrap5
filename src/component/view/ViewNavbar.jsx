import {Nav, Navbar, Container} from 'react-bootstrap';  

function ViewNavbar() {
  return (
    <>
      <Navbar className='bg-body-secondary ps-3 pe-3 position-absolute w-100' expand="xxxl">  
        <Container>  
          <Navbar.Brand href="#" className='bg-dark-subtle p-1'><strong>Logo</strong></Navbar.Brand>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
          <Navbar.Collapse id="basic-navbar-nav">  
            <Nav className="ms-auto">  
              <Nav.Link href="#">Home</Nav.Link>  
              <Nav.Link href="#">Link</Nav.Link>  
            </Nav>  
          </Navbar.Collapse>  
        </Container>  
      </Navbar>
    </>
  );
}

export default ViewNavbar;