import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail effect
      setTrails(prev => {
        const newTrails = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        if (newTrails.length > 5) {
          return newTrails.slice(-5);
        }
        return newTrails;
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Clean up old trails
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails(prev => prev.filter(trail => Date.now() - trail.id < 100));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${position.x - 10}px`,
          top: `${position.y - 10}px`,
        }}
      />
      
      {/* Cursor trails */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x - 4}px`,
            top: `${trail.y - 4}px`,
            opacity: 1 - (index * 0.2),
            transform: `scale(${1 - (index * 0.1)})`,
          }}
        />
      ))}
    </>
  );
}; 