import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import * as random from 'maath/random/dist/maath-random.esm';
import { useStore } from '@/store/useStore';

export default function StarField() {
    const ref = useRef<THREE.Points>(null);
    const { gpuTier, isTransitioning } = useStore();

    // Adjust count based on tier
    const count = gpuTier === 1 ? 6000 : gpuTier === 2 ? 3000 : 1000;

    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        // Generate positions in a sphere
        random.inSphere(positions, { radius: 100 });

        // Generate colors (mix of cyan, purple, white)
        // We'll process this manually to get specific palette distribution
        for (let i = 0; i < count; i++) {
            const r = Math.random();
            // 60% White/Grey, 20% Cyan, 20% Purple
            if (r > 0.4) {
                // White/Grey
                colors[i * 3] = 0.8;
                colors[i * 3 + 1] = 0.8;
                colors[i * 3 + 2] = 1.0;
            } else if (r > 0.2) {
                // Cyan
                colors[i * 3] = 0.0;
                colors[i * 3 + 1] = 0.9; // 0xF0
                colors[i * 3 + 2] = 1.0; // 0xFF
            } else {
                // Purple
                colors[i * 3] = 0.4; // 0x70
                colors[i * 3 + 1] = 0.0;
                colors[i * 3 + 2] = 1.0; // 0xFF
            }
        }

        return [positions, colors];
    }, [count]);

    useFrame((state, delta) => {
        if (ref.current) {
            // Warp Speed Logic
            const speed = isTransitioning ? 20 : 0.5;
            ref.current.rotation.x -= delta / 50;
            ref.current.rotation.y -= delta / 60 * speed;

            // Stretch effect during transition
            const targetScale = isTransitioning ? 5 : 1;
            ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, targetScale, 0.1);
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                key={count} // Force remount if count changes to avoid buffer resize error
                ref={ref}
                positions={positions}
                colors={colors}
                stride={3}
                frustumCulled={false}
            >
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}
