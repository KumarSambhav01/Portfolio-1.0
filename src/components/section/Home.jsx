import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 sm:px-6 md:px-8">
          <div className="mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <img 
  src="/profile photo.jpg" 
  alt="Kumar Sambhav" 
  className="w-full h-full object-cover"
  onError={(e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  }}
/>

              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">
                KS
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight px-2">
            Hi, I'm Kumar Sambhav
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto px-2 leading-relaxed">
            I'm a B.Tech Computer Science student passionate about building innovative web applications. 
            Currently studying at SRM University, I love exploring new technologies and creating solutions 
            that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4">
            <a
              href="#projects"
              className="w-full sm:w-auto bg-blue-500 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] text-sm sm:text-base"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto border border-blue-500/50 text-blue-500 py-2.5 sm:py-3 px-4 sm:px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
