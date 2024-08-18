import React from "react"

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-gray-400 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">A</div>
        <ul className="flex space-x-8 text-lg">
          <li className="relative group">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
          </li>
          <li className="relative group">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
          </li>
          <li className="relative group">
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
          </li>
          <li className="relative group">
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
