import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="nav-brand">⬡ CMS Studio</a>
      <div className="nav-links">
        <NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
          About Page
        </NavLink>
        <NavLink to="/admin" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
          Admin Panel
        </NavLink>
        <NavLink to="/history" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
          History
        </NavLink>
      </div>
    </nav>
  );
}
