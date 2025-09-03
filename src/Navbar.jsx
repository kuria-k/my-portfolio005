import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './App.css'

function Navbar() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList.remove('bg-white' , 'text-black', 'bg-black' ,'text-white');
    document.body.classList.add(
      theme === 'light' ? 'bg-white' : 'bg-black',
      theme === 'light' ? 'text-black' : 'text-white'
    );
  }, [theme]);


  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* <span className={`ml-3 text-xl ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Kelvin
            <span
              className={`p-3 rounded-2xl transition-all duration-300 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-700 text-white'
                }`}
            >
              Kuria
            </span>

            {/* Kelvin <span className={`p-3 rounded-2xl ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>Kuria</span> */}
          {/* </span> */}
          <span className={`ml-3 text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Kelvin

            <span
              className={`ml-3 p-3 rounded-2xl transition-all duration-300 ${theme === 'dark' ? 'bg-gray-200 text-gray-900' : 'bg-black text-white'
                }`}
            >
              Kuria
            </span>
          </span>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to="/" end className={({ isActive }) =>
              isActive
                ? `mr-5 ${theme === 'dark' ? 'text-white bg-gray-800' : 'text-black bg-gray-200'} rounded-2xl font-semibold p-2`
                : `mr-5 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) =>
              isActive
                ? `mr-5 ${theme === 'dark' ? 'text-white bg-gray-800' : 'text-black bg-gray-200'} rounded-2xl font-semibold p-2`
                : `mr-5 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`} > About </NavLink>
            <NavLink to="/projects" className={({ isActive }) =>
              isActive
                ? `mr-5 ${theme === 'dark' ? 'text-white bg-gray-800' : 'text-black bg-gray-200'} rounded-2xl font-semibold p-2`
                : `mr-5 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) =>
              isActive
                ? `mr-5 ${theme === 'dark' ? 'text-white bg-gray-800' : 'text-black bg-gray-200'} rounded-2xl font-semibold p-2`
                : `mr-5 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>Contact</NavLink>
            {/* <button onClick={toggleTheme} className={`inline-flex items-center bg-gray-100 border-0 py-1 px-9 focus:outline-none  rounded text-base mt-4 md:mt-0 ${theme === 'dark' ? 'bg-gray-200 text-gray-900' : 'bg-gray-900 text-white'
                }`}>Toggle theme
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button> */}
            <label className="switch">
              <input type="checkbox" onClick={toggleTheme} />
              <span className="slider" />
            </label>

          </nav>
        </div>
      </header >
    </div >
  )
}

export default Navbar