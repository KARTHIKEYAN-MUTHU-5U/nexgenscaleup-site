'use client';

import { Canvas } from '@react-three/fiber';
import { Preload, PerformanceMonitor, ScrollControls, Environment } from '@react-three/drei';
import { Suspense, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { detectGpuTier } from '@/lib/performanceTiers';
import { COLORS } from '@/lib/constants';
import StarField from './Background';
import Effects from './Effects';
import Lights from './Lights';
import CoreGeometry from '@/components/hub/CoreGeometry';
// TypeScript might complain about missing path if file not found, but we created it.
import AudioManager from '@/components/preloader/AudioManager';
import FloatingMenu from '@/components/hub/FloatingMenu';
import GyroController from '@/components/mobile/GyroController';
import Loader from '@/components/preloader/Loader';
import { useKonamiCode } from '@/hooks/useKonamiCode';

export default function Scene() {
    useKonamiCode();
    const { gpuTier, setGpuTier } = useStore();

    useEffect(() => {
        const detected = detectGpuTier();
        setGpuTier(detected);
    }, [setGpuTier]);

    return (
        <Canvas
            dpr={gpuTier === 1 ? [1, 2] : [1, 1.5]}
            gl={{
                antialias: false,
                toneMappingExposure: 1.2,
                powerPreference: 'high-performance'
            }}
            camera={{ position: [0, 0, 20], fov: 45, near: 0.1, far: 200 }}
            style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'auto' }}
        >
            <PerformanceMonitor
                onDecline={() => setGpuTier(Math.min(gpuTier + 1, 3) as 1 | 2 | 3)}
                flipflops={3}
                onFallback={() => setGpuTier(3)}
            />

            <ScrollControls pages={4} damping={0.2} style={{ zIndex: 10 }}>
                {/* Loader runs in its own suspense to show immediately */}
                <Suspense fallback={null}>
                    <Loader />
                </Suspense>

                {/* Main Content */}
                <Suspense fallback={null}>
                    <color attach="background" args={[COLORS.background]} />
                    <fog attach="fog" args={['#000510', 50, 200]} />

                    {/* HDR Environment for realistic reflections (Tier 1 & 2 only) */}
                    {gpuTier <= 2 && <Environment preset="night" />}

                    <StarField />
                    <Lights />

                    <group position={[0, 0, 0]}>
                        <CoreGeometry />
                    </group>

                    <FloatingMenu />

                    <AudioManager />
                    <Effects />
                    <GyroController />
                </Suspense>
            </ScrollControls>

            <Preload all />
        </Canvas>
    );
}
