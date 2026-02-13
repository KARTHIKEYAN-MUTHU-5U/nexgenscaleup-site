import { ReactNode, useRef } from 'react';
import { RenderTexture, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function PortalRenderTarget({ children }: { children: ReactNode }) {
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);

    useFrame((state) => {
        if (cameraRef.current) {
            // Subtle drift for "alive" feel
            cameraRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
            cameraRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.5;
        }
    });

    return (
        <RenderTexture attach="map">
            <PerspectiveCamera makeDefault manual aspect={1} position={[0, 0, 10]} ref={cameraRef} />
            <color attach="background" args={['#050510']} />
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />
            {children}
        </RenderTexture>
    );
}
