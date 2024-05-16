"use client";
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import AboutMe3D from '../3dObjects/AboutMe3D';
import { OrbitControls } from '@react-three/drei';

const AboutMe3DModel = () => {
  const [canvasSize, setCanvasSize] = useState({ width: '500px', height: '500px' });

  useEffect(() => {
    function handleResize() {
      if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        setCanvasSize({ width: '320px', height: '450px' });
      } else {
        setCanvasSize({ width: '500px', height: '500px' });
      }
    }

    handleResize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, -1, 3],
      }}
      style={{
        backgroundColor: '#181818',
        width: canvasSize.width,
        height: canvasSize.height,
      }}
    >
      <ambientLight intensity={2.0} />
      <directionalLight intensity={3.0} position={[0, 10, 5]}/>
      <Suspense fallback={null}>
        <AboutMe3D scale={0.22} position={[0, 0, 0]}/>
      </Suspense>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI/2}/>
    </Canvas>
  );
};

export default AboutMe3DModel;