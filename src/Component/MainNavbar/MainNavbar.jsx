import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./MainNavbar.css"
import { useSelector } from 'react-redux';
const MainNavbar = ()=>{
  const name = useSelector((state) => state.products.name)
    return(
            <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">{name}</Navbar.Brand>
          <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
        </Container>
      </Navbar>
    
    </>
    )
}
export default MainNavbar;