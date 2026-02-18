import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Persist theme and add class to <body>
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme; // add dark/light class to body if you use Tailwind dark mode
  }, [theme]);

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1E3A8A]/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-2 select-none">
          <span
            className="text-lg font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kelvin
          </span>
          <span className="px-2.5 py-0.5 rounded bg-[#14B8A6] text-white text-sm font-semibold tracking-wide">
            Kuria
          </span>
        </NavLink>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-2">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                  isActive ? "bg-[#14B8A6] text-white" : "text-white/70 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Theme toggle */}
          {/* <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-3 w-9 h-9 flex items-center justify-center rounded border border-white/20 hover:border-[#14B8A6] text-white/50 hover:text-[#14B8A6] transition-all duration-200"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button> */}
        </div>

        {/* Mobile menu + theme */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded border border-white/20 text-white/50 hover:text-[#14B8A6] hover:border-[#14B8A6] transition-all duration-200"
          >
            {theme === "dark" ? (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex flex-col items-center justify-center w-8 h-8 gap-1.5"
          >
            <span className={`block h-px w-5 bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-px w-5 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#1E3A8A]/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-2 z-40">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                  isActive ? "bg-[#14B8A6] text-white" : "text-white/70 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
