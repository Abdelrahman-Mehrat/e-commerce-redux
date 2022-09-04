import { useEffect, useState } from "react";
import HomeSidebar from "../../Component/HomeSidebar/HomeSidebar";
import ProductsContainer from "../../Component/ProductsContainer/ProductsContainer";
import PopupModal from "../popupModal/PopupModal"
import "./Home.css"
const Home = ()=>{
    const [data, setData] = useState();
    useEffect(() => {
      fetch("http://localhost:5000/products")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
    return(
        <section>
            <div className="home-container mx-auto container">
                <HomeSidebar/>
                <ProductsContainer data={data}/>
            </div>
            <PopupModal/>
        </section>
    )
}
export default Home;