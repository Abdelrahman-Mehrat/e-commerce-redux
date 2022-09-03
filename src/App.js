import "./App.css";
import MainNavbar from "./Component/MainNavbar/MainNavbar";
import Home from "./pages/Home/Home";
// react router
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {


  return (
    <div className="App">
      <>
      <BrowserRouter>
      <MainNavbar/>
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
    </Routes>
  </BrowserRouter>
      </>
    </div>
  );
}

export default App;
