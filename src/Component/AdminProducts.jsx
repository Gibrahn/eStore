import "./AdminProducts.css";
import React from 'react';
import { useState, useEffect } from 'react';
import DataService from '../services/dataService';

const AdminProducts = () => {

    const [products, setProducts] = useState ([]);

    const loadCatalog = async () => {
      const service = new DataService();
      let prods = await service.getCatalog();
      setProducts(prods);
    };
  
    useEffect(() => {
      loadCatalog();
    }, []);

    // const handleDeleteProduct = async () => {
    //   const response = await deleteProduct(rowData._id)
    //   getCatalog();
    // }
    

  return (
<div className="product-management">
    <h1>Product Management</h1>
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th scope="col">Sport</th>
          <th scope="col">Category</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
          {
            products.map(product => (
            <tr className="table-light" key={product._id}>
              <td>{product.sport}</td>
              <td>{product.category}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
            </tr>
            ))
          }

      </tbody>
    </table>
  </div>
    
  );

};

export default AdminProducts;