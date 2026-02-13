import { useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useStore } from '@/store/useStore';

export default function GyroController() {
    const { gpuTier } = useStore();
    const { camera } = useThree();

    // Only run on Tier 3 (mobile likely) or if device orientation available
    // But we use gpuTier as proxy for now. Ideally check capability.

    useEffect(() => {
        const handleOrientation = () => {
            // We just need to know it exists to start enabling
        };

        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', handleOrientation);
        }
        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
        };
    }, []);

    useFrame((state) => {
        if (gpuTier !== 3) return; // Only active on low tier/mobile

        // Mock parallax with mouse for testing on desktop if needed, 
        // but for real mobile we'd read device orientation.
        // Since R3F doesn't have built-in easy device orientation hook without controls,
        // we assume ScrollControls handles mostly.
        // This component adds subtle tilt.

        const time = state.clock.getElapsedTime();
        // Idle drift
        camera.rotation.z = Math.sin(time * 0.2) * 0.02;
    });

    return null;
}
