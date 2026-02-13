'use client';

import dynamic from 'next/dynamic';
import DOMLayer from '@/components/hud/DOMLayer';
import ErrorBoundary from '@/components/ErrorBoundary';
import VisibleHUD from '@/components/hud/VisibleHUD';

// Strict Lazy Loading to prevent SSR of R3F/WASM components
const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      <ErrorBoundary>
        {/* SEO Layer (hidden) */}
        <DOMLayer />

        {/* Visible HUD */}
        <VisibleHUD />

        {/* 3D Scene Layer (Background + Interactive) */}
        <Scene />
      </ErrorBoundary>
    </main>
  );
}
