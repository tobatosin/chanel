import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoCartOutline } from "react-icons/io5";
import Logo from "../../src/Images/Logo.png"

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-white container-fluid">
      <Container>
        <Navbar.Brand href="#" className='fs-3 fw-bold text-warning'> <img src={Logo} alt=""  />Chanel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 gap-3 "
            style={{ maxHeight: '60px'}}
            navbarScroll
          >
          
            <Nav.Link href="#action1" className='text-dark hove'>Home</Nav.Link>
            <Nav.Link href="#action2" className='text-dark hove'>product</Nav.Link>
            <Nav.Link href="#action2" className='text-dark hove'>About Us</Nav.Link>
            <Nav.Link href="#action2" className='text-dark hove'>Contact Us</Nav.Link>
          </Nav>
          <div className="d-flex ms-auto gap-2">
          <a href='#'><IoCartOutline className='fs-1 text-dark'/> </a>
            <Button variant="outline-warning" className='px-4 '>Sign In</Button>
          </div>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
