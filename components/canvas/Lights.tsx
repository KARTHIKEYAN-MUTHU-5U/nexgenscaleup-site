import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { PointLight } from 'three';
import { useStore } from '@/store/useStore';
import { COLORS } from '@/lib/constants';

export default function Lights() {
    const { gpuTier } = useStore();
    const cursorLight = useRef<PointLight>(null);

    useFrame(({ pointer, viewport }) => {
        if (cursorLight.current && gpuTier > 1) {
            // Move light with cursor (projected to z=5)
            // pointer is normalized -1 to 1
            const x = (pointer.x * viewport.width) / 2;
            const y = (pointer.y * viewport.height) / 2;
            cursorLight.current.position.set(x, y, 5);
        }
    });

    return (
        <group>
            <ambientLight intensity={0.2} color={COLORS.background} />

            {/* Main Key Light */}
            <directionalLight
                position={[10, 10, 10]}
                intensity={1}
                color={COLORS.tungstenWhite}
                castShadow={gpuTier === 1}
            />

            {/* Cinematic Rim Light (Cyan) */}
            <spotLight
                position={[-10, 5, 10]}
                angle={0.5}
                penumbra={1}
                intensity={2}
                color={COLORS.neonCyan}
            />

            {/* Fill Light (Purple) */}
            <pointLight position={[5, -5, 5]} intensity={0.5} color={COLORS.electricPurple} />

            {/* Interactive Cursor Light (Tier 2+) */}
            {gpuTier > 1 && (
                <pointLight
                    ref={cursorLight}
                    intensity={1.5}
                    distance={10}
                    decay={2}
                    color={COLORS.coreGlow}
                />
            )}
        </group>
    );
}
