/* eslint-disable no-unused-vars */
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

/* --- Floating Particles (Optimized) --- */
function FloatingParticles() {
  const ref = useRef();
  const count = 600; // optimized
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.09;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#c084fc"
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.55}
      />
    </points>
  );
}

/* --- Rotating Main Shape (Reduced Metalness for Glow) --- */
function RotatingShape() {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x += 0.002;
      ref.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2.2, 3]} />
      <meshStandardMaterial
        color="#a855f7"
        wireframe
        emissive="#9333ea"
        emissiveIntensity={0.9}
        metalness={0.4}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function HeroAnimation() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ alpha: true }}
      >
        {/* Lights */}
        <ambientLight intensity={0.7} />
        <pointLight position={[4, 4, 4]} intensity={1.8} color="#c084fc" />
        <pointLight position={[-4, -3, -2]} intensity={1} color="#8b5cf6" />

        <FloatingParticles />
        <RotatingShape />

        {/* Postprocessing */}
        <EffectComposer>
          <Bloom intensity={0.9} luminanceThreshold={0.15} />
          <Vignette offset={0.25} darkness={1} />
        </EffectComposer>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
