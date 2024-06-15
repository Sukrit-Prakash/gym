// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

// export default function Navbar() {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const redStyle = {
//     color: '#e31c25'
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div id="navBar" className="position-absolute">
//       <nav className="navbar bg-dark-lg navbar-expand-lg">
//         <div className="container">
//           <Link id="gym" to="/" className="">
//             <h1 className="m-0 display-2 font-weight-bold text-uppercase text-white">
//               gy<span style={redStyle}>m</span>
//               <i className="fa-solid fa-dumbbell" style={redStyle}></i>
//             </h1>
//           </Link>

//           <div className="menu me-3">
//             <button
//               type="button"
//               onClick={toggleMenu}
//               className="navbar-toggler"
//               data-toggle="collapse"
//               data-target="#navbarCollapse"
//             >
//               <span>
//                 <i ></i>
//               </span>
//             </button>
//           </div>

//           <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
//             <ul className="navbar-nav ms-lg-5 me-auto mb-2 mb-lg-0 text-uppercase">
//               <li className="nav-item">
//                 <NavLink className="nav-link home" activeClassName="active" exact to="/">
//                   Home
//                 </NavLink>
//               </li>

//               <li className="nav-item">
//                 <NavLink className="nav-link" activeClassName="active" to="/features">
//                   Features
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" activeClassName="active" to="/contact">
//                   Contact
//                 </NavLink>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" activeClassName="active" to ="/signup">
//                     SIGNUP
//                     </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" activeClassName="active" to ="/login">
//                     LOGIN
//                     </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" activeClassName="active" to ="/profile">
//                     PROFILE
//                     </NavLink>
//                 </li>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: grey;
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
`;

const NavLink = styled(Link)`
    margin: 0 1rem;
    text-decoration: none;
    color: white;
    font-weight: bold;
    &:hover {
        color: #ffdd57;
    }
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo>Gym app</Logo>
            <NavLinks>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/features">Features</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </NavLinks>
        </NavbarContainer>
    );
};

export default Navbar;
