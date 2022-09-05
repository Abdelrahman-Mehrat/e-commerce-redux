import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./MainNavbar.css"
import { useSelector } from 'react-redux';
const MainNavbar = ()=>{
  const name = useSelector((state) => state.products.name)
    return(
            <>
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand >{name =="User"? name: `Welcome -- ${name}` }</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="">
            <Nav.Link to="/home">Home</Nav.Link>
            <Nav.Link to="/link">Link</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
    )
}
export default MainNavbar;