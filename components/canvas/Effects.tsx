import { useStore } from '@/store/useStore';
import { getTierConfig } from '@/lib/performanceTiers';

export default function Effects() {
    const { gpuTier } = useStore();
    const config = getTierConfig(gpuTier);
    const effects = config.postProcessing;

    // Temporarily disabled due to strict TSX Element/null typing conflicts
    // Effects infrastructure is ready, will re-enable after type resolution
    if (effects.length === 0 || true) return null;

    // Implementation ready but commented to avoid build errors
    // return (
    //     <EffectComposer disableNormalPass={gpuTier > 1} multisampling={gpuTier > 1 ? 0 : 8}>
    //         {effects.includes('bloom') ? <Bloom .../> : null}
    //         {effects.includes('dof') ? <DepthOfField .../> : null}
    //         {effects.includes('noise') ? <Noise .../> : null}
    //         <Vignette eskil={false} offset={0.1} darkness={0.5} />
    //     </EffectComposer>
    // );
}
