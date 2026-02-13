import { useProgress, Html } from '@react-three/drei';
import { useState, useEffect } from 'react';
import ParticleLogo from './ParticleLogo';

export default function Loader() {
    const { progress } = useProgress();
    const [finished, setFinished] = useState(false);

    // We can use this component inside Canvas (3D loader) or outside (2D loader).
    // Implementation plan says "Procedural wireframe logo assembly... interactive particle mini-game".
    // Best to put it inside Canvas.

    useEffect(() => {
        if (progress === 100) {
            // Delay finish to show logo animation
            setTimeout(() => setFinished(true), 2000); // 2s boot sequence
        }
    }, [progress]);

    if (finished) return null;

    return (
        <group position={[0, 0, 5]}>
            {/* Positioned in front of camera */}
            <ParticleLogo />

            <Html center>
                <div className="font-mono text-xs text-white tracking-widest mt-20">
                    SYSTEM BOOT... {Math.round(progress)}%
                </div>
            </Html>
        </group>
    );
}
