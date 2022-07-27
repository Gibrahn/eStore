import "./NavBar.css";
import React from 'react';

const NavBar = () => {

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold fs-4" href="#">E-Store</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Catalog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Account</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default NavBar;