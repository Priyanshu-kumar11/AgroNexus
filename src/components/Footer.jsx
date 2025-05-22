import React from 'react';

const Footer = () => {
  return (
    <div className="bg-green-700 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section - Logo, Description, and Links */}
        <div className="md:flex justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="font-semibold text-xl">AgroNexus</p>
            {/* <p className="text-sm">Transforming Agriculture with IoT & Machine Learning</p> */}
          </div>
          
          {/* Links Section */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="/about" className="text-white hover:text-gray-300">About</a>
            <a 
              href="https://www.linkedin.com/in/priyanshu-kumar-0aa259227" 
              className="text-white hover:text-gray-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>

          {/* Social Media Icons Section */}
          <div className="mt-4 md:mt-0 flex justify-center md:justify-start space-x-6">
            <a href="https://facebook.com" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6 text-sm">
          <p>&copy; 2024 AgroNexus. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
