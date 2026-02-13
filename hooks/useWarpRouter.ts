import { useRouter } from 'next/navigation';
import { useStore } from '@/store/useStore';

export const useWarpRouter = () => {
    const router = useRouter();
    const setIsTransitioning = useStore((state) => state.setIsTransitioning);

    const navigateTo = (path: string) => {
        // 1. Lock UI & Trigger Warp Speed animation state
        setIsTransitioning(true);

        // 2. Play Audio (optional - can serve via AudioContext globally)

        // 3. Wait for visual effect to complete (e.g., 1.5s - matches GSAP timeline)
        setTimeout(() => {
            router.push(path);
            // Reset transition state handled by new page load or cleanup
        }, 1500);
    };

    return { navigateTo };
};
