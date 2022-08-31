import "./AdminCoupons.css";
import React from 'react';
import { useState, useEffect} from 'react';
import DataService from '../services/dataService';

const AdminCoupons = () => {

    const [coupon, setAllCoupons] = useState ([]);
    const [modifyCoupon, setModifyCoupon] = useState ({})

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

    const handleEditCoupon = async (_id) => {
      let modify = coupon.filter(x=>x._id == _id)[0]
      setModifyCoupon(modify)
    };
    
    const handleTextChange = (e) => {
      let copy = {...modifyCoupon};
      copy[e.target.name] = e.target.value;
      setModifyCoupon(copy);
    };

    const handleEditSubmit = async () => {
      const service = new DataService();
      let response = await service.editCoupon(modifyCoupon);
      loadCoupons()
    };


    
    /**
     * handle the niput change on the input
     * write the new text to the modifyCoupon object
     * on save btn,  send modifyCoupon to server
     */

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
                    <button onClick={() => handleEditCoupon(coupon._id)} className="btn btn-success dual-btn">Edit</button>
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
          <input name="couponCode" onChange={handleTextChange} value={modifyCoupon.couponCode} type ="text"></input>
      </div>
      <div className="my-control">
      <label>Discount: </label>
          <input name="discount" onChange={handleTextChange} value={modifyCoupon.discount} type ="text"></input>
      </div>
      <div className="my-control text-center">
        <button onClick={() => handleEditSubmit(modifyCoupon._id)} className="btn btn-primary">Update</button>
      </div>
    </section>
  </div>      
</div>
  );

};

export default AdminCoupons;