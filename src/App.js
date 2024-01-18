import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Layout/Header";
import Cart from "./Cart"; 
import { CartProvider } from "./CartContext"; 

function App() {
  return (
    <CartProvider>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Menu />} />
            <Route path="/checkout" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} /> 
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
