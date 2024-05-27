import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Ballon from '../3dObjects/Ballon';

const BallonModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [2.2, 0, 12.25], fov: 15 }}
      style={{
        backgroundColor: '#transparent',
        width: '100%',
        height: '100%',
      }} 
    >
      <ambientLight intensity={1.5} />
      <directionalLight intensity={5.0} position={[0, 8, 5]}/>
      <Suspense fallback={null}>
        <Ballon scale={2.2} position={[1.2, 0.18, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default BallonModel;