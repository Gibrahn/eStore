import "./Admin.css";

const Admin = () => {

 return (
   <div className="admin-page">
     <div className="sections-container">
               <sections className="sec-products">
                   <h4>Manage Products</h4>
                   <div className="form">
                       <div className="my-control">
                           <label>Title:</label>
                           <input  name="title" type="text" />
                       </div>
                       <div className="my-control">
                           <label>Image:</label>
                           <input  name="image" type="text" />
                       </div>
                       <div className="my-control">
                           <label>Category:</label>
                           <input  name="category" type="text" />
                       </div>
                       <div className="my-control">
                           <label>Price:</label>
                           <input  name="price" type="text" />
                       </div>
                       <div className="text-center">
                       <button type="button" className="btn btn-primary">Register Product</button>
                       </div>
                       <div className="product-list">
                       </div>
                   </div>
               </sections>
               <section className='sec-coupons'>
                   <h4>Manage Coupons</h4>
                   <div className='my-control'>
                       <label>Coupon Code: </label>
                       <input name="coupon" type ="text"></input>
                       </div>
                       <div className='my-control'>
                       <label>Discount: </label>
                       <input name="discount" type ="number"></input>
                       </div>
                       <div className='text-center'>
                       <button type="button" class="btn btn-primary">Save Coupon</button>
                       </div>
                   
               </section>
         </div>
   </div>
 );
};

export default Admin;