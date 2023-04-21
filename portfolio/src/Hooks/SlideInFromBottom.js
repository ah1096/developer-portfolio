import { useEffect } from 'react';

export const slideInFromBottom = () => {
    useEffect(() => {
        const el = document.querySelector('.slide-in-bottom');
        el.classList.add('slide-in-bottom-active');
        return () => {
        el.classList.remove('slide-in-bottom-active');
        };
    }, []);
};