export const COLORS = {
    background: '#050505',      // Vantablack
    neonCyan: '#00F0FF',        // Primary accent
    electricPurple: '#7000FF',  // Secondary accent
    tungstenWhite: '#F8F8FF',   // Text/UI
    coreGlow: '#00FFAA',        // Central pulse
} as const;

export const PHYSICS = {
    gravity: [0, 0, 0] as [number, number, number], // Zero-G by default
    cursorForce: 20, // Strength of cursor gravity
    damping: 0.9,    // Linear damping
    angularDamping: 0.9, // Rotational damping
};

export const CAMERA = {
    fov: 45,
    position: [0, 0, 20] as [number, number, number],
    near: 0.1,
    far: 1000,
};
