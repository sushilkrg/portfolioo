import React from 'react';
import { FaHeadSideCough } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-4">
            <div className="container mx-auto px-4 flex flex-col justify-between items-center">
                <h3>Made with 💖 by Sushil Kumar</h3>
                <div className="text-sm text-center md:text-left">
                    &copy; 2024 - All rights reserved.
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;