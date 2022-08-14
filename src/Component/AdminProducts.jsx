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
      console.log("printing", products);
    };
  
    useEffect(() => {
      loadCatalog();
    }, []);
    

  return (
   <div className="product-management">
    <h1>Product Management</h1>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Sport</th>
      <th scope="col">Category</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
   </div>
    
  );

};

export default AdminProducts;