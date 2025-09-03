import Navbar from './Navbar'
import React, { useEffect, useState } from 'react';
import './App.css'
import Footer from './Footer';

function Projects() {
  const [theme, setTheme] = useState((e) => localStorage.getItem('theme') || 'dark');

  useEffect((e) => {
    localStorage.setItem('theme', theme);
    document.body.classList.remove('bg-white', 'text-black', 'bg-black', 'text-white');
    document.body.classList.add(
      theme === 'light' ? 'bg-gray-100' : 'bg-gray-800',
      theme === 'light' ? 'text-gray-800' : 'text-gray-100'
    )
  }, [theme])
  const toggleTheme = (e) => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'} min-h-screen transition-all duration-300`}>

      <Navbar />
      <div>
        <div className="flex justify-end p-4">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" onClick={toggleTheme} className="hidden" />
            <span className="w-10 h-5 bg-gray-400 rounded-full flex items-center p-1">
              <span className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-4' : ''}`}></span>
            </span>
            <span className="ml-2 text-sm">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
          </label>
        </div>
        <section class="body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4 ml-35">
              <div className="p-4 md:w-100">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className='text-center p-20 bg-black text-white text-6xl'>
                    <h1>1</h1>
                  </div>
                  {/* <img src="" alt="" className='lg:h-48 md:h-36 w-full object-cover object-center' /> */}
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium mb-1">Top 6</h2>
                    <h1 className="title-font text-lg font-extrabold  mb-3">Calorie counter</h1>
                    <p className="leading-relaxed mb-3">A simple and smart calorie counter that helps you track your daily intake and stay on top of your nutrition goals.</p>
                    <div className="flex items-center flex-wrap ">
                      <a href="https://kuria-k.github.io/calorie-counter/" className='bg-gray-700 hover:bg-gray-900 rounded-xl text-white p-3'>Go live</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-100">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className='text-center p-20 bg-white text-black text-6xl'>
                    <h1>2</h1>
                  </div>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium mb-1">Top 6</h2>
                    <h1 className="title-font text-lg font-extrabold mb-3">Duo drive front-end</h1>
                    <p className="leading-relaxed mb-3">A sleek and responsive front-end interface for Duo Drive, designed to showcase seamless user interaction and intuitive navigation for a modern driving experience.</p>
                    <div className="flex items-center flex-wrap ">
                      <div className="flex items-center flex-wrap ">
                        <a href="https://kuria-k.github.io/duodrive-front-end-/" className='bg-gray-700 hover:bg-gray-900 rounded-xl text-white p-3'>Go live</a>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-100">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className='text-center p-20 bg-black text-white text-6xl'>
                    <h1>3</h1>
                  </div>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium mb-1">Top 6</h2>
                    <h1 className="title-font text-lg font-extrabold mb-3">Budget tracker</h1>
                    <p className="leading-relaxed mb-3">A clean and intuitive tool to help you manage expenses, track spending, and stay in control of your finances every day.</p>
                    <div className="flex items-center flex-wrap ">
                      <a href="https://kuria-k.github.io/tracker/" className='bg-gray-700 hover:bg-gray-900 rounded-xl text-white p-3'>Go live</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4 ml-35">
              <div className="p-4 md:w-100">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className='text-center p-20 bg-white text-black text-6xl'>
                    <h1>4</h1>
                  </div>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium mb-1">Top 6</h2>
                    <h1 className="title-font text-lg font-extrabold mb-3 ">Fleet manager</h1>
                    <p className="leading-relaxed mb-3">A streamlined dashboard for managing vehicles, tracking operations, and optimizing fleet performance—all from a single front-end interface.</p>
                    <div className="flex items-center flex-wrap ">
                      <a href="https://kuria-k.github.io/fleet-manager/" className='bg-gray-700 hover:bg-gray-900 rounded-xl text-white p-3'>Go live</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-100">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className='text-center p-20 bg-black text-white text-6xl'>
                    <h1>5</h1>
                  </div>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium mb-1">CATEGORY</h2>
                    <h1 className="title-font text-lg font-medium mb-3">Shooting Stars</h1>
                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-100">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className='text-center p-20 bg-white text-black text-6xl'>
                    <h1>6</h1>
                  </div>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium mb-1">CATEGORY</h2>
                    <h1 className="title-font text-lg font-medium mb-3">Shooting Stars</h1>
                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          </div><br /> <br /><br /><br /><br />
      <div className="absolute inset-0 mb-0 mt-370">
        <Footer />
      </div>
    </div>


  )
}

export default Projects