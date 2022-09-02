import DataService from "../services/dataService";
import "./CatalogMen.css";
import Product from "./Products";
import { useState, useEffect } from 'react';

const CatalogMen = () => {
  const [products, setProducts] = useState ([]);

  const loadCatalog = async () => {
    const service = new DataService();
    let prods = await service.getCatalog();
    setProducts(prods.filter(x=>x.category == "Mens"));
  };

  useEffect(() => {
    loadCatalog();
  }, []);

  return (
    <div className="catalog">
        <div className="name">
          <h1>Men's Catalog</h1>
        </div>
        <div className="products">
          {products.map((prod) => (
            <Product key= {prod._id} info={prod}></Product>
        ))}
        </div>
    </div>
    
  )
};

export default CatalogMen;