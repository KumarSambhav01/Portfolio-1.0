import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);


  return ( 
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Sambhav<span className="text-blue-500">.dev</span>
          </a>

          {/* Mobile Menu Button */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Nav Links + Social Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#certificates"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Certificates
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-4">
              <a
                href="https://www.linkedin.com/in/kumar-sambhav-965866301/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/KumarSambhav01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100 transition-colors text-xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
