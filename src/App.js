import "./App.css";
import MainNavbar from "./Component/MainNavbar/MainNavbar";
import Home from "./pages/Home/Home";
// react router
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetails from "./pages/productDesc/ProductDetails";
function App() {


  return (
    <div className="App">
      <>
      <BrowserRouter>
      <MainNavbar/>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/product/:id" element={<ProductDetails/> }/>
    </Routes>
  </BrowserRouter>
      </>
    </div>
  );
}

export default App;
