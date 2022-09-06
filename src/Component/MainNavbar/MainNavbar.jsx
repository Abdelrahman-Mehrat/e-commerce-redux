import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./MainNavbar.css"
import { useSelector } from 'react-redux';
const MainNavbar = ()=>{
  const name = useSelector((state) => state.products.name)
    return(
            <>
       <Navbar bg="dark " expand="lg" className='main_navbar'>
      <Container>
        <Navbar.Brand >{name =="User"? name: `Welcome -- ${name}` }</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="">
            <Link className='nav_links secondary' to="/">Home</Link>
            <Link className='nav_links' to="/shopping">Cart</Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
    )
}
export default MainNavbar;