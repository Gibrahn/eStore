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
      <h6>There are {products.length} in stock</h6>
    </div>

    
  )
};

export default Catalog;