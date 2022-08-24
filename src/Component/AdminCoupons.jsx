import "./AdminCoupons.css";
import React from 'react';
import { useState, useEffect } from 'react';
import DataService from '../services/dataService';

const AdminCoupons = () => {

    const [coupon, setAllCoupons] = useState ([]);

    const loadCoupons = async () => {
        let service = new DataService();
        let coupons = await service.getCoupons();
        setAllCoupons(coupons)
    };
  
    useEffect(() => {
      loadCoupons();
    }, []);

    const handleDeleteCoupon = async (_id) => {
      const service = new DataService();
      let response = await service.delCoupon(_id);
      loadCoupons()
    };
    
    

  return (
<div className="product-management">
    <h1>Coupon Management</h1>
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th scope="col">Coupon Code</th>
          <th scope="col">Discount</th>
          <th scope="col">Action</th>
          
        </tr>
      </thead>
      <tbody>
          {
            coupon.map(coupon => (
            <tr className="table-light" key={coupon._id}>
              <td>{coupon.couponCode}</td>
              <td>{coupon.discount}</td>
              <td><button onClick={() => handleDeleteCoupon(coupon._id)} className="btn btn-danger">Delete</button></td>
            </tr>
            ))
          }

      </tbody>
    </table>
  </div>
    
  );

};

export default AdminCoupons;