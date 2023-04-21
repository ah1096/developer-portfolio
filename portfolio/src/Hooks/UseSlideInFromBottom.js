import { useEffect } from 'react';

export const useSlideInFromBottom = () => {
useEffect(() => {
    const slideInElements = document.querySelectorAll('.slide-in-bottom');

    const slideInObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('slide-in-bottom-visible');
                slideInObserver.unobserve(entry.target);
            }
        });
    });

    slideInElements.forEach(el => {
        slideInObserver.observe(el);
    });

    return () => {
        slideInObserver.disconnect();
    };
}, []);

  return null;
};