import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import "../styles/home.css";

const Home = ({ cartItems, setCartItems, handleAddToCart }) => {
  const [products, setProducts] = useState(productsData);
  const navigate = useNavigate(); // ✅ use React Router navigation

  const handleSearch = (query) => {
    const filtered = productsData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filtered);
  };

  const handleFilterCategory = (category) => {
    if (category === "All") {
      setProducts(productsData);
    } else {
      const filtered = productsData.filter((item) =>
        item.description.toLowerCase().includes(category.toLowerCase())
      );
      setProducts(filtered);
    }
  };

  const handleSort = (order) => {
    const sorted = [...products].sort((a, b) =>
      order === "low" ? a.price - b.price : b.price - a.price
    );
    setProducts(sorted);
  };

  return (
    <>
      <Navbar
        onSearch={handleSearch}
        onFilterCategory={handleFilterCategory}
        onSort={handleSort}
        cartItems={cartItems}
        goToCart={() => navigate("/cart")} // ✅ replace old prop with router navigation
      />
      <Banner />
      <div className="home-container">
        <div className="product-grid">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onAddToCart={() => handleAddToCart(item)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
