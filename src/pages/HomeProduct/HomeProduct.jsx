import { useEffect, useState } from "react";
// import Components
import HomeSidebar from "../../Component/HomeSidebar/HomeSidebar";
import ProductsContainer from "../../Component/ProductsContainer/ProductsContainer";
import PopupModal from "../popupModal/PopupModal";
import "./HomeProduct.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts} from "../../redux/fetchProductsSlice";
// pagination
const HomeProduct = () => {
  // Redux
  const dispatch = useDispatch();
  const products = useSelector((state) => state.fetchProduct.products);
 
  useEffect(() => {
    if (products.length > 0) return;
    fetch("https://data-ecommerce-production.up.railway.app/products")
    .then((response) => response.json())
    .then((data) => {
      dispatch(getAllProducts({ data: data }));
    });
  }, []);
 
  
 
 
  return (
    <section>
      <div className="home-container mx-auto ">
        <HomeSidebar />
        <ProductsContainer />
      </div>
      
      <PopupModal />
    </section>
  );
};
export default HomeProduct;