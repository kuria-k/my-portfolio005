import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  // Stay in sync if Navbar changes the theme
  useEffect(() => {
    const sync = () => setTheme(localStorage.getItem("theme") || "dark");
    window.addEventListener("storage", sync);
    // Poll every 300ms as a fallback (same-tab localStorage changes don't fire "storage")
    const id = setInterval(() => {
      const stored = localStorage.getItem("theme") || "dark";
      setTheme((prev) => (prev !== stored ? stored : prev));
    }, 300);
    return () => {
      window.removeEventListener("storage", sync);
      clearInterval(id);
    };
  }, []);

  const isDark = theme === "dark";

  return (
    <footer
      className={`w-full border-t transition-colors duration-300 ${
        isDark
          ? "bg-[#1E3A8A] border-white/10"
          : "bg-[#1E3A8A] border-white/10"
      }`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <span
            className="text-xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kelvin
          </span>
          <span className="px-2.5 py-0.5 rounded bg-[#14B8A6] text-white text-sm font-semibold tracking-wide">
            Kuria
          </span>
        </div>

        {/* Copyright */}
        <p className="text-white/40 text-xs text-center tracking-wide">
           © {new Date().getFullYear()} Kelvin Kuria &nbsp;·&nbsp; All rights reserved 
          <a
             href="mailto:kelvinmacharia442@gmail.com"
            className="text-white/50 hover:text-[#14B8A6] ml-2 transition-colors duration-200"
          >
            kelvinmacharia442@gmail.com
          </a>
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {/* Facebook */}
          {/* <a
            href="#"
            aria-label="Facebook"
            className="text-white/30 hover:text-[#14B8A6] transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a> */}

          {/* Twitter / X */}
          {/* <a
            href="#"
            aria-label="Twitter"
            className="text-white/30 hover:text-[#14B8A6] transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a> */}

          {/* Instagram */}
          {/* <a
            href="#"
            aria-label="Instagram"
            className="text-white/30 hover:text-[#14B8A6] transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a> */}

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kelvin-kuria-6867302a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            aria-label="LinkedIn"
            className="text-white/30 hover:text-[#14B8A6] transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/30 hover:text-[#14B8A6] transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom teal line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#14B8A6]/50 to-transparent" />
    </footer>
  );
}

export default Footer;