'use client';

import { useStore } from '@/store/useStore';
import { useEffect, useState } from 'react';

export default function VisibleHUD() {
    const { gpuTier } = useStore();
    const [fps, setFps] = useState(60);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Fade in after mount
        const timer = setTimeout(() => setIsVisible(true), 500);

        // Simple FPS counter
        let frame = 0;
        let lastTime = performance.now();

        const measureFps = () => {
            frame++;
            const currentTime = performance.now();
            if (currentTime >= lastTime + 1000) {
                setFps(Math.round((frame * 1000) / (currentTime - lastTime)));
                frame = 0;
                lastTime = currentTime;
            }
            requestAnimationFrame(measureFps);
        };

        requestAnimationFrame(measureFps);

        return () => clearTimeout(timer);
    }, []);

    const tierName = gpuTier === 1 ? 'HIGH' : gpuTier === 2 ? 'MEDIUM' : 'LOW';
    const tierColor = gpuTier === 1 ? 'text-cyan-400' : gpuTier === 2 ? 'text-purple-400' : 'text-gray-400';

    return (
        <div
            className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            style={{ animation: 'fade-in 1s ease-out' }}
        >
            {/* Top Left - Brand */}
            <div className="absolute top-6 left-6 pointer-events-auto">
                <div className="glass rounded-xl px-6 py-4 glow-cyan premium-shadow">
                    <h1 className="text-2xl font-bold text-gradient mb-1" style={{ fontFamily: 'var(--font-orbitron)' }}>
                        NEXGENSCALEUP
                    </h1>
                    <p className="text-xs text-gray-400 tracking-widest" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                        QUANTUM INTERFACE v2.0
                    </p>
                </div>
            </div>

            {/* Top Right - System Stats */}
            <div className="absolute top-6 right-6 pointer-events-auto">
                <div className="glass rounded-xl px-5 py-3 space-y-2 premium-shadow">
                    <div className="flex items-center justify-between gap-4 text-sm" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                        <span className="text-gray-400">GPU TIER</span>
                        <span className={`font-bold ${tierColor}`}>{tierName}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 text-sm" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                        <span className="text-gray-400">FPS</span>
                        <span className={`font-bold ${fps >= 50 ? 'text-green-400' : fps >= 30 ? 'text-yellow-400' : 'text-red-400'}`}>
                            {fps}
                        </span>
                    </div>
                    <div className="flex items-center justify-between gap-4 text-sm" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                        <span className="text-gray-400">STATUS</span>
                        <span className="font-bold text-cyan-400 animate-pulse-glow">ONLINE</span>
                    </div>
                </div>
            </div>

            {/* Bottom Center - Navigation Hints */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto">
                <div className="glass rounded-full px-8 py-3 glow-purple premium-shadow">
                    <p className="text-sm text-gray-300 text-center" style={{ fontFamily: 'var(--font-inter)' }}>
                        <span className="text-cyan-400 font-semibold">Click</span> an orb to explore •
                        <span className="text-purple-400 font-semibold ml-2">Drag</span> to rotate
                    </p>
                </div>
            </div>

            {/* Bottom Right - Konami Hint */}
            <div className="absolute bottom-6 right-6 pointer-events-auto">
                <div className="glass rounded-lg px-4 py-2 premium-shadow opacity-50 hover:opacity-100 transition-opacity">
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                        ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️ B A
                    </p>
                </div>
            </div>
        </div>
    );
}
