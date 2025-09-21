import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

const Cart = ({ cartItems, increaseQty, decreaseQty, removeItem }) => {
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const isEmpty = cartItems.length === 0;

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart 🛒</h2>

      {isEmpty ? (
        <div className="empty-cart">
          <p>You can’t check out empty-handed! 🛍️</p>
          <button className="back" onClick={() => navigate("/")}>
            Back to Shop
          </button>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="price">
                    ${item.price.toFixed(2)} × {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </div>
                  <div className="cart-controls">
                    <button onClick={() => increaseQty(item)}>+</button>
                    <button onClick={() => decreaseQty(item)}>-</button>
                    <button className="delete" onClick={() => removeItem(item)}>
                      Delete
                    </button>
                  </div>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-total">Total: ${total.toFixed(2)}</div>
            <div className="cart-actions">
              <button className="back" onClick={() => navigate("/")}>
                Back to Shop
              </button>
              <button onClick={() => navigate("/checkout")}>Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
