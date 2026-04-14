import { Outlet } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { CookingPot } from "lucide-react";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <CookingPot size={24} />
          <h1>Recipe Book</h1>
        </div>
        <ThemeToggle />
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;