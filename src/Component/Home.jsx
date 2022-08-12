import "./NavBar.css";
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {

  return (
      <div className="home">
          <h1>Welcome to the eStore</h1>
      

      
          <Link className="btn btn-lg btn primary" to="/Catalog">
              Check out our Catalog!
          </Link>
      </div>
  );

};

export default Home;