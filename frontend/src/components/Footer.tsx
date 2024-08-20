import React from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaCode } from "react-icons/fa"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 footer">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-8 mb-4">
          <a href="https://github.com/sAayush" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-6 w-6 hover:text-white transition-colors" />
          </a>
          <a href="https://linkedin.com/in/soni-aayush" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-6 w-6 hover:text-white transition-colors" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="h-6 w-6 hover:text-white transition-colors" />
          </a>
          <a href="https://instagram.com/aayusln" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-6 w-6 hover:text-white transition-colors" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="h-6 w-6 hover:text-white transition-colors" />
          </a>
          <a href="https://leetcode.com/u/Aayushyu/" target="_blank" rel="noopener noreferrer">
            <FaCode className="h-6 w-6 hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
