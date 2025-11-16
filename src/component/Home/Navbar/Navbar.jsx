import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { useTheme } from "../../../context/ThemeContext/ThemeContext";

export default function Navbar() {
  // const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md transition-colors duration-300 ${isActive
      ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-400 font-semibold"
      : "text-gray-300 hover:text-white hover:bg-white/5"
    }`;

  return (
    <nav className="fixed w-full z-50 backdrop-blur bg-black/50 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <NavLink to="/" className="text-3xl font-bold tracking-wide text-white">
          Moiz Ahmed
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
          <a
            href="/resume.pdf"
            download
            className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md"
          >
            Resume
          </a>
        </div>

        {/* Theme Toggle Button */}
        {/* <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-3 py-1 rounded-md border border-white/10 hover:bg-white/5 text-sm text-gray-300 hidden md:block"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button> */}

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 text-2xl focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur border-t border-white/10 animate-fadeIn">
          <div className="flex flex-col items-start px-4 py-3 space-y-2">
            <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)} end>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/projects" className={linkClass} onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
            <a
              href="/resume.pdf"
              download
              className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md w-full"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>

            {/* Theme Toggle inside dropdown */}
            {/* <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setMenuOpen(false);
              }}
              className="w-full px-3 py-2 rounded-md border border-white/10 hover:bg-white/5 text-sm text-gray-300"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button> */}
          </div>
        </div>
      )}

      {/* Small animation style */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.25s ease-in-out;
          }
        `}
      </style>
    </nav>
  );
}
