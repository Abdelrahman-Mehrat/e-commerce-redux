import { useEffect, useState } from "react";
// import Components
import HomeSidebar from "../../Component/HomeSidebar/HomeSidebar";
import ProductsContainer from "../../Component/ProductsContainer/ProductsContainer";
import PopupModal from "../popupModal/PopupModal";
import "./HomeProduct.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getPaginateProducts } from "../../redux/fetchProductsSlice";
// pagination
import Pagination from 'react-bootstrap/Pagination';
const HomeProduct = () => {
  // Redux
  const dispatch = useDispatch();
  const products = useSelector((state) => state.fetchProduct.products);
  useEffect(() => {
    if (products.length > 0) return;
    fetch("http://localhost:5000/products")
    .then((response) => response.json())
    .then((data) => {
      dispatch(getAllProducts({ data: data }));
    });
  }, []);
 
  // pagination
  const filterProducts=(e)=>{
    dispatch(getPaginateProducts(e.target.innerText))
    console.log(e.target.innerText)
  }
  let active = 1;
  let items = [];
  for (let number = 1; number <= (Math.ceil(products.length / 10)); number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={(e)=>{filterProducts(e)}}>
        {number}
      </Pagination.Item>,
    );
  }
 
  return (
    <section>
      <div className="home-container mx-auto ">
        <HomeSidebar />
        <ProductsContainer />
      </div>
      <Pagination>{items}</Pagination>
      <PopupModal />
    </section>
  );
};
export default HomeProduct;
