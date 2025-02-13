// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  return (
    <nav className="bg-gradient-to-r from-violet-400 via-sky-600 to-sky-700 p-4 text-white">
      <div className="flex justify-between items-center flex-wrap">
        <Link to="/" className="text-xl flex items-center mb-2 md:mb-0">
          <img src="./logo.png" alt="logo" className="w-[23px] mr-2" />
          Inventory System
        </Link>
        <div className="flex items-center w-full md:w-auto">
          <span className="mr-4">
            Cart: <span className="text-sky-300">{cart.length}</span> items
          </span>
          <Link to="/cart">
            <button className="bg-sky-400 p-2 rounded text-gray-700">
              Go to Cart
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
