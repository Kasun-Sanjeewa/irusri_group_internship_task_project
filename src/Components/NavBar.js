import React, { useState } from 'react';
import './NavBar.css';

export default function NavBar({ getResults, showFavorites }) {
    const [value, setValue] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        if (value.trim()) {
            getResults(value);
            setValue('');
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="logo">
                    BookFinder
                </a>
                <form className="search-bar" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search for books..."
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                <button className="favorites-button" onClick={showFavorites}>
                    My Books
                </button>
            </div>
        </nav>
    );
}
