import { useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { Icosahedron, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { liquidMetalVertex, liquidMetalFragment } from '@/shaders/liquidMetal';
import { useStore } from '@/store/useStore';
import { COLORS } from '@/lib/constants';

// Create custom shader material
const LiquidMetalMaterial = shaderMaterial(
    {
        u_time: 0,
        u_color: new THREE.Color(COLORS.neonCyan),
        u_distortion: 0.0,
    },
    liquidMetalVertex,
    liquidMetalFragment
);

// Register material to make it available as JSX element <liquidMetalMaterial />
extend({ LiquidMetalMaterial });

// Add type definition for TS
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            liquidMetalMaterial: any;
        }
    }
}

export default function CoreGeometry() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const materialRef = useRef<any>(null);
    const meshRef = useRef<THREE.Mesh>(null);
    const { audioFrequency } = useStore();

    useFrame((state, delta) => {
        if (materialRef.current) {
            materialRef.current.u_time += delta;

            // Audio reactivity: map 0-255 frequency to 0.0-1.0 distortion
            // Smooth interpolation
            const targetDistortion = (audioFrequency / 255) * 2.0;
            materialRef.current.u_distortion = THREE.MathUtils.lerp(
                materialRef.current.u_distortion,
                targetDistortion,
                0.1
            );
        }

        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.1;
            meshRef.current.rotation.z += delta * 0.05;
        }
    });

    return (
        <group>
            <Icosahedron args={[2, 4]} ref={meshRef}>
                <liquidMetalMaterial
                    ref={materialRef}
                    transparent
                    side={THREE.DoubleSide}
                />
            </Icosahedron>

            {/* Inner glow core */}
            <pointLight distance={5} intensity={2} color={COLORS.coreGlow} decay={2} />
        </group>
    );
}
