import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Projects = () => {
  const [projectType, setProjectType] = useState("new");

  const newProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Personal portfolio built with React and TailwindCSS featuring modern design and smooth animations.",
      tech: ["React", "TailwindCSS", "JavaScript", "Vite"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Full-stack task management application with user authentication and real-time updates.",
      tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
      link: "#",
      github: "#"
    }
  ];

  const clonedProjects = [
    {
      id: 1,
      title: "E-Commerce Clone",
      description: "Amazon-inspired e-commerce platform with shopping cart and payment integration.",
      tech: ["React", "Redux", "Node.js", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Netflix Clone",
      description: "Streaming platform clone with movie browsing and video player functionality.",
      tech: ["React", "Firebase", "TMDB API", "CSS3"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Spotify Clone",
      description: "Music streaming app clone with playlist management and audio controls.",
      tech: ["React", "Spotify API", "Node.js", "PostgreSQL"],
      link: "#",
      github: "#"
    }
  ];

  const currentProjects = projectType === "new" ? newProjects : clonedProjects;

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          
          {/* Project Type Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 border border-white/10 rounded-lg p-1 backdrop-blur-sm">
              <button
                onClick={() => setProjectType("new")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  projectType === "new"
                    ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                🚀 New Projects
              </button>
              <button
                onClick={() => setProjectType("clone")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  projectType === "clone"
                    ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                📋 Clone Projects
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="group p-6 rounded-xl border border-white/10 hover:-translate-y-2 hover:border-blue-500/30 
                         hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer"
                onClick={() => window.open(project.link, '_blank')}
              >
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4 group-hover:scale-105 transform"
                  >
                    View Project →
                  </a>
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-white transition-colors my-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};