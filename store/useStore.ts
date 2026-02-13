import { create } from 'zustand';
import { Vector3 } from 'three';

interface AppStore {
    // Navigation
    activeAppId: string | null;
    isTransitioning: boolean;
    setActiveApp: (id: string | null) => void;
    setIsTransitioning: (isTransitioning: boolean) => void;

    // Performance
    gpuTier: 1 | 2 | 3;
    setGpuTier: (tier: 1 | 2 | 3) => void;

    // Audio
    soundEnabled: boolean;
    audioFrequency: number; // Real-time from analyzer
    updateAudioFrequency: (freq: number) => void;

    // Camera
    cameraTarget: Vector3;
    isZooming: boolean;
}

export const useStore = create<AppStore>((set) => ({
    activeAppId: null,
    isTransitioning: false,
    setActiveApp: (id) => set({ activeAppId: id }),
    setIsTransitioning: (isTransitioning) => set({ isTransitioning }),

    gpuTier: 2, // Default to medium, updated by performanceTiers.ts on load
    setGpuTier: (tier) => set({ gpuTier: tier }),

    soundEnabled: true,
    audioFrequency: 0,
    updateAudioFrequency: (freq) => set({ audioFrequency: freq }),

    cameraTarget: new Vector3(0, 0, 0),
    isZooming: false,
}));
