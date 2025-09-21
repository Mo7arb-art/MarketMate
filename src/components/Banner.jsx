import React from "react";
import "../styles/banner.css";

const Banner = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, // scrolls down one full viewport height
      behavior: "smooth",
    });
  };

  return (
    <div className="banner">
      <img
        src="https://i.postimg.cc/Hs7W3xRM/shopping-cart-hypermarket-supermarket-wagon-shopping-cart-47622107723d20259a8c8a9fefcd5911.png"
        alt="Grocery bag"
        className="banner-image"
      />
      <div className="banner-text">
        <h1>
          Get your fresh grocery
          <br />
          easily with <span style={{ color: "#FCB53B" }}>MarketMate</span>
        </h1>
        <p>
          Every fruit is picked with{" "}
          <span style={{ color: "#B45253" }}>love</span>. <br /> and{" "}
          <span style={{ color: "#B45253" }}>discounts </span>
          are <span style={{ color: "#B45253" }}>blooming daily</span>.
        </p>
        <button className="scroll-button" onClick={handleScroll}>
          Start Shopping ↓
        </button>
      </div>
    </div>
  );
};

export default Banner;
