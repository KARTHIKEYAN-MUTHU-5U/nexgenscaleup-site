import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { COLORS } from '@/lib/constants';

// Simple "N" logo shape points or just a sphere for MVP
const generateLogoPoints = (count: number) => {
    const points = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        // Generate points on a sphere surface for now (abstract core)
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 2;

        points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        points[i * 3 + 2] = r * Math.cos(phi);
    }
    return points;
};

export default function ParticleLogo() {
    const count = 2000;
    const points = useMemo(() => generateLogoPoints(count), []);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref = useRef<any>(null);
    const timeRef = useRef(0);

    useFrame((state, delta) => {
        timeRef.current += delta;

        // Animation: Chaos -> Order
        if (ref.current) {
            // Rotate
            ref.current.rotation.y += delta * 0.5;

            // Pulse
            const scale = 1 + Math.sin(timeRef.current * 2) * 0.05;
            ref.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <group>
            <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    vertexColors={false}
                    color={COLORS.neonCyan}
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}
