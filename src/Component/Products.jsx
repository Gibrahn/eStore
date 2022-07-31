import "./Products.css";
import QuantityPicker from "./QuantityPicker"

const Product = () => {
  return (
    <div className="product">
      <h1>Product</h1>

      <QuantityPicker></QuantityPicker>
      <button className="btn btn-sm btn-primary">Add to cart</button>
    </div>
  )
}

export default Product;