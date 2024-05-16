"use client"
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Particle from "../3dObjects/Paritcle";

function generateRandomPosition() {
  const range = 5;
  return [
    Math.random() * range - range / 2,
    Math.random() * range - range / 2,
    Math.random() * range - range / 2,
  ];
}

export default function StarsModel() {
  const [boxes, setBoxes] = useState([
    { position: [0, 0, 5] },
  ]);
  const numCubes = 700;

  useState(() => {
    for (let i = 1; i < numCubes; i++) {
      setBoxes((prevBoxes) => [...prevBoxes, { position: generateRandomPosition() }]);
    }
  }, []);

  return (
    <Canvas
      camera={{ position: [2, 0, 0], fov: 15 }}
      style={{
        backgroundColor: "#121212",
        width: "100%",
        height: "92px",
        position: "fixed" // Dynamic position based on state
      }}
    >
      <ambientLight intensity={1.5} />
      {boxes.map((box, index) => (
        <Particle key={index} position={box.position} />
      ))}
      <OrbitControls autoRotate={true} OrbitControls enableZoom={false} />
    </Canvas>
  );
}
