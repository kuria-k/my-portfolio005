import React from "react";
import techieImage from './Images/Techie.jpg';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import Contact from "./Contact";
import { useState } from "react";

function Home() {
  const[theme, setTheme] = useState('');

  const toggleTheme = (e) => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className={`transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
      <div className="relative w-full h-screen object-cover  bg-black/60">
        <img src={techieImage} alt="" />
      </div>
      <div className="absolute inset-0">
        <Navbar />
      </div>
      <section className="text-gray-600 body-font absolute inset-0 text-gray-100 body-font bg-black/60 mt-50">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Welcome to my creative space where ideas meet execution and
              passion fuels every project.
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              "This is more than just a portfolio;
              it's a reflection of my journey, my curiosity, and the countless
              hours spent turning imagination into reality. Every piece you’ll
              find here carries a story, a spark, and a purpose. Dive in,
              explore, and discover the work that defines who I am and what I
              love to create."
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                <NavLink to="/contact">Contact Me</NavLink>
              </button>
              <button class="ml-4 inline-flex text-gray-100 bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg hover:text-white">
                <a href="https://github.com/">Visit my Git</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute inset-0 mb-0 mt-190">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
