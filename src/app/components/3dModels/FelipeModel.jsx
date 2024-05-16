import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import Felipe from '../3dObjects/Felipe';

const FelipeModel = () => {
  const [mousePosition, setMousePosition] = useState(new Vector3(0, 0, 0));

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition(
      new Vector3(
        (clientX / window.innerWidth) * 2 - 1,
        -(clientY / window.innerHeight) * 2 + 1,
        10
      )
    );
  };

  return (
    <Canvas
      shadows
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
      }} 
      onPointerMove={handleMouseMove}
    >
      <ambientLight intensity={1.5} />
      <Suspense fallback={null}>
        <MouseControlledDirectionalLight mousePosition={mousePosition} />
        <Felipe scale={1.65} position={[-0.38, -1.3, 1]} />
      </Suspense>
    </Canvas>
  );
};

const MouseControlledDirectionalLight = ({ mousePosition }) => {
  const directionalLightRef = useRef();

  useFrame(() => {
    if (directionalLightRef.current && mousePosition) {
      directionalLightRef.current.position.copy(mousePosition);
    }
  });

  return <directionalLight intensity={5.0} ref={directionalLightRef} />;
};

export default FelipeModel;
