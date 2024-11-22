import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center  p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-white">Contact Me</h2>
      <div className="flex flex-col sm:flex-row sm:justify-around w-full space-y-4 sm:space-y-0">
        <a
          href="https://linkedin.com/in/sushilkumar01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-700 hover:underline"
        >
          <i className="fab fa-linkedin text-2xl">
            <span><FaLinkedin /></span>
          </i>
        </a>
        <a
          href="https://twitter.com/sushil_krg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-500 hover:underline"
        >
          <i className="fab fa-twitter text-2xl">
            <span><FaTwitter /></span>
          </i>
        </a>
        <a
          href="https://instagram.com/sushilkr123"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-pink-500 hover:underline"
        >
          <i className="fab fa-instagram text-2xl">
            <span><FaInstagram /></span>
          </i>
        </a>
        <a
          href="https://github.com/sushilkrg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-800 hover:underline"
        >
          <i className="fab fa-github text-2xl">
            <span><FaGithub /></span>
          </i>
        </a>
        <a
          href="mailto:skpersonal100@gmail.com"
          className="flex items-center space-x-2 text-green-600 hover:underline"
        >
          <FaEnvelope className="text-2xl" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
