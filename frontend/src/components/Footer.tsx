import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">© 2024 Your Name</div>
        <div className="flex space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-6 w-6 hover:text-white transition-colors" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-6 w-6 hover:text-white transition-colors" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="h-6 w-6 hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
