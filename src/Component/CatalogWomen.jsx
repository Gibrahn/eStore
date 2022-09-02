import DataService from "../services/dataService";
import "./CatalogWomen.css";
import Product from "./Products";
import { useState, useEffect } from 'react';

const CatalogWomen = () => {
  const [products, setProducts] = useState ([]);

  const loadCatalog = async () => {
    const service = new DataService();
    let prods = await service.getCatalog();
    setProducts(prods.filter(x=>x.category == "Womens"));
  };

  useEffect(() => {
    loadCatalog();
  }, []);

  return (
    <div className="catalog">
        <div className="name">
          <h1>Women's Catalog</h1>
        </div>
        <div className="products">
          {products.map((prod) => (
            <Product key= {prod._id} info={prod}></Product>
        ))}
        </div>
    </div>
    
  )
};

export default CatalogWomen;