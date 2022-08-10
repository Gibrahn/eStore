import "./NavBar.css";
import React from 'react';

import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
  <div class="container-fluid">
    <Link class="navbar-brand fw-bold fs-4" to="#">E-Store</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/catalog">Catalog</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admin">Admin</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default NavBar;