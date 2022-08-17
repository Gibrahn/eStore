import "./NavBar.css";
import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from "react";
import store from "../context/storeContext"

const NavBar = () => {
  const cart = useContext(store).cart;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold fs-4" href="#">E-Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Catalog">Catalog</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Admin">Admin</Link>
        </li> 
      </ul>
      <form className="d-flex">
          <Link className="btn btn-outline-success" to="/Cart">Cart: {cart.length}</Link>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}

export default NavBar;