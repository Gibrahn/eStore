import "./AdminCoupons.css";
import React from 'react';
import { useState, useEffect} from 'react';
import DataService from '../services/dataService';
import { useParams } from "react-router-dom";

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

    // const handleEditCoupon = async (_id, coupon) => {
    //   const service = new DataService(param._id)
    //   let
    // }
    
    

  return (
<div className="coupon-management">
    <div className="coupon-table">
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
                  <td>
                    <button onClick={() => handleDeleteCoupon(coupon._id)} className="btn btn-success dual-btn">Edit</button>
                    <button onClick={() => handleDeleteCoupon(coupon._id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>))}
          </tbody>
        </table>
  </div>
  <div className="coupon-edit">
    <section>
      <h4>Coupon Edit</h4>
      <div className="my-control">
      <label>Coupon Code: </label>
          <input name="couponCode" type ="text"></input>
      </div>
      <div className="my-control">
      <label>Discount: </label>
          <input name="discount" type ="text"></input>
      </div>
    </section>
  </div>      
</div>
  );

};

export default AdminCoupons;