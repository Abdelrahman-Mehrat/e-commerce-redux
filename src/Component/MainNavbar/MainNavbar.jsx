import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FiTruck } from "react-icons/fi";
import "./MainNavbar.css";
import { useSelector } from "react-redux";
const MainNavbar = () => {
  const name = useSelector((state) => state.products.name);
  const productsQuantity = useSelector(
    (state) => state.shoppingCart.shoppingQuantity
  );
  return (
    <>
      <Navbar bg="dark " expand="lg" className="main_navbar navbar-dark">
        <Container>
          <Navbar.Brand className="navLogo">
            {name == "User" ? name : `Welcome -- ${name}`}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end "
          >
            <Nav className="align-items-center">
              <Link className="nav_links secondary" to="/">
                Home
              </Link>
              <Link className="nav_links secondary" to="/homeproduct">
              home product
              </Link>
              
              <Link className="nav_links" to="/shopping">
                Cart
              </Link>
              <span className="Nav_order-icon">
                {" "}
                <span className="nav_quantity">{productsQuantity}</span>{" "}
                <FiTruck />{" "}
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MainNavbar;
