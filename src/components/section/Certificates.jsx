import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2024",
      description: "Complete web development course covering HTML, CSS, JavaScript, and modern frameworks.",
      image: "/cert-1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "React.js Fundamentals",
      issuer: "Udemy",
      date: "2024",
      description: "Comprehensive React.js course with hands-on projects and real-world applications.",
      image: "/cert-2.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Python Programming",
      issuer: "Udemy",
      date: "2023",
      description: "Advanced Python programming concepts ",
      image: "/cert-3.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "Data Structures & Algorithms",
      issuer: "Udemy",
      date: "2023",
      description: "Problem-solving skills and algorithmic thinking certification.",
      image: "/cert-4.jpg",
      link: "#"
    }
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Certificates & Achievements
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative p-4 sm:p-5 md:p-6 rounded-xl border border-blue-900/40 bg-[#0a1122] bg-opacity-80 
                         hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] 
                         transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => window.open(cert.link, '_blank')}
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/20 opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                {/* Certificate image placeholder */}
                <div className="w-full h-32 sm:h-40 md:h-48 mb-3 sm:mb-4 rounded-lg bg-gradient-to-br from-blue-900/30 to-cyan-900/20 
                              border border-blue-900/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-cyan-900/40 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl text-yellow-600">
                    🏆
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors drop-shadow leading-tight">
                      {cert.title}
                    </h3>
                    <span className="text-xs sm:text-sm text-white bg-blue-500/80 px-2 py-1 rounded-full shadow">
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="text-blue-200 font-semibold mb-2 text-sm sm:text-base">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  
                  {/* Hover effect indicator */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              More certificates coming soon...
            </p>
            <div className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
              <span className="text-sm sm:text-base">View all certificates</span>
              <span className="text-lg sm:text-xl">→</span>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}; 