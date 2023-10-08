import React from "react";
import "./NavBar.css"; // Import the new CSS file
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/orders" className="nav-link">
            Orders
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            <div class="title-container">
              <h1 class="title">VeFarm-Collective</h1>
            </div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
