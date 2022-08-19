import "./productInCart.css";
import QuantityPicker from "./QuantityPicker";
import { useState, useContext } from "react";
import store from "../context/storeContext";

const ProductInCart = (props) => {
  const [quantity, setQuantity] = useState(1);
  let removeProdFromCart = useContext(store).removeProdFromCart;

  const getTotal = () =>{
    return "$ " + (props.info.quantity * props.info.price).toFixed(2);
  }
  const handleDelete = () => {
    let prod = {...props.info, quantity: quantity};
    removeProdFromCart(prod);
  }

  return (
  <div className="prod-cart">
    <img src={"/images/" + props.info.image} alt="Product" />

    <h6>{props.info.title}</h6>

    <label>{props.info.price.toFixed(2)}</label>
    <label>{props.info.quantity}</label>
    <label>{getTotal()}</label>

    <button onClick={handleDelete} className="btn btn-sm btn-danger">Del</button>
  </div>
  );
};

export default ProductInCart;