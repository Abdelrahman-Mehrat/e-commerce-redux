import "./HomeSidebar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getfilteredData } from "../../redux/fetchProductsSlice";

const HomeSidebar = () => {
  const products = useSelector((state) => state.fetchProduct.products);
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    dispatch(getfilteredData({ e, products }));
  };
  return (
    <section className="main-sidebar">
      <div className="main-sidebar_fixed">

      <h3>Choose Category</h3>
      <Dropdown onSelect={handleSelect} className="category-dropdown">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Category
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item eventKey="shirts">shirts</Dropdown.Item>
          <Dropdown.Item eventKey="pants">pants</Dropdown.Item>
          <Dropdown.Item eventKey="watch">watches</Dropdown.Item>
          <Dropdown.Item eventKey="shoes">shoes</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="">All Products</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
      </div>
    </section>
  );
};
export default HomeSidebar;
