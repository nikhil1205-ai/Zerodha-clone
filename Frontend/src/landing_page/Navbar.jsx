import React, { PureComponent } from 'react';
import './Navbar.css'; 
import logo from '../assets/logo.svg'; 
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={logo} alt="Zerodha" style={{ height: 36 }} />
          <span className="brand-text">Zerodha</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          {/* Left links */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link px-3" to="/products">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/about">About</Link>
            </li>

            <li className="nav-item d-none d-lg-block">
              <Link className="nav-link px-3" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item d-none d-lg-block">
              <Link className="nav-link px-3" to="/support">Support</Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-3"
                href="#!"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tools
              </a>
              <ul className="dropdown-menu shadow-sm" aria-labelledby="productsDropdown">
                <li><a className="dropdown-item" href="/">Kite (Web)</a></li>
                <li><a className="dropdown-item" href="/">Coin (MF)</a></li>
                <li><a className="dropdown-item" href="/">Console</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">APIs & Developers</a></li>
              </ul>
            </li>

          </ul>

          {/* Right side: search + CTAs */}
          <div className="d-flex align-items-center gap-2">
            {/* Primary CTA */}
            <Link to="/login" className="btn btn-sm btn-outline-primary">
              Login
            </Link>
            <Link to="/signup" className="btn btn-sm btn-primary">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
     );
}

export default Navbar;