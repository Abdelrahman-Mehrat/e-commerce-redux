import { useEffect, useState } from "react";
import HomeSidebar from "../../Component/HomeSidebar/HomeSidebar";
import ProductsContainer from "../../Component/ProductsContainer/ProductsContainer";
import PopupModal from "../popupModal/PopupModal";
import "./Home.css";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/fetchProductsSlice";
const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => dispatch(getAllProducts({ data: data })));
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
export default Home;
