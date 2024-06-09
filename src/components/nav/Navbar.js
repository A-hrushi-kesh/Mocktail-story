import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  const navigate = useNavigate();

  const getscrdata = (event) => {
    event.preventDefault();
    const srcdata = document.getElementById('scr').value.trim();;

   
    if (srcdata === '') {
      alert("Please enter a search term.");
    }
    else{
      navigate(`/src/${encodeURIComponent(srcdata)}`);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" id="Navbar">
        <div className="container-fluid">
          <button className="navbar-toggler btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand fs-3 fst-italic fw-bold" href="#">Mocktail Story</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto col justify-content-end mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active button me-4" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active button me-4" aria-current="page" to="/ing">Ingredients</Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={getscrdata}>
              <input className="form-control shadow-sm bg-body-danger rounded-0 me-2" type="search" placeholder="Type The Drink" aria-label="Search" id="scr"/>
              <button className="btn btn-outline-dark rounded-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
