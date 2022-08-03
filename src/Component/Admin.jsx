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
                        <div className="my-control">
                        <button >Register Product</button>
                        </div>
                        <div className="product-list">
                      <ul>
                        {allProducts.map(product => <li key={product._id}>{product.title} - {product.image} -{product.category} - {product.price} </li>)}
                      </ul>
                        </div>
                    </div>
                </sections>
          </div>
    </div>
  );
};