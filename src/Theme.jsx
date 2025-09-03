import React, { useState } from 'react'
import './App.css'

function Theme() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = (e) => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    }
    return (
        <div className={theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'}>
            <label className="switch">
                    <input type="checkbox" onClick={toggleTheme} />
                    <span className="slider" />
                </label>
        </div>
    )
}

export default Theme