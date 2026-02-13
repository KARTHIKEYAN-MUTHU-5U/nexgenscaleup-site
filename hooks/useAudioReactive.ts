import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Howl, Howler } from 'howler';
import { useStore } from '@/store/useStore';

export const useAudioReactive = (url?: string) => {
    const { soundEnabled, updateAudioFrequency } = useStore();
    const analyzerRef = useRef<AnalyserNode | null>(null);
    const dataArrayRef = useRef<Uint8Array | null>(null);
    const soundRef = useRef<Howl | null>(null);

    useEffect(() => {
        if (!soundEnabled || !url) return;

        // Create Howl instance
        soundRef.current = new Howl({
            src: [url],
            loop: true,
            volume: 0.5,
            autoplay: true,
            html5: false // Must be false to use Web Audio API features
        });

        // Connect analyzer
        const ctx = Howler.ctx;
        if (ctx) {
            analyzerRef.current = ctx.createAnalyser();
            analyzerRef.current.fftSize = 256;
            dataArrayRef.current = new Uint8Array(analyzerRef.current.frequencyBinCount);

            // Connect Howler output to analyzer
            // Howler 2.x usually exposes masterGain. 
            // We connect the global master node to our analyzer, or just assume global output.
            // NOTE: This grabs ALL audio. For specific sound, we'd need to access sound._sounds[0]._node
            Howler.masterGain.connect(analyzerRef.current);
            // Do NOT connect analyzer to destination again, masterGain is already connected.
        }

        return () => {
            soundRef.current?.unload();
            try {
                if (analyzerRef.current) {
                    Howler.masterGain.disconnect(analyzerRef.current);
                }
            } catch (e) { /* ignore cleanup errors */ }
        };
    }, [url, soundEnabled]);

    useFrame(() => {
        if (analyzerRef.current && dataArrayRef.current) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            analyzerRef.current.getByteFrequencyData(dataArrayRef.current as any);
            // Average of low frequencies (bass) - first 10 bins
            let sum = 0;
            const bins = 10;
            for (let i = 0; i < bins; i++) {
                sum += dataArrayRef.current[i];
            }
            const avg = sum / bins;
            updateAudioFrequency(avg); // 0-255
        }
    });
};
