import React from 'react'
import './NavBar.css'

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="logo">
                    BookFinder
                </a>

                <form className="search-bar" >
                    <input
                        type="text"
                        placeholder="Search for books..."
                        value=''
                        onChange={(e) => (e.target.value)}
                    />
                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
        </nav>
    )
}
