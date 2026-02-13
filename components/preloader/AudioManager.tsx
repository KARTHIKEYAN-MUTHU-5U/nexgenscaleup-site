'use client';

import { useAudioReactive } from '@/hooks/useAudioReactive';

export default function AudioManager() {
    // Uses a placeholder path. User needs to provide actual audio file.
    // Shepard tone increases tension/focus.
    useAudioReactive('/audio/shepard-tone.mp3');
    return null;
}
