"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Earth from '../3dObjects/Earth';
import { OrbitControls } from '@react-three/drei';

const EarthModel = () => {
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    const handleRotation = () => {
      setRotation((prevRotation) => {
        const newRotation = [...prevRotation];
        newRotation[1] += 0.03;
        return newRotation;
      });
    };

    const intervalId = setInterval(handleRotation, 16);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 0],
      }}
      style={{
        backgroundColor: '#fff',
        width: '500px',
        height: '500px'
      }}
    >
      <ambientLight intensity={2.0} />
      <directionalLight intensity={2.0} />
      <Suspense fallback={null}>
        <Earth scale={2.0} position={[0, 0, 0]} rotation={rotation} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2} />
    </Canvas>
  );
};

export default EarthModel;