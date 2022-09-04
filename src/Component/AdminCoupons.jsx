import "./AdminCoupons.css";
import React from 'react';
import { useState, useEffect} from 'react';
import DataService from '../services/dataService';

const AdminCoupons = () => {

    const [coupon, setAllCoupons] = useState ([]);
    const [modifyCoupon, setModifyCoupon] = useState ({});
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successVisible, setSuccessVisible] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

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
      if(response = true){
        showSuccess("Coupon Deleted")
      }
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

    const showError = (text) => {
      setErrorMessage(text);
      setErrorVisible(true);
  };

  const showSuccess = (text) => {
    setSuccessMessage(text);
    setSuccessVisible(true);
};

    const handleEditSubmit = async () => {
      modifyCoupon.discount = parseFloat(modifyCoupon.discount)
      if(modifyCoupon.couponCode.length < 3){
        showError("Coupon Code should be at least 3 characters")
        return;
      };
      if(!modifyCoupon.discount || modifyCoupon.discount > 35) {
        showError("Error, discount can not be more than 35%")
        return;
      };
      const service = new DataService();
      let response = await service.editCoupon(modifyCoupon);
      if(response = true){
        showSuccess("Coupon updated")
      }
      loadCoupons()
    };


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
    { errorVisible ? <div className='alert alert-danger'>{errorMessage}</div> : null}
    { successVisible ? <div className='alert alert-success'>{successMessage}</div> : null}
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