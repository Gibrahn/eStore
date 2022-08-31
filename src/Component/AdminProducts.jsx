import "./AdminProducts.css";
import React from 'react';
import { useState, useEffect } from 'react';
import DataService from '../services/dataService';

const AdminProducts = () => {

    const [products, setProducts] = useState ([]);
    const [modifyProduct, setModifyProduct] = useState({});

    const loadCatalog = async () => {
      const service = new DataService();
      let prods = await service.getCatalog();
      setProducts(prods);
    };
  
    useEffect(() => {
      loadCatalog();
    }, []);

    const handleDeleteProduct = async (_id) => {
      const service = new DataService();
      let response = await service.delProduct(_id);
      loadCatalog()
    };
    
    const handleEditProduct = async (_id) => {
      let modify = products.filter(x=>x._id == _id)[0]
      setModifyProduct(modify)
    };
    
    const handleTextChange = (e) => {
      let copy = {...modifyProduct};
      copy[e.target.name] = e.target.value;
      setModifyProduct(copy);
    };

    const handleEditSubmit = async () => {
      const service = new DataService();
      let response = await service.editProduct(modifyProduct);
      loadCatalog()
    };


  return (
<div className="product-management">
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th scope="col">Sport</th>
          <th scope="col">Category</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th>Action</th>
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
              <td>
                <button onClick={() => handleEditProduct(product._id)} className="btn btn-success dual-btn">Edit</button>
                <button onClick={() => handleDeleteProduct(product._id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
            ))
          }

      </tbody>
    </table>

    <div className="product-edit">
    <section>
      <h4>Product Edit</h4>
      <div className="my-control">
      <label for="sport">Sport:</label>
          <select name="sport" id="sport" onChange={handleTextChange} value={modifyProduct.sport}>
          <option value="">Select Sport</option>
          <option value="NBA">NBA</option>
          <option value="MLB">MLB</option>
          <option value="NHL">NHL</option>
          <option value="NFL">NFL</option>
          </select>
      </div>
      <div className="my-control">
        <label for="category">Category:</label>
            <select name="category" id="category" onChange={handleTextChange} value={modifyProduct.category}>
            <option value="">Choose Category</option>
            <option value="Mens">Mens</option>
            <option value="Womens">Womens</option>
            <option value="Kids">Kids</option>
            </select>
      </div>
      <div className="my-control">
      <label>Title: </label>
          <input name="title" onChange={handleTextChange} value={modifyProduct.title} type ="text"></input>
      </div>
      <div className="my-control">
      <label>Price: </label>
          <input name="price" onChange={handleTextChange} value={modifyProduct.price} type ="text"></input>
      </div>
      <div className="my-control">
      <label>Image: </label>
          <input name="image" onChange={handleTextChange} value={modifyProduct.image} type ="text"></input>
      </div>
      <div className="my-control text-center">
        <button onClick={() => handleEditSubmit(modifyProduct._id)} className="btn btn-primary">Update</button>
      </div>
    </section>
  </div>      
  </div>
    
  );

};

export default AdminProducts;