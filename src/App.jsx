import React, { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { CustomCursor } from "./components/CustomCursor";
import { Home } from "./components/section/Home";
import { About } from "./components/section/About";
import { Projects } from "./components/section/Project";
import { Contact } from "./components/section/Contact";
import { Certificates } from "./components/section/Certificates";
import { StarBackground } from "./components/StarBackground"; // ⭐ Add this
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Global smooth and slow scroll enhancement for anchor links
  // Applies to all anchor links throughout the page
  // Only runs once on mount
  React.useEffect(() => {
    const handleSlowScroll = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            // Use native smooth scroll if available
            if ('scrollBehavior' in document.documentElement.style) {
              window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
            } else {
              // Custom slower scroll fallback
              const startY = window.scrollY;
              const endY = target.getBoundingClientRect().top + window.scrollY;
              const duration = 1200; // ms, slower scroll
              let startTime = null;
              function scrollStep(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
                window.scrollTo(0, startY + (endY - startY) * ease);
                if (progress < 1) {
                  window.requestAnimationFrame(scrollStep);
                }
              }
              window.requestAnimationFrame(scrollStep);
            }
          }
        }
      }
    };
    document.addEventListener('click', handleSlowScroll);
    return () => {
      document.removeEventListener('click', handleSlowScroll);
    };
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        {/* ⭐ Starry background */}
        <StarBackground />

        {/* Foreground content */}
        <div className="relative z-10 w-full max-w-full lg:max-w-7xl xl:max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <CustomCursor />
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Certificates />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
