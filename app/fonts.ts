import { Orbitron, Inter, JetBrains_Mono } from 'next/font/google';

// Headings - Futuristic, Sci-Fi
export const orbitron = Orbitron({
    subsets: ['latin'],
    weight: ['400', '500', '700', '900'],
    variable: '--font-orbitron',
    display: 'swap',
});

// Body - Clean, Modern, Readable
export const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-inter',
    display: 'swap',
});

// Code/Technical - Monospace
export const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-jetbrains',
    display: 'swap',
});
