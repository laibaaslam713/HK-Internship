import React from "react";

const Navbar = ({ menuOpen, setMenuOpen, activeSection, smoothScrollTo }) => {
  const navItems = ["home", "about", "services", "gallery", "contact"];

  return (
    <nav id="navbar">
      <div className="logo">&#9670; Nexa</div>

      <ul className={`nav-links${menuOpen ? " active" : ""}`}>
        {navItems.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo(id);
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div
        className={`hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;