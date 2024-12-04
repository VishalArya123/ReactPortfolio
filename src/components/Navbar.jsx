import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <nav className="bg-[#323232] text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold hover:text-[#FFFDD0] transition-all duration-300">MyPortfolio</h1>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-[#FFFDD0] transition-all duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#FFFDD0] transition-all duration-300">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-[#FFFDD0] transition-all duration-300">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#FFFDD0] transition-all duration-300">Contact</Link>
          </li>
        </ul>
        <button onClick={toggleDarkMode} className="text-2xl hover:text-[#FFFDD0] transition-all duration-300">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <FaBars className="text-2xl md:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
