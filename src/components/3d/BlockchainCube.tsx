import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';
import * as THREE from 'three';

export function BlockchainCube() {
  const cubeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!cubeRef.current) return;
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
    const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    cubeRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial color="#3b82f6" opacity={0.5} transparent />
      <Edges color="#60a5fa" threshold={1} />
    </mesh>
  );
}