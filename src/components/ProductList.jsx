// src/components/ProductList.js
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductList = ({ products, addToCart }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => navigate("/cart")}
          className="border p-4 rounded-lg shadow-lg"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-lg font-bold mt-2">{product.name}</h3>
          <p className="text-gray-500">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-sky-500 text-white p-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
