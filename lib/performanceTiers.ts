export interface TierConfig {
    tier: number;
    name: string;
    particleCount: number;
    usePhysics: boolean;
    postProcessing: string[];
    shaderQuality: 'high' | 'medium' | 'low';
    shadows: 'soft' | 'basic' | false;
    targetFPS: number;
}

// Fallback detection since use-gpu-tier is unavailable
// We will refine this with actual FPS monitoring in the Scene component

export const getTierConfig = (tier: number): TierConfig => {
    switch (tier) {
        case 1: return {
            tier: 1,
            name: 'High Performance',
            particleCount: 5000,
            usePhysics: true,
            postProcessing: ['bloom', 'dof', 'noise'],
            shaderQuality: 'high',
            shadows: 'soft',
            targetFPS: 60
        };
        case 2: return {
            tier: 2,
            name: 'Medium Performance',
            particleCount: 1000,
            usePhysics: true, // Simplified physics
            postProcessing: ['bloom'],
            shaderQuality: 'medium',
            shadows: 'basic',
            targetFPS: 45
        };
        case 3:
        default: return {
            tier: 3,
            name: 'Mobile/Low Power',
            particleCount: 200,
            usePhysics: false, // CSS animations or baked physics
            postProcessing: [],
            shaderQuality: 'low', // MatCap
            shadows: false,
            targetFPS: 30
        };
    }
};

export const detectGpuTier = (): 1 | 2 | 3 => {
    if (typeof window === 'undefined') return 2;

    const ua = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

    if (isMobile) return 3;

    // Basic heuristic: logic cores. 
    // 8+ cores usually means decent desktop/laptop (Tier 1 candidate)
    // <4 cores -> Tier 3
    // 4-6 cores -> Tier 2
    const concurrency = navigator.hardwareConcurrency || 4;

    if (concurrency >= 8) return 1;
    if (concurrency >= 4) return 2;

    return 3;
};
