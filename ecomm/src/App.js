import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Home from './pages/Login'
import Products from "./Component/Products";
import React, { useContext } from "react";
import My from "./Component/Myshop";
import Navbar from "./Component/Navbar";
import ProductDetailspage from "./Component/ProductDetailspage";
import ProductDetailsPage from "./Component/productDetails";

// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Products />} /> */}
        <Route path="/my" element={<My />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/product/:id" component={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
