import { RevealOnScroll } from "../RevealOnScroll.jsx";
import { GraduationCap } from "lucide-react"; // For education icons

export const About = () => {
  const skills = {
    Languages: ["C", "C++", "Java (DSA)", "Python", "JavaScript", "TypeScript"],
    Frontend: ["HTML", "CSS", "Tailwind CSS", "React.js", "Next.js"],
    Backend: ["Node.js", "Express.js", "Flask", "Django"],
    Databases: ["SQL", "PostgreSQL", "MongoDB"],
    Libraries: ["Pandas", "NumPy", "TensorFlow"],
    Tools: ["Git", "GitHub", "AI Tools"],
    Design: ["Figma"],
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* About Card */}
          <div className="rounded-xl p-4 sm:p-6 md:p-8 border-white/10 border hover:-translate-y-1 transition-all mb-6 sm:mb-8 md:mb-12">
            <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg text-center leading-relaxed">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            {/* Skills Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <div
                  key={index}
                  className="w-full snap-start rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 shadow-lg bg-white/5 transform transition-all duration-500 hover:-translate-y-1 animate-slideInLeft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {items.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-500/10 text-blue-400 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20 
                                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section (Timeline Style) */}
          <div className="mt-4 sm:mt-6 md:mt-12 p-4 sm:p-6 md:p-8 rounded-xl border border-white/10 bg-white/5">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-blue-400">
              🎓 Education
            </h3>
            <div className="relative border-l-2 border-blue-500/30 ml-2 sm:ml-4 space-y-6 sm:space-y-8">
              {/* B.Tech */}
              <div className="ml-4 sm:ml-6 relative">
                <div className="absolute -left-7 sm:-left-9 top-1 bg-blue-500 text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
                  <GraduationCap size={12} className="sm:hidden" />
                  <GraduationCap size={14} className="hidden sm:block" />
                </div>
                <span className="bg-blue-500/10 text-blue-400 text-xs sm:text-sm px-2 py-1 rounded-md">
                  2023 - 2027
                </span>
                <h4 className="text-base sm:text-lg font-semibold mt-2 text-white leading-tight">
                  B.Tech in Computer Science and Engineering
                </h4>
                <p className="text-gray-400 text-sm sm:text-base">SRM University</p>
              </div>

              {/* 12th */}
              <div className="ml-4 sm:ml-6 relative">
                <div className="absolute -left-7 sm:-left-9 top-1 bg-blue-500 text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
                  <GraduationCap size={12} className="sm:hidden" />
                  <GraduationCap size={14} className="hidden sm:block" />
                </div>
                <span className="bg-blue-500/10 text-blue-400 text-xs sm:text-sm px-2 py-1 rounded-md">
                  2022 - 2023
                </span>
                <h4 className="text-base sm:text-lg font-semibold mt-2 text-white leading-tight">
                  12th Standard
                </h4>
                <p className="text-gray-400 text-sm sm:text-base">DAV Public School</p>
              </div>

              {/* 10th */}
              <div className="ml-4 sm:ml-6 relative">
                <div className="absolute -left-7 sm:-left-9 top-1 bg-blue-500 text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
                  <GraduationCap size={12} className="sm:hidden" />
                  <GraduationCap size={14} className="hidden sm:block" />
                </div>
                <span className="bg-blue-500/10 text-blue-400 text-xs sm:text-sm px-2 py-1 rounded-md">
                  2020 - 2021
                </span>
                <h4 className="text-base sm:text-lg font-semibold mt-2 text-white leading-tight">
                  10th Standard
                </h4>
                <p className="text-gray-400 text-sm sm:text-base">Sheyn International School</p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
