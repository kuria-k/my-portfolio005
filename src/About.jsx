import React, { useEffect, useState } from 'react';
import aboutImage from './Images/About.me.jpg'
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  const [theme, setTheme] = useState(() =>localStorage.getItem('theme') || 'dark');

  useEffect((e) => {
    localStorage.setItem('theme' ,theme);
    document.body.classList.remove('bg-white' , 'text-black', 'bg-black' ,'text-white');
    document.body.classList.add(
      theme === 'light' ? 'bg-gray-100' :'bg-gray-800',
      theme === 'light' ? 'text-gray-800': 'text-gray-100'
    )
  },[theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'} min-h-screen transition-all duration-300`}>
       <Navbar/>
      <div className="flex justify-end p-4">
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" onClick={toggleTheme} className="hidden" />
          <span className="w-10 h-5 bg-gray-400 rounded-full flex items-center p-1">
            <span className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-4' : 'light'}`}></span>
          </span>
          <span className="ml-2 text-sm">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
        </label>
      </div>
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                src={aboutImage}
                alt="Kelvin Kuria"
                className="object-cover object-center h-full w-full"
              />
            </div>

            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className={`w-20 h-20 rounded-full inline-flex items-center justify-center ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}>
                  <img src="src/Images/man (3).png" alt="Kelvin Icon" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className={`font-medium title-font mt-4 text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    KK
                  </h2>
                  <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Hi, I'm Kelvin Kuria—creative thinker, passionate builder,
                    and relentless problem solver. Welcome to my world of ideas
                    turned into impact.
                  </p>
                </div>
              </div>

              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-400 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Born and raised in the vibrant city of Nairobi, Kenya, I'm pursuing a career in full-stack software engineering. My journey is shaped by curiosity, creativity, and a drive to build meaningful solutions. Whether it's crafting seamless user experiences or architecting robust backend systems, I thrive at the intersection of innovation and functionality. This portfolio is a glimpse into my evolving skill set, my projects, and the vision I carry for the future of tech.
                </p>
                <a className="text-indigo-500 inline-flex items-center cursor-pointer">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
         <Footer/>
      </section>
    </div>
  );
}

export default About;

