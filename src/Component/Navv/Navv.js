import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Nav.css'
function Navv() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home"><span className='sfood'><i className="bi bi-bank"></i>siva food</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='nav1'>
        <Nav >
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/About' >Orders</NavLink>
          <NavLink to='/Food'>Manu</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
} 


export default Navv;
        
