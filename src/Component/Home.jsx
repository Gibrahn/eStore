import "./Home.css";
import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {

  return (
      <div className="home">
        <div className="home-mens"><button className="homebtn"><Link className="homebtn-a" to="/Catalog">MENS</Link></button></div>
        <div className="home-womens"><button className="homebtn"><Link className="homebtn-a" to="/Catalog">WOMENS</Link></button></div>
        <div className="home-kids"><button className="homebtn"><Link className="homebtn-a" to="/Catalog">KIDS</Link></button></div>
      </div>
  );

};

export default Home;