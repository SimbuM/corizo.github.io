import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, item) => {
      const subtotal = item.price * item.quantity;
      return isNaN(subtotal) ? total : total + subtotal;
    }, 0);
    setTotalPrice(newTotalPrice.toFixed(2));
  }, [cartItems]);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedQuantity = newQuantity <= 0 ? 1 : newQuantity;
    updateQuantity(itemId, updatedQuantity);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems, totalPrice } });
  };

  return (
    <div className="container mt-5">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            <div className="col-md-8">
              {cartItems.map((item) => (
                <div className="card mb-3" key={item.id}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Price: ₹{item.price.toFixed(2)}</p>
                        <div className="input-group mb-3">
                          <span className="input-group-text">Quantity</span>
                          <input
                            type="number"
                            className="form-control form-control-sm reduced-width"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                          />
                        </div>
                        <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total</h5>
                  <p className="card-text">Total Price: ₹{totalPrice}</p>
                  <button className="btn btn-success" onClick={handleCheckout}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
