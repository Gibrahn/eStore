import React from 'react'
import "./Admin.css";
import { useState, useEffect } from 'react';
import DataService from '../services/dataService';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({})
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successVisible, setSuccessVisible] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState ([]);
    
    useEffect(() => {
        loadCoupons();
        loadProducts();
    }, []);

    const handleTextChange = (e) => {
        let copy = {...product};
        copy[e.target.name] = e.target.value;

        setProduct(copy);
    };

    const handleCoupon = (e) => {
        let copy = {...coupon}
        copy[e.target.name] = e.target.value;

        setCoupon(copy)
    };

    const showError = (text) => {
        setErrorMessage(text);
        setErrorVisible(true);
    };

    const showSuccess = (text) => {
        setSuccessMessage(text);
        setSuccessVisible(true);
    };

    const saveProduct = async () => {
        let savedProduct = {...product};
        savedProduct.price = parseFloat(savedProduct.price)

        if(savedProduct.title.length < 5){
            showError ("Error, Title should have at least 5 characters.")
            return;
        };

        if(savedProduct.price || savedProduct.price < 1){
            showError("Price must be greater than $1")
            return;
        };

        if(savedProduct.category.length < 1){
            showError("Please select a Category")
            return;
        };

        if(savedProduct.image.length < 1){
            showError("Image can not be empty")
            return;
        };
        setErrorVisible(false)
        
        let service = new DataService();
        let response = await service.saveProduct(savedProduct);
        if(response = true){
            showSuccess("Product added to Catalog")
        }
        

        let copy = [...allProducts];
        copy.push(response);
        setAllProducts(copy);
  
    };

    const saveCoupon = async () => {
        let savedCoupon = {...coupon};
        savedCoupon.discount = parseFloat(savedCoupon.discount)

        //send coupon to Server

        //validation
        //discount cant be greater than 35%
        if(savedCoupon.discount || savedCoupon.discount > 35) {
            showError("Error, discount can not be more than 35%")
            return;
        }
        //code should have at least 5 chars
        if(savedCoupon.couponCode || savedCoupon.couponCode.length < 3) {
            showError("Coupon code must contain 3 characters.")
            return;
        }
        setErrorVisible (false)

        let service = new DataService();
        let response = await service.saveCoupon(savedCoupon);
        if(response = true){
            showSuccess("Coupon Added")
        }
       

        let copy = [...allCoupons];
        copy.push(response);
        setAllCoupons(copy);
        
       
    };

    const loadCoupons = async () => {
        let service = new DataService();
        let coupons = await service.getCoupons();
        setAllCoupons(coupons)
    };


    const loadProducts = async () => {
        let service = new DataService();
        let product = await service.getCatalog();
        setAllProducts(product)
    };

    
 return (
   <div className="admin-page">
        <div className="admin-subpage">
            <div className="sub-products">
            <Link className="btn btn-lg btn primary" to="/AdminProducts">
             Manage Products </Link>
             </div>

            <div className="sub-coupons">          
            <Link className="btn btn-lg btn primary" to="/AdminCoupons">
             Manage Coupons </Link>
             </div>
        </div>
     <div className="sections-container">
               <sections className="sec-products">
                   <h4>Create New Product</h4>
                   <div className="form">
                        <div className="my-control">
                        <label for="sport">Sport:</label>
                            <select name="sport" id="sport" onChange={handleTextChange}>
                            <option value="">Select Sport</option>
                            <option value="NBA">NBA</option>
                            <option value="MLB">MLB</option>
                            <option value="NHL">NHL</option>
                            <option value="NFL">NFL</option>
                            </select>
                       </div>
                       <div className="my-control">
                       <label for="category">Category:</label>
                            <select name="category" id="category" onChange={handleTextChange}>
                            <option value="">Choose Category</option>
                            <option value="Mens">Mens</option>
                            <option value="Womens">Womens</option>
                            <option value="Kids">Kids</option>
                            </select>
                       </div>
                       <div className="my-control">
                           <label>Title:</label>
                           <input onChange={handleTextChange} name="title" type="text" />
                       </div>
                       <div className="my-control">
                           <label>Price:</label>
                           <input onChange={handleTextChange} name="price" type="text" />
                       </div>
                       <div className="my-control">
                           <label>Image:</label>
                           <input onChange={handleTextChange} name="image" type="text" />
                       </div>
                       <div className="text-center">
                       <button onClick={saveProduct} type="button" className="btn btn-primary">Register Product</button>
                       </div>
                       <div className="product-list">
                       </div>
                   </div>
               </sections>
               <section className='sec-coupons'>
                   <h4>Create New Coupon</h4>
                   <div className='my-control'>
                       <label>Coupon Code: </label>
                       <input onChange={handleCoupon} name="couponCode" type ="text"></input>
                       </div>
                       <div className='my-control'>
                       <label>Discount: </label>
                       <input onChange={handleCoupon} name="discount" type ="number"></input>
                       </div>
                       <div className='text-center'>
                       <button onClick={saveCoupon} type="button" class="btn btn-primary">Save Coupon</button>
                       </div>
               </section>
         </div>
         <div className="alert">
               { errorVisible ? <div className='alert alert-danger'>{errorMessage}</div> : null}
                { successVisible ? <div className='alert alert-success'>{successMessage}</div> : null}
               </div>
   </div>
 );
};

export default Admin;