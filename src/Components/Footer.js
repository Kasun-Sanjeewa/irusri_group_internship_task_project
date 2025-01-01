import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2025 BookFinder. All Rights Reserved.</p>
                <p id='footer-name'>Developed By Kasun Sanjeewa</p>


                <div className="footer-links">
                    <a href="https://github.com/Kasun-Sanjeewa" className="footer-link" target='_blank'><i className="fa-brands fa-square-github"></i></a>
                    <a href="https://www.linkedin.com/in/kasun-sanjeewa-200152277/" className="footer-link" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/kasun.sanjeewa.7543653?mibextid=ZbWKwL" className="footer-link" target='_blank'><i className="fa-brands fa-square-facebook"></i></a>
                </div>
            </div>
        </footer>
    );
}
