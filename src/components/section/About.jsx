import { RevealOnScroll } from "../RevealOnScroll.jsx";
import { GraduationCap } from "lucide-react"; // For education icons

export const About = () => {
  const skills = {
    Languages: ["C", "C++", "Java (DSA)", "Python", "JavaScript", "TypeScript"],
    Frontend: ["HTML", "CSS", "Tailwind CSS", "React.js", "Next.js"],
    Backend: ["Node.js", "Express.js", "Flask", "Django"],
    Databases: ["SQL", "PostgreSQL", "MongoDB"],
    Libraries: ["Pandas", "NumPy", "TensorFlow"],
    Tools: ["Git", "GitHub", "VS Code", "AI Tools"],
    Design: ["Figma"],
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* About Card */}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-lg text-center">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            {/* Skills Row (Horizontal Scroll) */}
            <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
              {Object.entries(skills).map(([category, items], index) => (
                <div
                  key={index}
                  className="min-w-[250px] snap-start rounded-xl p-6 border border-white/10 shadow-lg bg-white/5 
                             transform transition-all duration-500 hover:-translate-y-1 
                             animate-slideInLeft"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-400">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
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
          <div className="mt-12 p-8 rounded-xl border border-white/10 bg-white/5">
            <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">
              🎓 Education
            </h3>
            <div className="relative border-l-2 border-blue-500/30 ml-4 space-y-8">
              {/* B.Tech */}
              <div className="ml-6 relative">
                <div className="absolute -left-9 top-1 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center">
                  <GraduationCap size={14} />
                </div>
                <span className="bg-blue-500/10 text-blue-400 text-sm px-2 py-1 rounded-md">
                  2023 - 2027
                </span>
                <h4 className="text-lg font-semibold mt-2 text-white">
                  B.Tech in Computer Science and Engineering
                </h4>
                <p className="text-gray-400">SRM University</p>
              </div>

              {/* 12th */}
              <div className="ml-6 relative">
                <div className="absolute -left-9 top-1 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center">
                  <GraduationCap size={14} />
                </div>
                <span className="bg-blue-500/10 text-blue-400 text-sm px-2 py-1 rounded-md">
                  2022 - 2023
                </span>
                <h4 className="text-lg font-semibold mt-2 text-white">
                  12th Standard
                </h4>
                <p className="text-gray-400">DAV Public School</p>
              </div>

              {/* 10th */}
              <div className="ml-6 relative">
                <div className="absolute -left-9 top-1 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center">
                  <GraduationCap size={14} />
                </div>
                <span className="bg-blue-500/10 text-blue-400 text-sm px-2 py-1 rounded-md">
                  2020 - 2021
                </span>
                <h4 className="text-lg font-semibold mt-2 text-white">
                  10th Standard
                </h4>
                <p className="text-gray-400">Sheyn International School</p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
