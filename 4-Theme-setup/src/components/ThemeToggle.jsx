import { useEffect, useState } from "react";
import "./toggle.css";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <div className="toggle-container">
  <Sun size={18} />

  <div className={`toggle-switch ${darkMode ? "active" : ""}`} onClick={toggleTheme}>
    <div className="toggle-circle"></div>
  </div>

  <Moon size={18} />
</div>
  );
};

export default ThemeToggle;