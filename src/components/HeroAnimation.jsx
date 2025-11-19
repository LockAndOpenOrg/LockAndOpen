/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshWobbleMaterial, Sphere, Points, PointMaterial, useTexture } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

// --- Floating Particles ---
function FloatingParticles() {
  const pointsRef = useRef();

  const count = 1000;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 15;
  }

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#b46dff"
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

// --- Rotating Sphere with Glow ---
function RotatingSphere() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x += 0.001;
      meshRef.current.material.emissiveIntensity =
        0.5 + Math.sin(clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2.7, 2]} />
      <meshStandardMaterial
        color="#8e2de2"
        wireframe
        emissive="#a855f7"
        emissiveIntensity={0.9}
        roughness={0.6}
        metalness={0.8}
      />
    </mesh>
  );
}

// --- Background Light Glow Plane ---
function BackgroundGlow() {
  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[0, 0]} />
      <meshBasicMaterial color="#1a0033" transparent opacity={0.9} />
    </mesh>
  );
}

// --- Main Animation ---
export default function HeroAnimation() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <Canvas
  camera={{ position: [0, 0, 8], fov: 60 }}
  style={{ width: "100%", height: "100%", background: "transparent" }}
  gl={{ alpha: true }}
>
  {/* Lighting */}
  <ambientLight intensity={0.3} />
  <pointLight position={[5, 5, 5]} intensity={2.2} color="#b46dff" />
  <pointLight position={[-5, -3, -2]} intensity={1.5} color="#8e2de2" />

  {/* Scene Elements */}
  <BackgroundGlow />
  <FloatingParticles />
  <RotatingSphere />

  {/* Postprocessing Effects */}
  <EffectComposer>
    <Bloom
      intensity={1.2}
      luminanceThreshold={0.2}
      luminanceSmoothing={0.9}
    />
    <Vignette eskil={false} offset={0.2} darkness={1.1} />
  </EffectComposer>

  {/* Interactive Camera */}
  <OrbitControls enableZoom={false} enablePan={false} />
</Canvas>

    </div>
  );
}