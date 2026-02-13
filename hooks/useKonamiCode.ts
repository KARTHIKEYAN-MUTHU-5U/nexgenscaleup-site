import { useEffect } from 'react';
import { useStore } from '@/store/useStore';

const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

export const useKonamiCode = () => {
    const { setGpuTier } = useStore();

    useEffect(() => {
        let history: string[] = [];

        const handleKeyDown = (e: KeyboardEvent) => {
            history.push(e.key);
            if (history.length > KONAMI_CODE.length) history.shift();

            if (history.join('') === KONAMI_CODE.join('')) {
                console.log("GOD MODE ACTIVATED");
                setGpuTier(1);
                alert("GOD MODE UNLOCKED: MAXIMUM PERFORMANCE ENABLED");
                history = [];
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [setGpuTier]);
};
