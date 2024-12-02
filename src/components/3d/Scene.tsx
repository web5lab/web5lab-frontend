import React, { useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BlockchainCube } from './BlockchainCube';
import { FloatingParticles } from './FloatingParticles';

export function Scene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };

    // Initial dimensions
    updateDimensions();

    // Handle window resize
    window.addEventListener('resize', updateDimensions);

    // Set mounted state
    setMounted(true);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      setMounted(false);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      {dimensions.width > 0 && dimensions.height > 0 && (
        <Canvas
          camera={{ position: [0, 0, 8] }}
          style={{ 
            width: dimensions.width,
            height: dimensions.height,
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none'
          }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <BlockchainCube />
          <FloatingParticles />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      )}
    </div>
  );
}