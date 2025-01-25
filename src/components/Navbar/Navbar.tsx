import { useCallback } from 'react';
import { ActionButtons } from './ActionButtons';
import { NavLinks } from './NavLinks';
import { Logo } from './Logo';

export function Navbar() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fixed top-0 w-full flex justify-center items-center px-4 sm:px-6 lg:px-8 py-3 md:py-4 bg-black/30 backdrop-blur-md z-50">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        <Logo onClick={scrollToTop} />
        
        <nav className="flex items-center">
          <div className="flex items-center gap-4 px-4 md:px-6 py-2 md:py-3 bg-zinc-800/50 backdrop-blur-md rounded-full">
            <NavLinks />
            <ActionButtons />
          </div>
        </nav>
      </div>
    </div>
  );
}