import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Product from "../pages/Product";

const AnimRoute = () => {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/product/:productId" element={<Product />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
};

export default AnimRoute;
