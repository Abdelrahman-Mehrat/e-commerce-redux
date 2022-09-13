import "./App.css";
import MainNavbar from "./Component/MainNavbar/MainNavbar";
import HomeProduct from "./pages/HomeProduct/HomeProduct";
// react router
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetails from "./pages/productDesc/ProductDetails";
import ShoppingPage from "./pages/shoppingPage/ShoppingPage";
import Home from "./pages/Home/Home";
function App() {


  return (
    <div className="App">
      <>
      <BrowserRouter>
      <MainNavbar/>
    <Routes>
    <Route path="/" exact element={<Home/>} />
      <Route path="/homeproduct" exact element={<HomeProduct/>} />
      <Route path="/homeproduct/product/:id" element={<ProductDetails/> }/>
      <Route path="/shopping" element={<ShoppingPage/> }/>
    </Routes>
  </BrowserRouter>
      </>
    </div>
  );
}

export default App;
