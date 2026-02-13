import { Physics, RigidBody } from '@react-three/rapier';
import AppOrb from './AppOrb';
import { COLORS } from '@/lib/constants';

const apps = [
    { name: 'CRM', path: '/app/crm', position: [5, 0, 0], color: COLORS.neonCyan },
    { name: 'Analytics', path: '/app/analytics', position: [-5, 2, 0], color: COLORS.electricPurple },
    { name: 'Finance', path: '/app/finance', position: [0, 5, 0], color: COLORS.coreGlow },
    { name: 'Security', path: '/app/security', position: [0, -5, 0], color: '#FF0055' },
];

export default function FloatingMenu() {
    // If Tier 3 (mobile/low), we might want to disable physics or use simplified layout
    // But Rapier is efficient, so we'll try to keep it everywhere if possible, 
    // or just static layout for Tier 3 handled inside AppOrb or via conditionally rendering Physics.

    // For now, enable physics for all tiers as Rapier WASM is fast.
    // We set gravity to 0 for space effect.

    return (
        <Physics gravity={[0, 0, 0]}>
            {apps.map((app) => (
                <AppOrb
                    key={app.name}
                    name={app.name}
                    path={app.path}
                    position={app.position as [number, number, number]}
                    color={app.color}
                />
            ))}

            {/* Invisible collider for center core to prevent orbs from clipping into it */}
            <RigidBody type="fixed" colliders="ball" position={[0, 0, 0]}>
                <mesh visible={false}>
                    <sphereGeometry args={[2.2]} />
                </mesh>
            </RigidBody>
        </Physics>
    );
}
