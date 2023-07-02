import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://github.com/AbdullaAlMamun121"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaGithub size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abdulla-al-mamun-bb4aaa148/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/hmdabdulla121"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center mt-2">
          <p className="text-sm">&copy; {new Date().getFullYear()} Abdulla Al Mamun. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
