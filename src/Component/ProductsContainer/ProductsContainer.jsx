import ProductCard from "../ProductCard/ProductCard";
import "./ProductsContainer.css";
import { useState } from "react";
import { getPaginateProducts } from "../../redux/fetchProductsSlice";
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from "react-redux";
const ProductsContainer = () => {
  // pagination
  const dispatch = useDispatch();
  const products = useSelector((state) => state.fetchProduct.products);
  const length = useSelector((state) => state.fetchProduct.currentPLength);  
  const activePaginate = useSelector((state) =>state.fetchProduct.paginateActiveBtn);
  // let currentProducts=  products 
  const filterProducts=(e)=>{
    dispatch(getPaginateProducts(e.target.innerText))
    document.querySelectorAll(".page-link").forEach((e)=>{
      e.classList.remove("active")
    })
    e.target.classList.add("active")
  }
  let active = activePaginate;
  let items = [];
  for (let number = 1; number <= (Math.ceil(length / 10)); number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={(e)=>{filterProducts(e); }}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <>
    <div className="row product-container px-0 mx-0">
      <ProductCard />
      <Pagination>{items}</Pagination>
    </div>
    
    </>
  );
};
export default ProductsContainer;
