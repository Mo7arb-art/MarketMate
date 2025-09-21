import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

const Checkout = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderConfirmed(true);
  };

  if (orderConfirmed) {
    return (
      <div className="checkout-page success-screen">
        <h2>Thanks for your order! 🎉</h2>
        <p>
          We’ll contact you soon to confirm delivery.
          <br />
          And thank you for trying out my project — I hope you enjoyed the
          experience!
        </p>
        <button className="success-button" onClick={() => navigate("/")}>
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Confirm Your Order 🧾</h2>

      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          value={formData.address}
          onChange={handleChange}
        />

        <div className="checkout-summary">
          <h3>Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              {item.name} × {item.quantity} = ${item.price * item.quantity}
            </div>
          ))}
          <div className="checkout-total">Total: ${total.toFixed(2)}</div>
        </div>

        <div className="checkout-actions">
          <button type="button" onClick={() => navigate("/cart")}>
            Back
          </button>
          <button type="submit">Confirm Your Order</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
