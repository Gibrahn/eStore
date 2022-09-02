import DataService from "../services/dataService";
import "./CatalogKids.css";
import Product from "./Products";
import { useState, useEffect } from 'react';

const CatalogKids = () => {
  const [products, setProducts] = useState ([]);

  const loadCatalog = async () => {
    const service = new DataService();
    let prods = await service.getCatalog();
    setProducts(prods.filter(x=>x.category == "Kids"));
  };

  useEffect(() => {
    loadCatalog();
  }, []);

  return (
    <div className="catalog">
        <div className="name">
          <h1>Kid's Catalog</h1>
        </div>
        <div className="products">
          {products.map((prod) => (
            <Product key= {prod._id} info={prod}></Product>
        ))}
        </div>
    </div>
    
  )
};

export default CatalogKids;