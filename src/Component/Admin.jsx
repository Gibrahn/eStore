 import "./Admin.css";

 const Admin = () => {
  return (
    <div className="admin-page">

      <div className="sections-container">

        <section className="sec-products">
        <h4> Manage products</h4>
            <div className="form">

              <div className="my-control">
                <label>Name of Item</label>
                <input type="text" name="" id="" />
              </div>
              <div className="my-control">
                <label>Price</label>
                <input type="text" name="" id="" />
              </div>  
              <div className="my-control">
                <label>Quantity</label>
                <input type="text" name="" id="" />
              </div>
    
              <div className="my-control">
                <button className="btn btn-dark">Register Product</button>
              </div>
          </div>
        </section>

        <section>
          <h4>Manage Coupon Codes</h4>
          <div className="form">

              <div className="my-control">
                <label>Coupon Code</label>
                <input type="text" />
              </div>
              <div className="my-control">
                <label>Amount: </label>
                <input type="text"/>
              </div>  

              <div className="my-control">
                <button className="btn btn-dark">Register Code</button>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;