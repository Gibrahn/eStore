import React from 'react'
import "./Admin.css";
import { useState, useEffect } from 'react';
import DataService from '../services/dataService';

const Admin = () => {
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({})
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
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
    }
    const saveProduct = async () => {
                
        if(product.title.length < 5){
            showError ("Error, Title should have at least 5 characters.")
            return;
            
        }

        if(!product.category){
            showError("Error, Category should not be blank")
            return;
        }

        if(!product.image){
            showError("Image can not be empty")
            return;
        }

        let savedProduct = {...product};
        savedProduct.price = parseFloat(savedProduct.price)

        if(!savedProduct.price || savedProduct.price < 1){
            showError("Price must be greater than $1")
            return;
        }
        setErrorVisible(false)
        
        let service = new DataService();
        let response = await service.saveProduct(savedProduct);
        console.log(response)
        

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
        if(!savedCoupon.discount || savedCoupon.discount > 35) {
            showError("Error, discount can not be more than 35%")
            return;
        }
        //code should have at least 5 chars
        if(!savedCoupon.couponCode || savedCoupon.couponCode.length < 5) {
            showError("Coupon code must contain 5 characters.")
            return;
        }
        setErrorVisible (false)

        let service = new DataService();
        let response = await service.saveCoupon(savedCoupon);
        console.log(response)
       

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
     <div className="sections-container">
               <sections className="sec-products">
                   <h4>Manage Products</h4>
                   <div className="form">
                        <div className="my-control">
                        <label for="sport">Sport:</label>
                            <select name="sport" id="sport">
                            <option value="NBA">NBA</option>
                            <option value="MLB">MLB</option>
                            <option value="NHL">NHL</option>
                            <option value="NFL">NFL</option>
                            </select>
                       </div>
                       <div className="my-control">
                       <label for="category">Category:</label>
                            <select name="category" id="category">
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
               { errorVisible ? <div className='alert alert-danger'>{errorMessage}</div> : null}
                   <h4>Manage Coupons</h4>
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
   </div>
 );
};

export default Admin;