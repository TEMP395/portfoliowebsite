import { useEffect, useRef } from 'react';

export function Skills() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollText = () => {
      if (textRef.current) {
        textRef.current.scrollLeft += 1.5;
        
        if (textRef.current.scrollLeft >= textRef.current.scrollWidth / 2) {
          textRef.current.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(scrollText, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-[1800px] mx-auto px-[120px]">
        <h2 className="text-[36px] font-semibold font-sans mb-8">My Analytical Skills</h2>
        
        <div className="w-full overflow-hidden rounded-2xl mb-8">
          <div className="relative bg-gray-800 aspect-[18/5]">
            <img
              src="src/assets/images/skills overview.png"
              alt="Skills Overview Placeholder"
              className="w-full h-full object-cover absolute inset-0"
            />
            <img
              src="/src/assets/images/skills overview.jpg"
              alt="Skills Overview"
              className="w-full h-full object-cover absolute inset-0"
              sizes="(max-width: 640px) 100vw, 
                     (max-width: 1024px) 90vw,
                     1800px"
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />
          <div
            ref={textRef}
            className="overflow-hidden whitespace-nowrap py-4"
          >
            <div className="inline-block whitespace-nowrap">
              <span className="text-lg mx-8">Data Analysis</span>
              <span className="text-lg mx-8">•</span>
              <span className="text-lg mx-8">Project Management</span>
              <span className="text-lg mx-8">•</span>
              <span className="text-lg mx-8">Strategic Planning</span>
              <span className="text-lg mx-8">•</span>
              <span className="text-lg mx-8">Research</span>
              <span className="text-lg mx-8">•</span>
              <span className="text-lg mx-8">Decision Making</span>
              {/* Duplicate for seamless loop */}
              <span className="text-lg mx-8">Data Analysis</span>
              <span className="text-lg mx-8">•</span>
              <span className="text-lg mx-8">Project Management</span>
              <span className="text-lg mx-8">•</span>
              <span className="text-lg mx-8">Strategic Planning</span>
              <span className="text-lg mx-8">•</span>
              <span className="text-lg mx-8">Research</span>
              <span className="text-lg mx-8">•</span>
              <span className="text-lg mx-8">Decision Making</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}