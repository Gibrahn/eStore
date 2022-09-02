import React from "react";
import "./Cart.css";
import store from "../context/storeContext";
import ProductInCart from "./productInCart";
import { useContext } from "react";


const Cart = () => {
  const order = useContext(store).order;
  let createOrder = useContext(store).createOrder;

  const handleCreateOrder = () => {
    
    createOrder();
}

  const cart = useContext(store).cart;
  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i]
      total += prod.quantity * prod.price
    }
    
    return "$ " + total.toFixed(2)
  }

  return (
    <div class="cart">
      <h1>Your cart</h1>
      <h5>Currently you have {cart.length} products in the cart</h5>
        
      <div className="cart-content">
            <div className="products">
              { cart.map((prod) => (
              <ProductInCart  key={prod._id} info={prod}></ProductInCart>
              ))}
            </div>
        <div className="side-panel">
          <h5>Do you have a coupon?</h5>

          <button className="btn btn-block btn-primary">Add Coupon</button>
          <form input type="text">Input Code</form>
          <h6>Are you ready to pay?</h6>
          <h5>{getTotal()}</h5>
          <hr />
          <button className="btn btn-block btn-primary">Proceed to Payment</button>

          <button onClick={handleCreateOrder} className="btn btn-block btn-primary"></button>
        </div>
      </div>
    </div>
  );
};

export default Cart;