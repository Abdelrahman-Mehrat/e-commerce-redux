import ProductCard from "../ProductCard/ProductCard";
import "./ProductsContainer.css";
import { useState } from "react";
const ProductsContainer = () => {
  
  return (
    <>
    <div className="row product-container px-0 mx-0">
      <ProductCard />
    </div>
    
    </>
  );
};
export default ProductsContainer;
