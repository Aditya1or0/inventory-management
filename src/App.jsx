// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image:
        "https://img.freepik.com/free-photo/still-life-with-classic-shirts-hanger_23-2150828581.jpg?t=st=1739451688~exp=1739455288~hmac=ec4c9e199c677ff8e74e664bc4aa096cd7f5fae79a9ef6f5363486171fc24e4f&w=1800",
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      image:
        "https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448742.jpg?t=st=1739451761~exp=1739455361~hmac=5701094a40de96991174228ff49ab8be436acd4a1dbaabc01d57866dbdfdd3b1&w=1800",
    },
    {
      id: 3,
      name: "Product 3",
      price: 19.99,
      image:
        "https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448793.jpg?t=st=1739451820~exp=1739455420~hmac=c531ffcf2983777f40a81d0f8995338adf756a33b9a8a02cca29c8b75fab5e12&w=1800",
    },
    {
      id: 4,
      name: "Product 4",
      price: 39.99,
      image:
        "https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448793.jpg?t=st=1739451820~exp=1739455420~hmac=c531ffcf2983777f40a81d0f8995338adf756a33b9a8a02cca29c8b75fab5e12&w=1800",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cart={cart} />
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={<ProductList products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
