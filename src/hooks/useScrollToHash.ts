import { useEffect } from 'react';

export function useScrollToHash() {
  useEffect(() => {
    const getNavbarHeight = () => {
      // Get the computed value of the offcanvas-top-padding
      const testElement = document.createElement('div');
      testElement.className = 'offcanvas-top-padding';
      testElement.style.visibility = 'hidden';
      document.body.appendChild(testElement);
      const height = parseInt(window.getComputedStyle(testElement).paddingTop);
      document.body.removeChild(testElement);
      return height;
    };

    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const navbarHeight = getNavbarHeight();
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };
    
    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);
}