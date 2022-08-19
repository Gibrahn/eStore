import { useEffect, useState } from "react";
import DataService from "../services/dataService";
import "./Catalog.css";
import Product from "./Products";

const Catalog = () => {
  const [products, setProducts] = useState ([]);

  const loadCatalog = async () => {
    const service = new DataService();
    let prods = await service.getCatalog();
    setProducts(prods);
  };

  useEffect(() => {
    loadCatalog();
  }, []);

  return (
    <div className="catalog">
        <div className="name">
          <h1>Catalog</h1>
        </div>
        <div className="products">
          {products.map((prod) => (
            <Product key= {prod._id} info={prod}></Product>
        ))}
        </div>
          
    </div>
    
  )
};

export default Catalog;