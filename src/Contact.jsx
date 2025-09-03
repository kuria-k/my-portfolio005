import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react';

function Contact() {
   const [theme, setTheme] = useState((e) =>localStorage.getItem('theme') || 'dark');
   
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
        <div  className={`transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
            <div>
                <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50 px-4">
                    <div className="absolute inset-0">
                        <Navbar />
                    </div>
                    <div className="flex justify-end p-4 absolute top-20 right-6 z-50">
                        <label className="flex items-center cursor-pointer">
                            <input type="checkbox" onClick={toggleTheme} className="hidden" />
                            <span className="w-10 h-5 bg-gray-400 rounded-full flex items-center p-1">
                                <span className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-4' : ''}`}></span>
                            </span>
                            <span className="ml-2 text-sm">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                        </label>
                    </div>
                    <div className="flex justify-end p-4">

                        <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-[0_0_30px_white] w-full max-w-xl transition-all duration-300 ease-in-out">
                            <section className="text-gray-100 body-font">
                                <div className="container mx-auto">
                                    <div className="text-center mb-6">
                                        <h1 className="text-2xl sm:text-3xl font-medium">Contact Me</h1>
                                        <p className="mt-2 text-base text-gray-300">For all your Software Dev needs</p>
                                    </div>
                                    <form className="space-y-4">
                                        <div className="flex flex-col md:flex-row gap-4">
                                            <div className="w-full">
                                                <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    placeholder="John Doe"
                                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-700 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-600 text-base outline-none text-gray-700 py-2 px-3 transition duration-200"
                                                />
                                            </div>
                                            <div className="w-full">
                                                <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    placeholder="john@gmail.com"
                                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-700 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-600 text-base outline-none text-gray-700 py-2 px-3 transition duration-200"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                placeholder="Draft a short text for me here"
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-700 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-600 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none transition duration-200"
                                            ></textarea>
                                        </div>
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded text-lg transition duration-200"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Contact