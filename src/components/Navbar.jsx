import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);


  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="w-full max-w-full lg:max-w-7xl xl:max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center h-14 sm:h-16 w-full">
          {/* Logo left with margin */}
          <div className="flex-shrink-0 pl-2 sm:pl-4 md:pl-6 lg:pl-8">
            <a href="#home" className="font-mono text-lg sm:text-xl font-bold text-white">
              Sambhav<span className="text-blue-500">.dev</span>
            </a>
          </div>
          {/* Nav links centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-6 lg:space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">About</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Projects</a>
              <a href="#certificates" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Certificates</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Contact</a>
            </div>
          </div>
          {/* Social icons right */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4 pr-2 sm:pr-4 md:pr-6 lg:pr-8">
            <a href="https://www.linkedin.com/in/kumar-sambhav-965866301/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-lg lg:text-xl"><FaLinkedin /></a>
            <a href="https://github.com/KumarSambhav01" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors text-lg lg:text-xl"><FaGithub /></a>
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-white text-xl sm:text-2xl focus:outline-none ml-auto pr-2 sm:pr-4"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            &#9776;
          </button>
        </div>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-14 sm:top-16 left-0 w-full bg-[rgba(10,10,10,0.98)] backdrop-blur-lg border-b border-white/10 shadow-lg flex flex-col items-center py-4 space-y-3 sm:space-y-4 z-50">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#certificates" className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg" onClick={() => setMenuOpen(false)}>Certificates</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg" onClick={() => setMenuOpen(false)}>Contact</a>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://www.linkedin.com/in/kumar-sambhav-965866301/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-lg sm:text-xl"><FaLinkedin /></a>
              <a href="https://github.com/KumarSambhav01" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors text-lg sm:text-xl"><FaGithub /></a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
