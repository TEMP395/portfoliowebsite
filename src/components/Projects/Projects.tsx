import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

const projects = [
  { 
    id: 1, 
    image: '/src/assets/images/autism_p.png',
    link: 'https://github.com/kathisnehith/Autism-Behavior-Recognition-ML'
  },
  { 
    id: 2, 
    image: '/src/assets/images/medicare_p.png',
    link: 'https://github.com/kathisnehith/Medicare_IP_hospital-Analysis-Viz'
  },
  { 
    id: 3, 
    image: '/src/assets/images/nyc_p.png',
    link: 'https://github.com/kathisnehith/NYC311-requests-ETL-pipeline'
  },
  { 
    id: 4, 
    image: '/src/assets/images/visionclaims_p.png',
    link: 'https://github.com/kathisnehith/Medicare-claims-vision-Analysis'
  },
  { 
    id: 5, 
    image: '/src/assets/images/austin_p.png',
    link: 'https://public.tableau.com/app/profile/snehith.reddy.kathi/viz/APDDashboard/Dashboard1'
  },
];

export function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const infiniteProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (!isHovered && sliderRef.current) {
      intervalId = setInterval(() => {
        const cardWidth = sliderRef.current?.firstElementChild?.clientWidth ?? 442;
        const newScrollLeft = (sliderRef.current?.scrollLeft || 0) + cardWidth;
        const maxScroll = (sliderRef.current?.scrollWidth || 0) - (sliderRef.current?.clientWidth || 0);

        if (newScrollLeft >= maxScroll - 100) {
          if (sliderRef.current) sliderRef.current.scrollLeft = 0;
        } else {
          sliderRef.current?.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }, 2000); // Changed to 2 seconds
    }

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstElementChild?.clientWidth ?? 442;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      
      const newScrollLeft = sliderRef.current.scrollLeft + scrollAmount;
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      
      if (newScrollLeft >= maxScroll - 100) {
        sliderRef.current.scrollLeft = 0;
      }
      else if (newScrollLeft <= 0) {
        sliderRef.current.scrollLeft = maxScroll;
      }
      else {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-[1800px] mx-auto px-[120px]">
        <h2 className="text-[36px] font-semibold font-sans mb-8">Explore the Projects</h2>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {infiniteProjects.map((project, index) => (
              <ProjectCard
                key={`${project.id}-${index}`}
                {...project}
                index={index}
              />
            ))}
          </div>
          
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={() => scroll('left')}
              className="bg-white/30 hover:bg-white/40 rounded-full p-2 transition-all hover:scale-110 shadow-lg shadow-black/20 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-white/30 hover:bg-white/40 rounded-full p-2 transition-all hover:scale-110 shadow-lg shadow-black/20 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
