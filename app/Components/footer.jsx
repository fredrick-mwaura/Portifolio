'use client';  // This makes the component a Client Component

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 100px from the top
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add event listener to listen for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg mb-4">Follow me <span className="text-purple-500">#fredrickmwaura</span></p>
        <button className="border border-purple-500 text-purple-500 px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-black transition">
          direct chat
        </button>
        <div className="flex justify-center items-center mt-6 space-x-4">
          {/* Social Media Links */}
          <a href="https://github.com/fredrick-mwaura" className="text-purple-500 hover:text-white transition">
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            <p className="text-xs mt-1">github</p>
          </a>
          <a href="https://facebook.com" className="text-purple-500 hover:text-white transition">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            <p className="text-xs mt-1">facebook</p>
          </a>
          <a href="https://instagram.com/_snaipa_" className="text-purple-500 hover:text-white transition">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            <p className="text-xs mt-1">instagram</p>
          </a>
          <a href="https://linkedin.com/in/fredrick-mwaura" className="text-purple-500 hover:text-white transition">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            <p className="text-xs mt-1">linkedin</p>
          </a>
          <a href="https://x.com/Dtop__" className="text-purple-500 hover:text-white transition">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            <p className="text-xs mt-1">X</p>
          </a>
          <a href="https://whatsapp.com/0792542168" className="text-purple-500 hover:text-white transition">
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
            <p className="text-xs mt-1">whatsapp</p>
          </a>
        </div>
        <p className="mt-8 text-xs">
          ©2024 - created with <span className="text-green-500">❤</span> by fredrick mwaura
        </p>

        {/* Return to top button */}
        {isVisible && (
          <button 
            onClick={scrollToTop} 
            className="fixed bottom-8 right-8 p-4 bg-purple-500 border-solid border-1 rounded border-sky-500 text-white shadow-lg hover:bg-purple-700 transition"
          >
            <FontAwesomeIcon icon={faChevronUp} className="text-xl" />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
