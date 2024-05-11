import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const redStyle = {
    color: '#e31c25'
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div id="navBar" className="position-absolute">
      <nav className="navbar bg-dark-lg navbar-expand-lg">
        <div className="container-fluid">
          <Link id="gym" to="/" className="navbar-brand mx-lg-5 mx-4 mt-1">
            <h1 className="m-0 display-2 font-weight-bold text-uppercase text-white">
              gy<span style={redStyle}>m</span>
              <i className="fa-solid fa-dumbbell" style={redStyle}></i>
            </h1>
          </Link>

          <div className="menu me-3">
            <button
              type="button"
              onClick={toggleMenu}
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span>
                <i className="fa-regular fa-bars"></i>
              </span>
            </button>
          </div>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-lg-5 me-auto mb-2 mb-lg-0 text-uppercase">
              <li className="nav-item">
                <NavLink className="nav-link home" activeClassName="active" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/features">
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/contact">
                  Contact
                </NavLink>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to ="/signup">
                    SIGNUP
                    </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to ="/login">
                    LOGIN
                    </NavLink>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
