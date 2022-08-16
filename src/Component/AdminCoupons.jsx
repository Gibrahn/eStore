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
    

  return (
<div className="product-management">
    <h1>Coupon Management</h1>
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th scope="col">Coupon Code</th>
          <th scope="col">Discount</th>
        </tr>
      </thead>
      <tbody>
          {
            coupon.map(coupon => (
            <tr className="table-light" key={coupon._id}>
              <td>{coupon.couponCode}</td>
              <td>{coupon.discount}</td>
            </tr>
            ))
          }

      </tbody>
    </table>
  </div>
    
  );

};

export default AdminCoupons;