import React from 'react';
import "./Products.css";

const QuantityPicker = (props) => {
    let [quantity, setQuantity] = React.useState(1); // state variable

    const handleIncrease = () => {
        let nextQuantity = quantity + 1;
        setQuantity(quantity + 1);
        props.onChange(nextQuantity);
    }
    const handleDecrease = () => {
        let nextQuantity = quantity -1;
        if (nextQuantity > 0 ){
            setQuantity(quantity - 1);
            props.onChange(nextQuantity);
        }
    }
    return (
        <div className="quantity-picker">
            <button onClick= {handleIncrease} className="btn btn-sm btn-dark">+</button>

            <label>{quantity}</label>

            <button onClick= {handleDecrease} className="btn btn-sm btn-dark">-</button>

        </div>
    );
}

export default QuantityPicker;