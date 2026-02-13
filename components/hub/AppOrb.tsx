import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import { RigidBody, RapierRigidBody } from '@react-three/rapier';
import { useStore } from '@/store/useStore';
import { useWarpRouter } from '@/hooks/useWarpRouter';
import { COLORS } from '@/lib/constants';
import PortalRenderTarget from './PortalRenderTarget';

interface AppOrbProps {
    position: [number, number, number];
    name: string;
    path: string;
    color?: string;
}

export default function AppOrb({ position, name, path, color = COLORS.neonCyan }: AppOrbProps) {
    const [hovered, setHover] = useState(false);
    const { gpuTier, isTransitioning } = useStore();
    const { navigateTo } = useWarpRouter();
    const rbRef = useRef<RapierRigidBody>(null);

    useFrame((state) => {
        if (!rbRef.current || gpuTier < 2) return;

        // "Zero-G" Cursor Gravity
        const { x, y } = state.pointer;
        const viewport = state.viewport;

        // Project cursor to world space roughly at z=0
        const cursorX = (x * viewport.width) / 2;
        const cursorY = (y * viewport.height) / 2;

        const orbPos = rbRef.current.translation();
        const dist = Math.sqrt(
            Math.pow(cursorX - orbPos.x, 2) +
            Math.pow(cursorY - orbPos.y, 2)
        );

        // If cursor is close (radius 4), pull orb towards it
        if (dist < 4) {
            const strength = (4 - dist) * 0.2; // Stronger when closer
            const force = {
                x: (cursorX - orbPos.x) * strength,
                y: (cursorY - orbPos.y) * strength,
                z: 0 // Keep in plane mainly, or slight pull
            };
            // Wake up body if sleeping
            rbRef.current.wakeUp();
            rbRef.current.applyImpulse(force, true);
        }

        // Return to home position (weak spring)
        const target = { x: position[0], y: position[1], z: position[2] };
        const homeForce = {
            x: (target.x - orbPos.x) * 0.05,
            y: (target.y - orbPos.y) * 0.05,
            z: (target.z - orbPos.z) * 0.05
        };
        rbRef.current.applyImpulse(homeForce, true);
    });

    const handleClick = () => {
        if (isTransitioning) return;
        navigateTo(path);
    };

    return (
        <RigidBody
            ref={rbRef}
            position={position}
            colliders="ball"
            restitution={0.8}
            linearDamping={0.5}
            angularDamping={0.5}
        // Enable physics only if tier allows (handled by parent Physics provider mostly, or custom logic)
        >
            <mesh
                onClick={handleClick}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 1.2 : 1.0}
            >
                <sphereGeometry args={[1, 64, 64]} />
                <meshPhysicalMaterial
                    transmission={0.9}
                    roughness={0.1}
                    thickness={1}
                    ior={1.5}
                    color={hovered ? 'white' : color}
                    transparent
                >
                    {/* Lazy Portal: Only render if hovered and Tier > 1 */}
                    {hovered && gpuTier > 1 ? (
                        <PortalRenderTarget>
                            <Text fontSize={0.5} color={color} anchorX="center" anchorY="middle">
                                {name.toUpperCase()}
                            </Text>
                            <mesh position={[0, 0, -2]}>
                                <planeGeometry args={[10, 10]} />
                                <meshBasicMaterial color={color} wireframe />
                            </mesh>
                        </PortalRenderTarget>
                    ) : null}
                </meshPhysicalMaterial>
            </mesh>

            <Html position={[0, -1.8, 0]} center pointerEvents="none" distanceFactor={15}>
                <div
                    className={`text-xs font-mono tracking-widest px-2 py-1 rounded border transition-all duration-300 select-none`}
                    style={{
                        color: 'white',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        borderColor: color,
                        opacity: hovered ? 1 : 0.6,
                        transform: hovered ? 'scale(1.1)' : 'scale(1)'
                    }}
                >
                    {name}
                </div>
            </Html>
        </RigidBody>
    );
}
