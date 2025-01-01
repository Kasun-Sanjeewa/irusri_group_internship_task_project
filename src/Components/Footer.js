import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2025 BookFinder. All Rights Reserved.</p>
                <p id='footer-name'>Developed By Kasun Sanjeewa</p>


                <div className="footer-links">
                    <a href="#about" className="footer-link"><i className="fa-brands fa-square-github"></i></a>
                    <a href="#contact" className="footer-link"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#contact" className="footer-link"><i className="fa-brands fa-square-facebook"></i></a>
                </div>
            </div>
        </footer>
    );
}
