
import "./Products.css";
import QuantityPicker from "./QuantityPicker";
import { useState, useContext } from "react";
import store from "../context/storeContext";


const Product = (props) => {
    const [val, serVal] = useState();
    const [quantity, setQuantity] = useState(1);
    let addProdToCart = useContext(store).addProdToCart;

    const handleQuantityChange = (val) => {
        console.log("The quantity changed!", val);
        setQuantity(val);
    };

    const handleAdd = () => {
        let prod = {...props.info, quantity: quantity};
        addProdToCart(prod);
    }

   
    return (
    <div className="product">
        <img src={"/images/" + props.info.image} alt="Product"></img>
        
        <h5>{props.info.title}</h5>

        <label className="Price:">$ {(props.info.price * 1).toFixed(2)}</label>
        <label className="Total:">$ {(props.info.price * quantity).toFixed(2)}</label>

        <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>

        <button onClick={handleAdd} className="btn btn-sm btn-info">Add to cart</button>
    </div>      
    );
}

export default Product;